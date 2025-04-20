
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useToast } from '@/components/ui/use-toast';

export interface WalletContextProps {
  account: string | null;
  chainId: number | null;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isRabbyInstalled: boolean;
  isConnected: boolean;
}

const WalletContext = createContext<WalletContextProps>({
  account: null,
  chainId: null,
  isConnecting: false,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  isRabbyInstalled: false,
  isConnected: false,
});

export const useWallet = () => useContext(WalletContext);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider = ({ children }: WalletProviderProps) => {
  const [account, setAccount] = useState<string | null>(null);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isRabbyInstalled, setIsRabbyInstalled] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if Ethereum provider exists (MetaMask, Rabby, etc.)
    const checkProvider = () => {
      if (window.ethereum) {
        setIsRabbyInstalled(
          window.ethereum.isRabby || 
          (window.ethereum.providers && 
           window.ethereum.providers.some((provider: any) => provider.isRabby))
        );
        return true;
      }
      return false;
    };

    const hasProvider = checkProvider();
    
    // Restore connection if previously connected
    const storedAccount = localStorage.getItem('metaplayx_wallet_address');
    if (hasProvider && storedAccount) {
      setAccount(storedAccount);
      window.ethereum.request({ method: 'eth_chainId' })
        .then((chainIdHex: string) => {
          setChainId(parseInt(chainIdHex, 16));
        })
        .catch((error: Error) => {
          console.error('Error getting chain ID', error);
        });
    }

    // Setup listeners
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          localStorage.setItem('metaplayx_wallet_address', accounts[0]);
        } else {
          setAccount(null);
          localStorage.removeItem('metaplayx_wallet_address');
        }
      });

      window.ethereum.on('chainChanged', (chainIdHex: string) => {
        setChainId(parseInt(chainIdHex, 16));
      });
    }

    return () => {
      if (window.ethereum && window.ethereum.removeListener) {
        window.ethereum.removeListener('accountsChanged', () => {});
        window.ethereum.removeListener('chainChanged', () => {});
      }
    };
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast({
        title: "Wallet not detected",
        description: "Please install Rabby or another Ethereum wallet",
        variant: "destructive"
      });
      return;
    }

    setIsConnecting(true);

    try {
      // Try to focus on Rabby if installed
      const provider = window.ethereum.isRabby 
        ? window.ethereum 
        : window.ethereum.providers?.find((p: any) => p.isRabby) || window.ethereum;
      
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      localStorage.setItem('metaplayx_wallet_address', accounts[0]);
      
      const chainIdHex = await provider.request({ method: 'eth_chainId' });
      setChainId(parseInt(chainIdHex, 16));
      
      toast({
        title: "Wallet connected",
        description: `Connected to ${shortenAddress(accounts[0])}`,
      });
    } catch (error: any) {
      toast({
        title: "Connection failed",
        description: error.message,
        variant: "destructive"
      });
      console.error("Wallet connection error:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setChainId(null);
    localStorage.removeItem('metaplayx_wallet_address');
    toast({
      title: "Wallet disconnected",
      description: "Your wallet has been disconnected"
    });
  };

  return (
    <WalletContext.Provider
      value={{
        account,
        chainId,
        isConnecting,
        connectWallet,
        disconnectWallet,
        isRabbyInstalled,
        isConnected: !!account
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

// Helper function to shorten wallet addresses
export const shortenAddress = (address: string, chars = 4): string => {
  if (!address) return '';
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
};
