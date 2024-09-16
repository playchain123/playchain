import { useState, useEffect } from "react";
import { StargateClient } from '@cosmjs/stargate';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { useAccount } from 'wagmi';

function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    const [error, setError] = useState(null);   
    const [account, setAccount] = useState(null);
    const [connected, setConnected] = useState(false);
    const navigate = useNavigate()
  const connectToKeplr = async () => {
    if (!window.keplr) {
        setError(
            <>
                Keplr wallet is not installed. Please{' '}
                <a href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap" target="_blank" rel="noopener noreferrer">
                install Keplr
                </a>{' '}
                to continue.
            </>
        );
        return;
    }
    try {

      // Suggest Kiichain to Keplr if it hasn't been added
      await window.keplr.experimentalSuggestChain({
        chainId: 'kichain-t-4',  // For Testnet, use 'kichain-1' for Mainnet
        chainName: 'KiChain Testnet',  // Change to 'KiChain' for Mainnet
        rpc: 'https://rpc.testnet.kichain.network',  // Replace with correct RPC URL for Mainnet if needed
        rest: 'https://lcd.testnet.kichain.network', // Replace with correct REST URL for Mainnet if needed
        bip44: {
          coinType: 118,
        },
        bech32Config: {
          bech32PrefixAccAddr: 'ki',
          bech32PrefixAccPub: 'kipub',
          bech32PrefixValAddr: 'kivaloper',
          bech32PrefixValPub: 'kivaloperpub',
          bech32PrefixConsAddr: 'kivalcons',
          bech32PrefixConsPub: 'kivalconspub',
        },
        currencies: [
          {
            coinDenom: 'XKI',
            coinMinimalDenom: 'uxki',
            coinDecimals: 6,
          },
        ],
        feeCurrencies: [
          {
            coinDenom: 'XKI',
            coinMinimalDenom: 'uxki',
            coinDecimals: 6,
          },
        ],
        stakeCurrency: {
          coinDenom: 'XKI',
          coinMinimalDenom: 'uxki',
          coinDecimals: 6,
        },
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      });

      // Enable Kiichain in Keplr
      await window.keplr.enable('kichain-t-4');  // Use 'kichain-1' for Mainnet
      const offlineSigner = window.getOfflineSigner('kichain-t-4');  // Use 'kichain-1' for Mainnet
      const accounts = await offlineSigner.getAccounts();
      const userAccount = accounts[0].address;

      setAccount(userAccount);
      setConnected(true);
      setError(null);
      navigate('/trade', { state: { account: userAccount } })
      
    } catch (err) {
      console.error('Failed to add Kiichain:', err);
      setError('Failed to connect to Kiichain. Chain ID may not be supported.');
    }
  };
    // const navigate = useNavigate();
    // const { address, isConnecting, isDisconnected } = useAccount();
    
    // useEffect(() => {
    //     if (address && !isConnecting) {
    //       navigate('/trade');
    //     }
    //   }, [address, isConnecting, history]);
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-transparent shadow-lg">
                <nav className="flex justify-between items-center  my-[10px] mx-10 h-10 pb-13 sm:mx-5 lg:mx-10">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="flex justify-start items-center self-center">
                            <img className="w-[18%]" src="/Images/icon.png" alt="" />
                            <a className="text-[23px] font-medium text-[#1C7404]" href="/">AYCHAIN</a>
                        </div>
                        <div className="w-0 sm:w-7 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/Images/menu.png" alt=""/> : <img className="cursor-pointer" src="/Images/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-center items-center text-white text-[16px] space-x-5 sm:hidden md:hidden lg:flex">
                        <li className="text-center font-semibold"><a className='pr-3' href="">About</a></li>
                        <li className="text-center font-semibold"><a className='pr-3' href="/">Tokenmics</a></li>
                        <li className="text-center font-semibold"><a className='pr-3' href="">Integration</a></li>
                        <li className="text-center font-semibold"><a className='pr-3' href="">Swap</a></li>
                        {/* <button onClick={navigate}><w3m-connect-button/></button> */}
                        <button className="bg-blue-500 py-[7px] px-[7px] text-[14px] rounded-md hover:bg-blue-600" onClick={connectToKeplr}>
                            {connected ? `Connected ${account}` : 'Connect to KiChain'}
                        </button>
                        {/* <button  className="flex p-[10px] rounded-xl text-[14px] font-medium shadow-md text-white hover:bg-green-700 hover:text-white bg-[#1C7404] sm:hidden md:hidden lg:flex" type="button">Connect Wallet</button> */}
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[76px] h-full bg-[#E4E4E4] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-6">
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="/">About</a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="">Tokenmics</a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="">Integration</a></li>
                            <li className="text-md"><a className='hover:text-[#ff014f] font-medium' onClick={showNav} href="">Swap</a></li>
                        </ul>
                        <div className="flex p-[10px] ml-12 w-[40%] mr-4 rounded-md text-[13px] hover:bg-[#ff014f] hover:text-white bg-[#878e99] sm:w-[50%]">
                            <a href="https://www.resume.com/dashboard/resume/a1dbbd70-42a3-43fb-b7ba-18b37407ed87" target="_blank" rel="noopener noreferrer"><button type="button">Download Resume</button></a>
                        </div>
                    </div>
                   
                </nav>
            </div>
        </>
    )
}
export default NavBar