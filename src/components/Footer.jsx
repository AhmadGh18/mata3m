import React from 'react'
import { ArrowRight, BMail, EPhone } from './icons'

const Footer = () => {
  return (
    <div className='bg-black w-full text-white pb-5'>
        <div className='w-full flex flex-col sm:flex-row items-center justify-center'>
        <div className='w-full sm:w-1/2 p-5 sm:p-10'>
            <p className='text-2xl font-bold'> Get In Touch</p>
            <p className='w-full sm:w-3/4 mt-2 text-sm text-gray'>For queries, please do not hesitate to reach out. We will make sure to respond as soon as possible.</p>
            <div className='flex   items-center justify-center sm:justify-normal gap-8 mt-5'>
    
                <div className='flex items-center justify-center  gap-2'>
                    <div className='p-2 rounded-lg bg-white'>
                        <span className='text-2xl text-orange'><EPhone/></span>
                    </div>
                    <div className=''>
                        <p className='font-bold text-lg'>Phone</p>
                        <p className='text-sm text-gray'>(+961)71-124 123</p>
                    </div>
                </div>

                <div className='flex items-center justify-center  gap-2'>
                    <div className='p-2 rounded-lg bg-white'>
                        <span className='text-2xl text-orange'><BMail/></span>
                    </div>
                    <div className=''>
                        <p className='font-bold text-lg'>Email</p>
                        <p className='text-sm text-gray'>Bites@info.com</p>
                    </div>
                </div>
            </div>

        </div>

        <div className='w-full sm:w-1/2 mt-14'>
            <form action="" className='m-0 sm:m-auto sm:float-right  w-full p-4 sm:p-0 sm:w-11/12'>
                <div className='w-full sm:w-96  m-auto'>
                    <input type="text" placeholder='FULL NAME' className='bg-transparent focus:outline-none p-1 rounded-sm  border-b border-gray placeholder:text-gray text-sm text-white w-full placeholder:text-xs placeholder:font-nunito' />
                </div>
                <div className='flex items-center justify-between gap-3 w-full sm:w-96  m-auto mt-3'>
                    <input
                     className='bg-transparent focus:outline-none p-1 rounded-sm  border-b border-gray placeholder:text-gray text-sm text-white w-1/2 sm:w-48 placeholder:text-xs placeholder:font-nunito' type="text" placeholder='PHONE'/>
                    <input className='bg-transparent focus:outline-none p-1 rounded-sm  border-b border-gray placeholder:text-gray text-sm text-white w-1/2  sm:w-48 placeholder:text-xs placeholder:font-nunito' type="email" placeholder='EMAIL'/>
                </div>
                <div className='w-full sm:w-96 m-auto mt-3'>
                    <textarea className='w-full bg-transparent border-b border-gray focus:outline-none text-sm rounded-sm  p-1 placeholder:text-gray text-white placeholder:text-xs placeholder:font-nunito' placeholder='MESSAGE' name="" id="" />
                </div>
                <div className='w-full sm:w-96 m-auto mt-3 '>
                    <button type='submit' className='text-3xl float-right'>
                        <ArrowRight/>
                    </button>
                </div>
            </form>
        </div>
        </div>

        <hr className='mt-7 text-gray' />
            <p className='text-center  mt-6 text-sm'>© 2024 Moedev. All rights reserved.</p>
        <div>

        </div>
    </div>
  )
}

export default Footer