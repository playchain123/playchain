function Footer() {
    return (
        <>
            <div className="flex justify-startchr pl-10 pb-6 items-center self-center mt-[70px]">
                <div className="flex justify-start items-center">
                    <img className="w-[25%]" src="/Images/logo.png" alt="" />
                    <a className="text-[20px] text-black font-bold" href="/">TalkToken</a>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col justify-center text-black mr-[90px] font-bold ">
                        <a className="text-[16px] pb-[10px]" href="">About</a>
                        <a className="text-[16px] pb-[10px]"  href="">How its work</a>
                        <a className="text-[16px] pb-[10px]" href="">contact us</a>
                        <a className="text-[16px] pb-[10px]" href="">Press Inquiries</a>
                    </div>
                    <div className=" flex flex-col justify-center text-black mr-[90px] font-bold">
                        <a className="text-[16px] pb-[10px]" href="">Community</a>
                        <a className="text-[16px] pb-[10px]" href="">Discord</a>
                        <a className="text-[16px] pb-[10px]" href="">Twitter</a>
                        <a className="text-[16px] pb-[10px]" href="">Medium</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer