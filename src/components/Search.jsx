import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { ArrowForward, CSearch, Fire } from './icons'
import Navbar from './Navbar'

const Search = () => {
  return (
    
    <div className='main h-[520px] sm:h-screen   bg-[url("images/bg2.jpg")]   w-full bg-no-repeat bg-cover bg-center '>
      <Navbar/>
       <div className='flex items-center justify-between w-full px-0 sm:px-10 mt-0 sm:mt-8 h-[500px]'>
       <div className='w-full  sm:w-2/5 h-full p-5 text-white mt-5 sm:mt-20 text-center sm:text-left'>
        
            <p className='text-4xl sm:text-5xl mt-4 text-justify font-bold font-nunito'>Discover and <span className='text-orange'>order</span> delicious meals from <span className='text-orange'>nearby</span> restaurants.</p>
            <p className='text-left text-xl mt-4 text-white font-outfit'>Enjoy a seamless food ordering experience.</p>
           
           <div className='bg-white flex items-center justify-between w-full  sm:w-80 py-2 px-1 sm:py-1 rounded-md mt-7 m-auto sm:ml-0'>
              <div className='flex justify-center items-center text-orange gap-4'>
                  <span className='text-xl font-extrabold'><CSearch/></span>
                  <input type="text" placeholder='Search' className='placeholder:text-orange focus:outline-none'/>
              </div>
              <button className='bg-orange px-2 py-1  text-xs  sm:text-sm  rounded-3xl font-bold'>
                Find Food
              </button>
           </div>
          
        </div>

        <div className='w-3/5 h-full hidden sm:flex items-center justify-center relative'>
            <img className='animate-spin h-[480px] absolute right-0 rounded-full' src="images/file.png" alt="" />
        </div>
       </div>
        
    </div>
  )
}

export default Search