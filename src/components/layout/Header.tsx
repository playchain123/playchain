
import { useWallet, shortenAddress } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy, Check, LogOut, Wallet, ExternalLink } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { account, connectWallet, disconnectWallet, isConnecting, isRabbyInstalled } = useWallet();
  const [hasCopied, setHasCopied] = useState(false);

  const copyAddress = () => {
    if (!account) return;
    navigator.clipboard.writeText(account);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const getBlockExplorerUrl = () => {
    // Default to Ethereum mainnet, but this should be dynamically set based on the active chain
    return `https://etherscan.io/address/${account}`;
  };

  return (
    <header className="h-16 border-b border-white/5 px-6 flex items-center justify-between bg-meta-dark/80 backdrop-blur-sm sticky top-0 z-20">
      <div className="flex items-center">
        <div className="flex items-center gap-2 ml-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-r from-meta-purple to-meta-blue md:hidden" />
          <span className="font-bold text-xl hidden md:block">MetaPlayX</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {account ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="bg-secondary border-white/10 hover:bg-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="hidden sm:inline">{shortenAddress(account)}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-meta-dark border border-white/10 text-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/5" />
              <DropdownMenuItem
                onClick={copyAddress}
                className="flex items-center gap-2 cursor-pointer hover:bg-white/5 focus:bg-white/5"
              >
                {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                <span>{hasCopied ? "Copied!" : "Copy Address"}</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => window.open(getBlockExplorerUrl(), "_blank")}
                className="flex items-center gap-2 cursor-pointer hover:bg-white/5 focus:bg-white/5"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View on Explorer</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/5" />
              <DropdownMenuItem
                onClick={disconnectWallet}
                className="flex items-center gap-2 cursor-pointer hover:bg-white/5 focus:bg-white/5 text-red-400"
              >
                <LogOut className="h-4 w-4" />
                <span>Disconnect</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={connectWallet} 
                  disabled={isConnecting}
                  className="meta-button-primary"
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  {isConnecting ? "Connecting..." : isRabbyInstalled ? "Connect Rabby" : "Connect Wallet"}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isRabbyInstalled ? "Connect with Rabby Wallet" : "Connect with MetaMask or other provider"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </header>
  );
};

export default Header;
