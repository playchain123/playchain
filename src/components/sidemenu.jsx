function Sidemenu () {
    return (
        <>
            <div className="fixed pt-[120px] bg-gray-100 w-[20%] h-[100vh]" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
                <aside className="">
                    <ul className="space-y-2 text-[20px] font-semibold">
                        <li className="hover:bg-gray-300 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/">Listen</a></li>
                        <li className="hover:bg-gray-300 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/add-radio">Add radio</a></li>
                        <li className="hover:bg-gray-300 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/">Add Podcast</a></li>
                        <li className="hover:bg-gray-300 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/">Pools</a></li>
                        <li className="hover:bg-gray-300 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/">Earns</a></li>
                        <li className="hover:bg-gray-300 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/chat">Voting</a></li>
                        <li className="hover:bg-gray-300 hover:py-[10px] py-[10px] pl-[20px] hover:w-[90%] hover:pl-[20px]"><a href="/topchart">Buy talktoken</a></li>
                    </ul>
                </aside>
            </div>
    
        </>
    )
}
export default Sidemenu