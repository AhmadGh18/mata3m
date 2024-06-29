import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { MdLocalPizza } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between pt-4 pb-2 px-8 border-b border-b-grayish'>
      <div className='flex items-center justify-center gap-2 font-bold'>
        <MdLocalPizza/>
        <p>Bites</p>
      </div>
      <div className='flex items-center justify-center gap-7'>
        <div className='flex items-center  text-brownish bg-grayish px-2 py-[5px] rounded-md gap-1'>
          <CiSearch/> 
          <input className='pl-1 font-bold bg-grayish text-sm text-brownish placeholder:text-brownish focus:outline-none' type="text" placeholder='Search'/>
        </div>
        <div className='flex item-center justify-center gap-2'>
          <button className='bg-orange rounded-xl w-20 py-1 px-2 text-sm text-white font-bold'>Log in</button>
          <button className='bg-grayish rounded-xl w-20 py-1 px-2 text-sm font-bold'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar