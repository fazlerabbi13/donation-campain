import './Banner.css'

const Banner = () => {
    return (
        <div className="h-[60vh] w-[1380px] bg mx-auto bg-[Rectangle 4281.jpg]">
                      <div className='py-16 flex justify-center items-center'><h1 className='font-bold text-[45px]'>I Grow By Helping People In Need</h1></div>

           <div className='flex justify-center items-center mt-7'>
        
           <input className='w-[450px] h-[50px] bg-[#FFF] rounded text-center' type="search" placeholder='Search here------' name="" id="" />
            <button className='text-white w-[90px] h-[50px] rounded bg-[#FF444A]'>Search</button>
           </div>
         </div>
    
    );
};

export default Banner;