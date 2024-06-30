import React from 'react'
import { FastFood, FoodBank, Location, User } from './icons'

const Features = () => {
  return (
    <div>
        <div className='w-[80%] m-auto p-2'>
            <p className='font-bold text-xl'>Services</p>
            <div className='flex items-center justify-center gap-10 p-4'>
                <div className='flex items-center justify-center flex-wrap gap-10 pt-5'>
                    <div className='w-36 text-center'>
                    <div className='bg-orange w-16 h-16 text-3xl  rounded-full flex items-center justify-center m-auto'>
                        <FoodBank/>
                    </div>
                    <p className='text-sm font-semibold'>Restaurant Profile</p>
                    <p className='text-sm'>Easily create and manage restaurant profiles.</p>
                    </div>           
                </div>
                <div className='flex items-center justify-center flex-wrap gap-10 pt-5'>
                    <div className='w-36 text-center'>
                    <div className='w-16 h-16 text-3xl bg-brownish rounded-full flex items-center justify-center m-auto'>
                        <User/>
                    </div>
                    <p className='text-sm font-semibold'>Restaurant Profile</p>
                    <p className='text-sm'>Easily create and manage restaurant profiles.</p>
                    </div>           
                </div>
                <div className='flex items-center justify-center flex-wrap gap-10 pt-5'>
                    <div className='w-36 text-center'>
                    <div className='bg-gray w-16 h-16 text-3xl  rounded-full flex items-center justify-center m-auto'>
                        <FastFood/>
                    </div>
                    <p className='text-sm font-semibold'>Restaurant Profile</p>
                    <p className='text-sm'>Easily create and manage restaurant profiles.</p>
                    </div>           
                </div>
                <div className='flex items-center justify-center flex-wrap gap-10 pt-5'>
                    <div className='w-36 text-center'>
                    <div className='bg-grayish w-16 h-16 text-3xl  rounded-full flex items-center justify-center m-auto'>
                        <Location/>
                    </div>
                    <p className='text-sm font-semibold'>Restaurant Profile</p>
                    <p className='text-sm'>Easily create and manage restaurant profiles.</p>
                    </div>           
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Features