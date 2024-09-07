import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function Earns () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section className="pl-[300px] pt-[130px]">
                <div className="flex justify-start">
                    <img className="w-[20%]" src="/Images/Frame 40.png" alt="" />
                    <div className="text-white ml-[30px]">
                        <h1 className="text-[30px] mb-[30px]">Call Of Duty </h1>
                        <p>Token price</p>
                        <p className="text-white mb-[20px]">0.04560kii <span className="text-[#29AF04]">+7.20%</span></p>
                        <div className="mb-[20px]">
                            <p>current Gameplays</p>
                            <p>92.5k</p>
                        </div>
                        <div>
                            <p>Market caps</p>
                            <p>$4.7M</p>
                        </div>
                    </div>
                </div>
                <div className=" mt-[40px] w-[50%] mx-[auto] py-[40px] flex justify-center items-center flex-col bg-[#1C7404] rounded-xl">
                    <h1>Token price 0.04560kii</h1>
                    <button className="bg-[#D9D9D9] py-[10px] px-[20px] rounded-sm my-[20px]">stake token </button>
                    <button className="bg-[#0F0F0F] text-white py-[10px] px-[20px] rounded-md">Trade</button>
                </div>
                <div className="text-white">
                    <h1 className="text-[20px] mt-[20px]">Invest trade</h1>
                    <div className="grid grid-cols-4 gap-4 place-items-center">
                        <p>Call of Duty </p>
                        <div>
                            <p>Token Price</p>
                            <p>0.04560kii</p>
                        </div>
                        <div>
                            <p>invested Token </p>
                            <p>5.6780kii($10)</p>
                        </div>
                        <div>
                            <p>ROI</p>
                            <span className="text-[#29AF04]">+7.12%</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Earns