import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAccount } from 'wagmi';
import Navbar from '../components/nav.jsx';
function ConnectWallet () {
    // const naivgate = useNavigate();
    // const { address, isConnecting, isDisconnected } = useAccount();
    
    // useEffect(() => {
    //     if (address && !isConnecting) {
    //       naivgate('/reels');
    //     }
    //   }, [address, isConnecting, history]);
    return (
        <>
            <Navbar/>
            <div className="flex justify-center items-center self-center pt-[140px]">
                <img className="w-[6%]" src="/Images/icon.png" alt="" />
                <a className="text-[35px] text-black font-medium" href="/">TalkToken</a>
            </div>
            <div className='connect text-black rounded-sm flex justify-center items-center mt-[30px]'>
                <a href="/reels"><button className='text-white bg-blue-500 hover:bg-blue-600 py-[10px] px-[20px] rounded-md text-[20px]' type='button'>Connect Wallet</button></a>
            </div>
        </>
    )
}
export default ConnectWallet