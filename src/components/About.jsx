import React from 'react'
import { CSearch, Delivery, Menu } from './icons'

const About = () => {
  return (
    <div className='w-full bg-white p-10'>
        <p className='text-center text-2xl font-Acme font-bold text-orange'>How it works</p>
        <div className='w-full flex items-center justify-center gap-4 mt-5 p-10 font-outfit flex-wrap'>
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


        {/* <div className='w-[80%] m-auto p-2 mt-10 bg-lightgray2'>
            <p className='font-bold text-orange text-2xl text-center'>How it works</p>
            <div className='flex items-center justify-center flex-wrap gap-24 pt-5 pl-12'>
               
                <div className='bg-white w-64 h-20 rounded-2xl relative flex items-center justify-center shadow-md'> 
                    <div className='absolute bg-lightgray w-28 h-28 rounded-full  right-52 p-1.5'>
                        <div className='bg-white w-full h-full rounded-full  flex items-center justify-center'>
                            <img className='border-4 border-orange w-full h-full rounded-full' src="images/search.jpg" alt="" />
                        </div>
                        
                    </div>
                    <div className='absolute left-[60px]'>
                            <p className='text-lg font-semibold'>Find your nearby restaurant</p>
                    </div>
                    <span className='radius bg-orange text-white p-2  absolute right-0 bottom-0'>
                        <CSearch className='font-bold text-lg mr-[-2px]'/>
                    </span>
                </div>

                <div className='bg-white w-64 h-20 rounded-2xl relative flex items-center justify-center shadow-md'> 
                    <div className='absolute bg-lightgray w-28 h-28 rounded-full  right-52 p-1.5'>
                        <div className='bg-white w-full h-full rounded-full  flex items-center justify-center'>
                            <img className='border-4 border-orange w-full h-full rounded-full' src="images/menu.jpg" alt="" />
                        </div>
                        
                    </div>
                    <div className='absolute left-[60px]'>
                            <p className='text-lg font-semibold'>Choose your menu items</p>
                    </div>
                    <span className='radius bg-orange text-white p-2  absolute right-0 bottom-0'>
                        <Menu className='font-bold text-lg mr-[-2px]'/>
                    </span>
                </div>

                <div className='bg-white w-64 h-20 rounded-2xl relative flex items-center justify-center shadow-md'> 
                    <div className='absolute bg-lightgray w-28 h-28 rounded-full  right-52 p-1.5'>
                        <div className='bg-white w-full h-full rounded-full  flex items-center justify-center'>
                            <img className='border-4 border-orange w-full h-full rounded-full' src="images/order.jpg" alt="" />
                        </div>
                        
                    </div>
                    <div className='absolute left-[60px]'>
                            <p className='text-lg font-semibold'>Order your desired food</p>
                    </div>
                    <span className='radius bg-orange text-white p-2  absolute right-0 bottom-0'>
                        <Delivery className='font-bold text-lg mr-[-2px]'/>
                    </span>
                </div>

            </div>
        </div> */}
    </div>
  )
}

export default About