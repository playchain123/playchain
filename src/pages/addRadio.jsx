import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function AddRadio () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section className="pl-[300px] pt-[130px]">
                <h1 className="text-[25px] font-semibold">Add Radio</h1>
                <div className="relative">
                    <div className="border-2 bg-[#D9D9D9] mt-[30px] rounded-md flex justify-center items-center flex-col py-[80px] px-[30px] w-[50%] mb-[30px]">
                        <a className="w-[40%] flex justify-center items-center" href="/listen" rel="noopener noreferrer"><button  className="w-[90%] p-[10px] rounded-md text-center text-[17px] font-medium shadow-md text-white hover:bg-blue-600 hover:text-white bg-blue-500" type="button">Add Image</button></a>
                    </div>
                    <div className="flex justify-left items-start flex-col">
                        <input className="radio mt-[10px] w-[50%] p-[10px] border-2 border-gray-300 rounded-xl bg-[#F6EDED] text-black outline-none text-center mb-[30px]" type="text" placeholder="Name of Radio station" />
                        <input className="radio mt-[10px] w-[50%] px-[10px] py-[40px] border-2 border-gray-300 rounded-xl bg-[#F6EDED] text-black outline-none text-center mb-[30px]" type="text" placeholder="Description of Radio" />
                        <input className="radio mt-[10px] w-[50%] p-[10px] border-2 border-gray-300 rounded-xl bg-[#F6EDED] text-black outline-none text-center mb-[30px]" type="text" placeholder="Live streaming Url" />
                    </div>
                </div>
                <a href="/" rel="noopener noreferrer"><button  className="flex justify-center  py-[10px] px-[70px] mt-[30px] rounded-md text-[16px] mb-[40px] font-medium shadow-md text-white hover:bg-blue-600 hover:text-white bg-blue-500 w-[50%] sm:hidden md:hidden lg:flex" type="button">Add Radio</button></a>
            </section>
        </>
    )
}
export default AddRadio