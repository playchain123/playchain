import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function Pools () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <div className="flex justify-center items-center pt-[100px]">
                <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center" type="text" placeholder="Search" />
            </div>
            <section className="pl-[300px] pt-[20px] mt-[10px]">
                <div className="pools px-[50px] pt-[2px] pb-[33px]">
                    <div className="flex justify-left items-center">
                        <button className="text-white py-[15px] px-[30px] mr-[90px] text-[20px] bg-transparent border-2 w-[27%] outline-none">TOP 1 HIT</button>
                        <div>
                            <div className="text-white bg-[#D9D9D9] mr-[20px] ml-[80px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px]">
                                <p>Daily reward</p>
                                <p>0.9231MUS</p>
                                <p>$2.05</p>
                            </div>
                            <div className="text-white bg-[#D9D9D9] ml-[80px] mr-[70px] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[60%]">
                                <p>Daily reward</p>
                                <p>0.9231MUS</p>
                                <p>$2.05</p>
                            </div>
                        </div>
                        <div className="text-white bg-[#D9D9D9] rounded-xl flex justify-center items-center flex-col text-[19px] mt-[20px] py-[10px] px-[10px] w-[15%]">
                            <p>Active  listener</p>
                            <p>100K</p>
                        </div>
                    </div>
                    <div className="flex justify-left items-center ml-[20px] mt-[70px]">
                        <img className="w-[2.5%] mr-[20px]" src="/Images/Play (1).png" alt="" />
                        <p className="text-white text-[20px]">The heart is Me</p>
                    </div>
                </div>
                <div className="text-white mt-[20px] flex justify-center items-center flex-col">
                    <h1 className="text-[25px] mb-[12px]">Album Liqudity Pools</h1>
                    <p className="w-[50%] text-[17px]">Musicians turn your albums in earnings, albums are turned into liquidity pools. Fans stake tokens in these pools, earning a share of the streaming revenue.</p>
                </div>
                <div>
                    <div className="mt-[25px]">
                        <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">All Albums</button>
                        <input className="border-2 py-[5px] px-[30px] w-[30%] outline-none rounded-md bg-transparent text-white text-[18px] text-center" type="text" placeholder="Search" />
                   
                        <div className="grid grid-cols-5 gap-4 mt-[25px] text-[17px]">
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Hippop</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Jazz</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Pop</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Gospel</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Afro</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Reggae</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Rap</button>
                            <button className="border-2 border-neutral-800 rounded-md text-white px-[12px] py-[10px] mr-[20px]">Trap</button>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-6 gap-4 mt-[40px] text-white text-[18px] mb-[20px]">
                            <h2>*</h2>
                            <h2>Name of Alb</h2>
                            <h2>Artist</h2>
                            <h2>Price</h2>
                            <h2>Listeners</h2>
                            <h2>Market caps</h2>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px]">
                            <img className="w-[25%]" src="/Images/Rectangle 112.png" alt="" />
                            <p>The king of tear</p>
                            <p>Kevin</p>
                            <p>0.185btb</p>
                            <p>89k</p>
                            <p>$3.5M</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px]">
                            <img className="w-[25%]" src="/Images/Rectangle 113.png" alt="" />
                            <p>Hallows</p>
                            <p>Shane</p>
                            <p>0.0345btb</p>
                            <p>85k</p>
                            <p>$3.3M</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px]">
                            <img className="w-[25%]" src="/Images/Rectangle 114.png" alt="" />
                            <p>Why the way</p>
                            <p>lil burk</p>
                            <p>0.0340btb</p>
                            <p>75k</p>
                            <p>$3.0M</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px]">
                            <img className="w-[25%]" src="/Images/Rectangle 115.png" alt="" />
                            <p>Men of Honours</p>
                            <p>sheler</p>
                            <p>0.0325btb</p>
                            <p>60k</p>
                            <p>$2.9M</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 text-white mb-[20px]">
                            <img className="w-[25%]" src="/Images/Rectangle 116.png" alt="" />
                            <p> The Shallows</p>
                            <p>wale</p>
                            <p>0.0045btb</p>
                            <p>55k</p>
                            <p>$2.8M</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Pools