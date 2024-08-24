import Navbar from '../components/nav.jsx';

function Dashboard () {
    return (
       <>
            <Navbar/>
            <section>
                <div className='pt-[100px] flex justify-left items-center pl-[130px]'>
                    <h2 className='text-[30px] font-semibold'>Courses</h2>
                </div>
                <div className='pl-[40px] mt-[40px] text-[20px]'>
                    <p>Online courses</p>
                    <p>Defi protocols</p>
                </div>
            </section>
       </> 
    )
}
export default Dashboard