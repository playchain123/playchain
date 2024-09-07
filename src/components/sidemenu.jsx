function Sidemenu () {
    return (
        <>
            <div className="fixed pt-[120px] bg-black w-[20%] h-[100vh]" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <aside className="">
                    <ul className="space-y-2 text-[20px] text-white font-semibold">
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/trade">Trade</a></li>
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="">Nft</a></li>
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/earn">Earn</a></li>
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/">Pools</a></li>
                        <li className="hover:bg-gray-800 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/">Voting</a></li>
                    </ul>
                </aside>
            </div>
    
        </>
    )
}
export default Sidemenu