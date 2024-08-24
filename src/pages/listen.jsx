import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function Chart () {
    return  (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section className="pl-[20%]">
                <div className="play flex justify-center items-center flex-col py-[140px] rounded-xl w-[75%]">
                    <h2 className="text-white text-[35px] mb-[20px] font-bold">BRAZIER FM</h2>
                    <img className="w-[6%]" src="/Images/Play.png" alt="" srcSet="" />
                </div>
                <div className="text-black mt-[30px] pl-[40px]">
                    <h2 className="text-[25px] font-semibold">Radio Stations</h2>
                    <div className="grid grid-cols-5 gap-4 mt-[30px] place-items-center ">
                        <img  className="w-[70%]" src="/Images/Premium Vector _ Podcast logo template 1@2x.png" alt="" />
                        <img className="w-[70%]" src="/Images/Premium Vector _ Podcast logo template 1@2x.png" alt="" />
                        <img className="w-[50%]" src="/Images/Austin Community Radio KO-Op 1.png" alt="" />
                        <img className="w-[40%]" src="/Images/d50fd9f5-85ef-472e-8e98-84165b31a141 1.png" alt="" />
                        <img className="w-[50%]" src="/Images/Vintage Radio 1.png" alt="" />
                    </div>
                    <div className="grid grid-cols-5 gap-4 mt-[30px] place-items-center">
                        <img className="w-[40%]" src="/Images/8e69b9b2-b726-4a8e-a35d-59e8d6fbfd0d 1.png" alt="" />
                        <img className="w-[50%]" src="/Images/City Links Radio 1.png" alt="" />
                        <img className="w-[50%]" src="/Images/SNEWS 1.png" alt="" />
                        <img className="w-[50%]" src="/Images/4df79524-b22c-4f8c-a65a-8046eef4ba3b 1.png" alt="" />
                        <img className="w-[50%]" src="/Images/download (13) 1.png" alt="" />      
                    </div>
                </div>
                <div className="text-black mt-[30px] pl-[40px]">
                    <h2 className="text-[25px] font-semibold">Podcast</h2>
                    <div className="grid grid-cols-3 gap-4 mt-[30px] place-items-center ">
                        <img  className="w-[30%]" src="/Images/Podcast hand-drawn vector logo illustration 1.png" alt="" />
                        <img className="w-[30%]" src="/Images/Torch Creative 1.png" alt="" />
                        <img className="w-[30%]" src="/Images/Sd Brew Concept 1.png" alt="" />
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-[30px] place-items-center">
                        <img className="w-[30%]" src="/Images/WORLD MUSIC_IDENT_PACKAGING 1 (1).png" alt="" />
                        <img className="w-[30%]" src="/Images/Uriahschroeder_ I will design awesome itunes podcast logo with satisfaction guaranteed for $40 on fiverr_com 1.png" alt="" />
                        <img className="w-[30%]" src="/Images/Premium Vector _ Podcast logo template 2.png" alt="" />  
                    </div>
                </div>
            </section>
        </>
    )
}
export default Chart