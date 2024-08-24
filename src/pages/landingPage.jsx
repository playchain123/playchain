// import { useState } from 'react';
import Navbar from '../components/nav.jsx';
import Footer from '../components/footer.jsx'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { ReactTyped } from "react-typed";
// import ProgressBar from "@ramonak/react-progress-bar";
// import Video from '../assets/video.mp4';

function LandingPage () {
    return (
        <>
            <Navbar/>
            <div className="header flex justify-center items-center pt-[130px] pr-[100px] pb-[40px] pl-[80px] items-center bg-white sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="w-[95%]">
                    <div className='flex'>
                        <h2 className="tracking-widest mb-4 text-[35px] w-[70%] z-1000 font-bold sm:text-[17px] md:text-[40px]">DECENTRALISED MEDIA DRIVEN BY YOUR PARTICIPATION</h2>
                        <img className='w-[10%]' src="/Images/logo.png" alt="" />
                    </div>
                    <p className='w-[50%] text-[20px] mb-7 font-semibold sm:text-[16px] tracking-widest sm:w-[100%] md:w-[70%] lg:w-[60%] lg:text-[20px]'>"Stake, Vote, and Earn: Transforming Media Engagement"</p>
                    <div className='bg-[#D9D9D9] b px-[30px] w-[55%] rounded-md py-[40px] flex justify-center items-center flex-col'>
                        <p className='text-[19px] mb-[40px]'>
                        Talktoken is an innovative media memecoin platform that revolutionizes the way users engage with 
                        radio content and podcasts. By rewarding listeners with Talktokens for their engagement, 
                        Talktoken creates a dynamic ecosystem where users can influence content decisions, stake 
                        tokens on their favorite platforms, and earn rewards through active participation. This unique approach empowers both listeners and radio stations, driving a new era of interactive media experiences.
                        </p>
                        <a className='w-[60%] text-center' href="/connect" rel="noopener noreferrer"><button  className="flex justify-center w-[90%] text-center p-[10px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-blue-600 hover:text-white bg-blue-500 sm:hidden md:hidden lg:flex" type="button">Launch app</button></a>
                    </div>
                    <p className='mt-[30px] text-[27px] mb-[10px] font-semibold'>Our Values</p>
                    <p className='text-[27px] font-semibold'>The pillar of Talktoken</p>
                </div>
            </div>
            <section className='coms'>
                <div className='comm flex justify-center items-center flex-col pt-[30px] pb-[120px] text-white'>
                    <h2 className='text-[37px] mb-[40px]'>Community</h2>
                    <p className='w-[45%] text-[20px]'>The Talktoken community aims to create an inclusive, decentralized media 
                        ecosystem where users have a direct impact on the content they consume. 
                        The community's purpose is to foster engagement, support diverse content creators, 
                        and drive social impact through media. By empowering users to participate in content decisions and charity initiatives, the Talktoken community seeks to build a platform that benefits both creators and listeners while contributing to societal good.
                    </p>
                </div>
                <div className='mt-[30px] flex justify-center items-center flex-col'>
                    <iframe src="https://zeno.fm/player/richieart-fm" width="768" height="300"></iframe>
                    <a href="https://zeno.fm/" target="_blank">A Zeno.FM Station</a>
                </div>
                <div className='grid grid-cols-2 gap place-items-center mt-[30px] text-white'>
                    <div className='com1 w-[55%] py-[40px] pl-[50px] rounded-xl'>
                        <h2 className='text-[25px] font-semibold mb-[20px]'>Earn While You Listen</h2>
                        <p className='text-[17px] w-[65%]'>Talktoken transforms passive listening into an active earning experience. Every minute you spend engaging with content is an opportunity to earn tokens that can be used across our platform.</p>
                    </div>
                    <div className='com2 w-[55%] py-[40px] pl-[50px] rounded-xl'>
                        <h2 className='text-[25px] font-semibold mb-[20px]'>Staking and Voting</h2>
                        <p className='text-[17px] w-[75%]'>Stake your Talktokens on the radio stations and podcast platforms you love. Your stakes not only earn you rewards but also give you voting power to decide which content gets promoted, ensuring that the best content rises to the top.</p>
                    </div>
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