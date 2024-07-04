import React from 'react'
import { CSearch, User } from './icons'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-16'>
      <div className=' w-32 flex items-center justify-center'>
        <img className='w-full h-24' src="images/bitesLogo-Photoroom.png" alt="" />
      </div>
      <div className='w-1/2'>
        <ul className='flex items-center justify-center gap-11  font-semibold w-full ml-10'>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className='flex items-center justify-center gap-2'>
        <div className='your-class shadow-md flex items-center justify-center gap-2 text-white bg-black px-4 py-1.5'>
          <span className='font-bold text-xl'><CSearch/></span>
          <input className='bg-black placeholder:text-white text-sm placeholder:text-xs placeholder:font-semibold focus:outline-none w-36'
                 
                 type="text" 
                 placeholder='Search'/>
        </div>
        
        <button className='bg-orange text-white font-bold flex items-center justify-center gap-1 px-3 py-1 rounded-3xl'>
          <User/>
          Sign in</button>
      </div>
    </div>
  )
}

export default Navbar