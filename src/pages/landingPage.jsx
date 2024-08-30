import Navbar from '../components/nav.jsx';
import Footer from '../components/footer.jsx'
function LandingPage () {
    return (
        <>
            <Navbar/>
            <section>
                <div className='flex justify-center items-center flex-col pt-[150px]'>
                    <div className='header'>
                        <div className='flex justify-center items-center'>
                            <h1 className='text-[45px] w-[60%] font-semibold mb-[20px]'>DECENTRALISED MEDIA DRIVEN BY YOUR PARTICIPATION</h1>
                            <img className='w-[9%]' src="/Images/icon.png" alt="" />
                        </div>
                        <p className='text-[25px] text-center'>"Stake, Vote, and Earn: Transforming Media Engagement"</p>
                        <div className='flex justify-center items-center bg-[#D9D9D9] py-[20px] mx-[25%] flex-col rounded-md mt-[30px]'>
                            <p className='text-[18px] w-[80%] mb-[20px]'>
                            Talktoken is an innovative media memecoin platform that revolutionizes the way users engage with radio content and podcasts. 
                            By rewarding listeners with Talktokens for their engagement, Talktoken creates a dynamic 
                            ecosystem where users can influence content decisions, stake tokens on their favorite platforms, and earn rewards through active participation. 
                            This unique approach empowers both listeners and radio stations, driving a new era of interactive media experiences.
                            </p>
                            <a href="/" rel="noopener noreferrer"><button  className="flex p-[10px] rounded-md text-[14px] font-medium shadow-md text-white hover:bg-blue-600 hover:text-white bg-blue-500 sm:hidden md:hidden lg:flex" type="button">Launch app</button></a>                            
                        </div>
                    </div>
                </div>
                <div className='pt-[130px] flex justify-center items-center flex-col'>
                    <iframe src="https://zeno.fm/player/richieart-fm" width="768" height="300"></iframe>
                    <a href="https://zeno.fm/" target="_blank">A Zeno.FM Station</a>
                </div>
                <div className='grid grid-cols-4 gap-2 place-items-center mt-[70px]'>
                    <img className='w-[20%]' src="/Images/Logo yearn_finance (YFI) 1.png" alt="" />
                    <img className='w-[20%]' src="/Images/Logo SushiSwap (SUSHI) 1.png" alt="" />
                    <img className='w-[20%]' src="/Images/Frame 15.png" alt="" />
                    <img className='w-[30%]' src="/Images/Uniswap svela un piano di finanziamento per il rinnovamento dell'ecosistema, mentre il prezzo di UNI tocca i minimi di 4 mesi Periodico Daily 1.png" alt="" />
                </div>
                <div className='cross flex justify-center items-center flex-col rounded-xl mt-[40px] text-white mx-[26%] py-[30px] px-[40px]'>
                    <h2 className='text-[37px] mb-[40px]'>Cross-Chain Flexibility</h2>
                    <p className='w-[90%] text-[20px] mb-[20px]'>
                    Talktoken operates across multiple blockchain networks, providing users with the flexibility to trade, stake, 
                    and earn tokens on the platform of their choice. 
                    This cross-chain capability ensures that you have the freedom to use your tokens wherever they are most valuable.
                  </p>
                  <a className='w-[30%]' href="" rel="noopener noreferrer"><button  className="flex justify-center items-center w-full text-center p-[10px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-blue-600 hover:text-white bg-blue-500 sm:hidden md:hidden lg:flex" type="button">Swap</button></a>
                </div>
            </section>
            <div className='charity flex justify-center items-center flex-col rounded-xl mt-[40px] text-white mx-[16%] py-[30px] px-[40px]'>
                <h2 className='text-[37px] mb-[40px]'>Charity Program </h2>
                <p className='w-[90%] text-[20px] mb-[20px]'>
                Talktoken's charity program will focus on leveraging the platform's media influence to drive social impact. The program will allocate a portion of the tokens to support media-related charity initiatives, fostering positive change in society.
                Educational Broadcasting: Support radio stations that broadcast educational content, particularly in underprivileged areas, to promote learning and development.
                Mental Health Awareness: Partner with mental health organizations to create and broadcast content that raises awareness and provides resources for mental well-being.
                Community Radio Support: Fund community radio stations in rural and underserved areas, giving a voice to local communities and promoting cultural preservation
                Youth Empowerment Programs: Sponsor radio programs focused on youth empowerment, skill development, and entrepreneurship, helping young people access opportunities and resources
                </p>
            </div>
            <div className='mt-[30px] flex justify-center items-center flex-col'>
                <h1 className='mb-[30px] text-[45px] font-bold'>TOKENOMICS</h1>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='text-[27px] font-bold'>
                        <h1>Token supply</h1>
                        <p className='ml-[20px]'>50000000</p>
                    </div>
                    <div className='text-[27px] font-bold'>
                        <h1>Token burned</h1>
                        <p className='ml-[20px]'>45%</p>
                    </div>
                    <div className='text-[27px] font-bold'>
                        <h1>Transaction</h1>
                        <p className='ml-[20px]'>4%</p>
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <p className='mb-[20px] w-[70%] font-semibold text-[18px]'>Our  marketing strategy and token distribution is in the whitepaper</p>
                    <a className='flex justify-center items-center' href="" rel="noopener noreferrer"><button  className="text-center p-[10px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-blue-600 hover:text-white bg-blue-500 sm:hidden md:hidden lg:flex" type="button">Check Whitepaper</button></a> 
                </div>
                <div className='grid grid-cols-4 gap-2 place-items-center mt-[30px]'>
                    <img className='w-[23%]' src="/Images/2c37388b-192e-40b2-bcfb-81f86d4c44b6 1.png" alt="" />
                    <img className='w-[30%]' src="/Images/Plantillas de Logotipos Gratis 1.png" alt="" />
                    <img className='w-[30%]' src="/Images/_nyc-based podcast logo_  _bold, cocky, attention-demanding_ _ Logo design contest 1.png" alt="" />
                    <img className='w-[30%]' src="/Images/Premium Vector _ Podcast logo template 1@2x.png" alt="" />
                </div>
                <div className='mt-[30px]'>
                    <h2 className='text-[30px] mb-[20px] font-bold'>Join the Talktoken Revolution</h2>
                    <p className='mb-[20px] w-[70%] font-semibold text-[18px]'>Our  marketing strategy and token distribution is in the whitepaper</p>
                    <a className='flex justify-center items-center' href="" rel="noopener noreferrer"><button  className="text-center p-[10px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-blue-600 hover:text-white bg-blue-500 sm:hidden md:hidden lg:flex" type="button">Check Whitepaper</button></a> 
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default LandingPage