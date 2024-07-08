import React from 'react'
import { CSearch, Delivery, Menu } from './icons'

const About = () => {
  return (
    <div className='w-full bg-white px-0 py-4 sm:px-10 sm:py-10'>
        <p className='text-center text-2xl font-Acme font-bold text-orange'>How it works</p>
        <div className='w-full flex items-center justify-center gap-4  p-10 font-outfit flex-wrap'>
            <div className='ww w-72 h-44 bg-[url("images/search.jpg")]  bg-cover bg-center relative flex justify-center'>
                <p className='absolute bottom-4 px-7 text-white font-bold text-xl text-center'>Search for nearby restaurant</p>
            </div>

            <div className='ww w-72 h-44 bg-[url("images/menu.jpg")]  bg-cover bg-center relative flex justify-center'>
                <p className='absolute px-9 bottom-4 text-white font-bold text-xl text-center'>Choose your menu items</p>
            </div>

            <div className='ww  w-72 h-44 bg-[url("images/order.jpg")]  bg-cover bg-center relative flex justify-center'>
                <p className='absolute px-9 bottom-4 text-white font-bold text-xl text-center'>Order your desired food</p>
            </div>
        </div>
    </div>
  )
}

export default About