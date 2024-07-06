import React from 'react'
import { ArrowForward } from './icons'

const Offer = () => {
  return (
    <div className='w-full h-[400px] bg-[url("images/offer.jpg")] bg-cover bg-center bg-no-repeat text-center  flex justify-center items-center'>
     <div className='top-12 text-center'>
      <p className='text-4xl font-bold text-lightorange'>____<span className='font-bold text-white font-nunito'>Free Delivery</span>____</p>
      
      <p className='text-3xl text-white font-outfit mt-3'>Get <span className='text-orange'>$0</span>  delivery fee on your <span className='text-orange'>first order</span></p>
      
      <button className='bg-lightorange rounded-lg text-white flex justify-center items-center gap-2 px-2 py-1 m-auto mt-3 shadow-xl font-bold font-outfit'>
        Order Now <span className='bg-white p-1 rounded-md text-lightorange shadow-xl'><ArrowForward/></span>
     </button>
     </div>
    </div>
  )
}

export default Offer