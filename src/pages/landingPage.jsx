import Navbar from '../components/nav.jsx';
function LandingPage () {
    return (
        <>
            <Navbar/>
            <section>
                <div className='flex justify-center items-center flex-col pt-[120px]'>
                    <div className='header'>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-[45px] w-[50%] font-semibold text-white mb-[20px]'>Transforming Gaming Passion Real world Reward</h1>
                            <img className='w-[14%]' src="/Images/image.png" alt="" />
                        </div>
                        <div className='empower flex justify-center items-center py-[40px] mx-[25%] flex-col rounded-md mt-[30px] text-white'>
                            <h3 className='mb-[50px] text-[20px]'>Empower Your Playtime: Turn Achievements into Assets</h3>
                            <p className='text-[20px] w-[80%] mb-[30px]'>Welcome to Playchain, where gaming meets blockchain technology to offer you a unique opportunity to turn your in-game achievements into real-world rewards. Our platform empowers you to invest in your favorite games and earn based on your performance and engagement.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex justify-content items-center mt-[30px] flex-col'>
                    <h1 className='text-[29px] tracking-wide text-white font-bold'>INVEST AND TRADE IN REALTIME GAMEPLAY</h1>
                    <img className='w-[47%]' src="/Images/invest.png" alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-[33%]' src="/Images/GTA VI 1.png" alt="" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-[20px] place-items-center">
                    <img className='w-[37%]' src="/Images/Front Page 2.png" alt="" />
                    <img className='w-[37%]' src="/Images/epic.png" alt="" />
                </div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <img className='w-[33%]' src="/Images/crew.png" alt="" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-[20px] place-items-center">
                    <div className='bg-[#1C7404] text-white px-[30px] py-[30px] w-[50%] rounded-md'>
                        <h2 className='mb-[20px] text-[20px]'>Explore, stake and Trade</h2>
                        <p>Invest in real time gameplay and game datas,At Playchain, we believe in rewarding your dedication and skill. Our platform allows you to stake tokens on your favorite games, participate in trading, and earn real-world rewards based on your performance."</p>
                    </div>
                    <div className='bg-[#1C7404] text-white px-[30px] py-[30px] w-[42%] rounded-md'>
                        <p>Dive into a new era of gaming where your talents are not only for entertainment but also for financial growth. With Playchain, every move you make can bring real-world returns, making your gaming experience more thrilling than ever.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LandingPage