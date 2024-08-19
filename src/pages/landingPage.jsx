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
                    <iframe src="https://zeno.fm/player/richieart-fm" width="768" height="300" frameborder="0" scrolling="no"></iframe>
                    <a href="https://zeno.fm/" target="_blank">A Zeno.FM Station</a>
                </div>
                <div className='flex justify-center items-center place-items-center px-[150px] mt-[30px] text-white'>
                    <div className='com1 flex justify-center items-center flex-col px-[30px] py-[90px] rounded-xl'>
                        <h2 className='text-[25px] font-semibold mb-[20px]'>Earn While You Listen</h2>
                        <p className='text-[20px]'>Talktoken transforms passive listening into an active earning experience. Every minute you spend engaging with content is an opportunity to earn tokens that can be used across our platform.</p>
                    </div>
                    <div className='com2 flex justify-center items-center flex-col ml-[20px] px-[30px] py-[80px]'>
                        <h2 className='text-[25px] font-semibold mb-[20px]'>Staking and Voting</h2>
                        <p className='text-[20px] w-[80%]'>Stake your Talktokens on the radio stations and podcast platforms you love. Your stakes not only earn you rewards but also give you voting power to decide which content gets promoted, ensuring that the best content rises to the top.</p>
                    </div>
                </div>
                <div className='cross flex justify-center items-center flex-col pt-[50px] px-[80px] pb-[120px] text-white mt-[40px] rounded-xl'>
                    <h2 className='text-[37px] mb-[40px]'>Cross-Chain Flexibility</h2>
                    <p className='w-[45%] text-[20px]'>
                    Talktoken operates across multiple blockchain networks, providing users with the flexibility to trade, stake, 
                    and earn tokens on the platform of their choice. 
                    This cross-chain capability ensures that you have the freedom to use your tokens wherever they are most valuable.
                  </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default LandingPage