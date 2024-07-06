import React from 'react'
import { CSearch, User } from './icons'

const Navbar = () => {
  return (
    <div className='flex h-14 items-center justify-between px-10 sm:px-16'>
      <div className=' w-32 flex items-center justify-center'>
        <img className='w-full h-24' src="images/bitesLogo-Photoroom.png" alt="" />
      </div>
      <div className='w-1/2'>
        <ul className='sm:flex hidden text-white items-center justify-center gap-11  font-semibold w-full ml-10 font-outfit'>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='flex items-center justify-center gap-2'>
        
        
        <button className='bg-orange  text-white font-bold flex items-center justify-center gap-1  w-[105px] sm:w-32 py-1 rounded-3xl'>
          <User/>
          Sign in</button>
      </div>
    </div>
  )
}

export default Navbar