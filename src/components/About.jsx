import React from 'react'
import { CSearch, Delivery, Menu } from './icons'

const About = () => {
  return (
    <div>
        <div className='w-[80%] m-auto p-2'>
            <p className='font-bold text-xl'>How it works</p>
            <div className='flex items-center justify-center flex-wrap gap-10 pt-5'>
                <div className='p-4 border-[1.5px] border-grayish rounded-md w-56 h-30'>
                    <CSearch/>
                    <p className='text-sm font-bold'>Find your nearby restaurant</p>
                    <p className='text-xs text-brownish font-semibold'>Browse nearby restaurants and search for foor by cuisine or restaurant name.</p>
                </div>

                <div className='p-4 border-[1.5px] border-grayish rounded-md w-56 h-30'>
                    <Menu/> 
                    <p className='text-sm font-bold'>Choose your menu items</p>
                    <p className='text-xs text-brownish font-semibold'>Explore the menu and pick favorite dishes. Satisfy any craving with delicious options.</p>
                </div>

                <div className='p-4 border-[1.5px] border-grayish rounded-md w-56 h-30'>
                    <Delivery/>
                    <p className='text-sm font-bold'>Order your food</p>
                    <p className='text-xs text-brownish font-semibold'>Pick up your food to go, or get it delivered straight to your door, fresh and fast.</p>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default About