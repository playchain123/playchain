import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function Trade () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section className="pl-[300px] pt-[130px]">
                <div style={{body: 'black'}}>
                    <h1 className="text-white mb-[30px] text-[25px] tracking-widest">Trade Gameplay Tokens</h1>
                    <img className="w-[55%]" src="/Images/d.png" alt="" />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-[50px]">
                    <div>
                        <img className="w-[60%]" src="/Images/call.png" alt="" />
                        <h2 className="text-white mt-[20px]">Call Of Duty</h2>
                        <div>
                            <p className="text-white">0.04560kii <span className="text-[#29AF04]">+7.20%</span></p>
                        </div>
                    </div>
                    <div>
                        <img className="w-[60%]" src="/Images/Front Page 2.png" alt="" />
                        <h2 className="text-white mt-[20px]">GhostRecon</h2>
                        <div>
                            <p className="text-white">0.04560kii <span className="text-[#29AF04]">+5.20%</span></p>
                        </div>
                    </div>
                    <div>
                        <img className="w-[80%]" src="/Images/crr.png" alt="" />
                        <h2 className="text-white mt-[20px]">The Crew 2</h2>
                        <div>
                            <p className="text-white">0.14560kii <span className="text-[#29AF04]">+6.20%</span></p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-[50px]">
                    <div>
                        <img className="w-[60%]" src="/Images/age.png" alt="" />
                        <h2 className="text-white mt-[20px]">Ages of Empire</h2>
                        <div>
                            <p className="text-white">0.04560kii <span className="text-[#800909]">-7.20%</span></p>
                        </div>
                    </div>
                    <div>
                        <img className="w-[60%]" src="/Images/ass.png" alt="" />
                        <h2 className="text-white mt-[20px]">Assassin Creed</h2>
                        <div>
                            <p className="text-white">0.04560kii <span className="text-[#800909]">-5.20%</span></p>
                        </div>
                    </div>
                    <div>
                        <img className="w-[64%]" src="/Images/gg.png" alt="" />
                        <h2 className="text-white mt-[20px]">God of war</h2>
                        <div>
                            <p className="text-white">0.14560kii <span className="text-[#29AF04]">+6.20%</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Trade