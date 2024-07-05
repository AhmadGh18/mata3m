import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { ArrowForward, Fire } from './icons'

const Search = () => {
  return (
    <div className='main h-[480px]   flex items-center justify-between   w-11/12  m-auto mt-10'>
        <div className='w-2/5 h-full p-5'>
            <p className='mt-16 py-[1.7px] pr-1 pl-2 w-32 rounded-[50px]  bg-light-green text-dark-green flex items-center justify-between'>
                  <span className='font-semibold text-sm ml-1'>Hot Offer</span>
                 <span className='h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-lg'><Fire/></span>
                 </p>
            <p className='text-5xl mt-4 text-justify font-bold'>Get <span className='text-orange'>0$</span> delivery fee on your <span className='text-orange'>first order</span></p>
            <p className='text-xl mt-4 text-black'>Order from your favorite restaurant</p>
            <button className='mt-4 bg-lightorange shadow-sm shadow-lightorange text-white rounded-md py-2 px-4 font-bold flex items-center justify-center gap-2'>
                Order Now <span className='bg-white text-lightorange p-1 rounded shadow'><ArrowForward/></span>
            </button>
        </div>

        <div className='w-3/5 h-full flex items-center justify-center relative'>
            <img className='h-[500px] absolute right-0' src="images/pasta.png" alt="" />
        </div>
        
    </div>
  )
}

export default Search