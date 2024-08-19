import ReelsNavBar from "./reelsNavbar"
import Sidemenu from "../components/sidemenu"
function AddRadio () {
    return (
        <>
            <ReelsNavBar/>
            <Sidemenu/>
            <section className="pl-[300px] pt-[130px]">
                <h1 className="text-[20px] font-semibold">Add Radio</h1>
                <div className="relative">
                    <div className="border-2 border-neutral-800 mt-[30px] flex justify-center items-center flex-col py-[50px] px-[30px] w-[60%]">
                        <img className="w-[15%]" src="/Images/Upload.png" alt="" />
                        <div className="mt-[60px] flex justify-center items-center">
                            <h1 className="text-white text-[20px] mr-[40px]">Drag and drop or</h1>
                            <img className="w-[3%] absolute left-[30%]" src="/Images/Upload (1).png" alt="" />
                            <a href="/connect" rel="noopener noreferrer"><button  className="flex py-[10px] px-[70px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex" type="button">Select File</button></a>
                        </div>
                    </div>
                    <p className="text-white text-[20px] tracking-widest mt-[30px]">Enter Title</p>
                    <input className="mt-[10px] w-[60%] p-[10px] border-2 border-neutral-800 bg-transparent outline-none" type="text" />
                    <p className="text-white text-[20px] tracking-widest mt-[30px]">Description</p>
                    <input className="mt-[10px] w-[60%] p-[10px] border-2 border-neutral-800 bg-transparent outline-none" type="text" />
                </div>
                <div className="flex mt-[30px] relative justify-left items-center">
                    <p className="text-white mr-[30px] py-[20px] px-[30px] border-2 border-neutral-800 bg-transparent">Upload Ablum</p>
                    <img className="w-[3%] absolute left-[19%] top-[22%]" src="/Images/Upload (1).png" alt="" />
                    <a href="/connect" rel="noopener noreferrer"><button  className="flex py-[10px] px-[70px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex" type="button">Select File</button></a>
                </div>
                <a href="/connect" rel="noopener noreferrer"><button  className="flex py-[10px] px-[70px] mt-[20px] rounded-md text-[15px] font-medium shadow-md text-white hover:bg-[#ff015f] hover:text-white bg-[#DE0808] sm:hidden md:hidden lg:flex" type="button">Upload Image</button></a>
                <div className="mt-[20px]">
                    <label className="text-white text-[22px]" htmlFor="">Category</label>
                    <div className="flex justify-left items-center">
                        <select className="w-[20%] mr-[10px] mt-[20px] bg-transparent border-2 border-neutral-800 py-[9px] px-[10px] cursor-pointer text-[20px]" name="" id="">
                            <option value="">Pop</option>
                            <option value="">Rock</option>
                            <option value="">Jazz</option>
                        </select>
                        <div className="flex mt-[10px]">
                            <input className="mr-[10px]" type="checkbox" name="" id="" />
                            <h2 className="text-white">Short reels</h2>
                        </div>
                    </div>
                </div>
                <a href="/connect" rel="noopener noreferrer"><button  className="flex justify-center  py-[10px] px-[70px] mt-[30px] rounded-md text-[16px] mb-[40px] font-medium shadow-md text-white hover:bg-blue-600 hover:text-white bg-blue-500 w-[50%] sm:hidden md:hidden lg:flex" type="button">Add Radio</button></a>
            </section>
        </>
    )
}
export default AddRadio