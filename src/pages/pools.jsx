import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function Pools () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section className="pl-[300px] pt-[130px]">
                <div>
                    <h2 className="font-semibold text-[30px]">Pools</h2>
                    <p className="text-[18px] mt-[10px] w-[50%]">Stake and earn tokens from your favorite radio station or podcast, put your funds into work</p>
                    <img className="w-[40%] mt-[40px]" src="/Images/Radio station logo_ Music studio 1.png" alt="" />
                </div>
                <div className="grid grid-cols-5 gap-4 mt-[50px] place-items-center">
                    <h2 className="text-[17px] font-semibold">*</h2>
                    <h2 className="text-[17px] font-semibold">Radios</h2>
                    <h2 className="text-[17px] font-semibold">Token price</h2>
                    <h2 className="text-[17px] font-semibold">Market</h2>
                    <h2 className="text-[17px] font-semibold">Listeners</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-[50px] place-items-center">
                    <img className="w-[30%]" src="/Images/Premium Vector _ Online radio station vintage icon or symbol 2.png" alt="" />
                    <h2 className="text-[17px] font-semibold">Blaze fm</h2>
                    <h2 className="text-[17px] font-semibold">0.2341 <span className="text-[#03EB26]">+6.1%</span></h2>
                    <h2 className="text-[17px] font-semibold">$10.7M</h2>
                    <h2 className="text-[17px] font-semibold">7.5M</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-[50px] place-items-center">
                    <img className="w-[30%]" src="/Images/Austin Community Radio KO-Op 1.png" alt="" />
                    <h2 className="text-[17px] font-semibold">Chorus</h2>
                    <h2 className="text-[17px] font-semibold">0.5341 <span className="text-[#03EB26]">+4.1%</span></h2>
                    <h2 className="text-[17px] font-semibold">$10.2M</h2>
                    <h2 className="text-[17px] font-semibold">7.3M</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-[50px] place-items-center">
                    <img className="w-[30%]" src="/Images/City Links Radio 1.png" alt="" />
                    <h2 className="text-[17px] font-semibold">City fm</h2>
                    <h2 className="text-[17px] font-semibold">0.4341 <span className="text-[#C80606]">-2.1%</span></h2>
                    <h2 className="text-[17px] font-semibold">$9.7M</h2>
                    <h2 className="text-[17px] font-semibold">6.9M</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-[50px] place-items-center">
                    <img className="w-[30%]" src="/Images/4df79524-b22c-4f8c-a65a-8046eef4ba3b 1.png" alt="" />
                    <h2 className="text-[17px] font-semibold">Trend fm </h2>
                    <h2 className="text-[17px] font-semibold">0.7341 <span className="text-[#03EB26]">+3.1%</span></h2>
                    <h2 className="text-[17px] font-semibold">$8.7M</h2>
                    <h2 className="text-[17px] font-semibold">6.5M</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-[50px] place-items-center">
                    <img className="w-[30%]" src="/Images/_nyc-based podcast logo_  _bold, cocky, attention-demanding_ _ Logo design contest 2.png" alt="" />
                    <h2 className="text-[17px] font-semibold">Rainer fm</h2>
                    <h2 className="text-[17px] font-semibold">0.1341 <span className="text-[#C80606]">-5.1%</span></h2>
                    <h2 className="text-[17px] font-semibold">$7.8M</h2>
                    <h2 className="text-[17px] font-semibold">6.2M</h2>
                </div>
                <div className="grid grid-cols-5 gap-4 mt-[50px] place-items-center">
                    <img className="w-[30%]" src="/Images/SNEWS 1.png" alt="" />
                    <h2 className="text-[17px] font-semibold">roadono fm </h2>
                    <h2 className="text-[17px] font-semibold">0.2341 <span className="text-[#03EB26]">+6.1%</span></h2>
                    <h2 className="text-[17px] font-semibold">$7.0M</h2>
                    <h2 className="text-[17px] font-semibold">6M</h2>
                </div>

            </section>
        </>
    )
}
export default Pools