import Navbar from '../components/nav.jsx';

function LandingPage () {
    return (
        <>
            <Navbar/>
            <section>
                <div className='flex justify-center items-center pt-[90px]'>
                    <div className='w-[50%]'>
                        <h1 className='grad w-[90%] text-[40px] mb-[20px]'>REVOLUTIONIZE YOUR EDUCATION WITH DEFI: Learn, Earn and Grow </h1>
                        <p className='text-[25px]'>Staking your knowledge for financial Growth</p>
                    </div>
                    <img  className='w-[20%]' src="/Images/CFD Trading Tipps und Fehlervermeidung 1.png" alt="" />
                </div>
                <div className='flex justify-center items-center bg-[#19BED7] text-white mx-[20%] rounded-xl'>
                    <p className='text-[23px] w-[90%] px-[30px] py-[30px]'>
                        Welcome to our EduFi platform, where learning is more than just gaining knowledge—it's about securing your financial future.
                        We've combined the power of education and decentralized finance to create a system that rewards your academic achievements with real value.
                    </p>
                </div>
                <div className='flex justify-center items-center mt-[70px]'>
                    <img className='w-[25%] mr-[40px]' src="/Images/Short-Positionen vs Long-Positionen 1.png" alt="" />
                    <p className='text-[23px] w-[40%] px-[30px] py-[30px] bg-[#19BED7] text-white rounded-xl'>
                        On our platform, your hard work pays off. Every educational task you complete earns you tokens, 
                        turning your dedication into tangible rewards. 
                        It's not just about grades anymore—it's about building wealth as you learn.
                    </p>
                </div>
                <div className='grid grid-cols-4 gap-2 place-items-center mt-[70px]'>
                    <img className='w-[20%]' src="/Images/Logo yearn_finance (YFI) 1.png" alt="" />
                    <img className='w-[20%]' src="/Images/Logo SushiSwap (SUSHI) 1.png" alt="" />
                    <img className='w-[20%]' src="/Images/Frame 15.png" alt="" />
                    <img className='w-[30%]' src="/Images/Uniswap svela un piano di finanziamento per il rinnovamento dell'ecosistema, mentre il prezzo di UNI tocca i minimi di 4 mesi Periodico Daily 1.png" alt="" />
                </div>
                <div className='flex justify-center items-center flex-col mt-[80px]'>
                    <h2 className='text-[30px]'>Seamless Integration of Education and DeFi</h2>
                    <p className='w-[50%] my-[20px] text-[20px] font-thin'>
                        We've designed our platform to be user-friendly and intuitive, making it easy for you to transition between learning and finance. 
                        Whether you're new to DeFi or a seasoned pro, our platform provides the tools and resources you need to succeed.
                    </p>
                    <div className='flex justify-center items-center'>
                        <img className='w-[25%]' src="/Images/seamless.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default LandingPage