import React from 'react'
import { BMail, EPhone } from './icons'

const Footer = () => {
  return (
    <div className='bg-black w-full text-white p-10 '>
        <div className='w-full flex items-center justify-center flex-wrap'>
        <div className='w-1/2'>
            <p className='text-2xl font-bold'> Get In Touch</p>
            <p className='w-3/4 mt-2 text-sm text-gray'>For queries, please do not hesitate to reach out. We will make sure to respond as soon as possible.</p>
            <div className='flex   items-center gap-8 mt-5'>
    
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

        <div className='w-1/2'>
            <form action="" className='m-auto w-11/12'>
                <div className='flex items-center justify-between gap-3 w-96  m-auto'>
                    <input className='bg-while focus:outline-none p-1 rounded-sm placeholder:text-black text-sm text-black w-48 placeholder:text-xs' type="text" placeholder='Enter Name'/>
                    <input className='bg-while focus:outline-none p-1 rounded-sm text-sm text-black w-48 placeholder:text-black placeholder:text-xs' type="email" placeholder='Enter Email'/>
                </div>
                <div className='w-96 m-auto mt-2'>
                    <textarea className='w-full focus:outline-none text-sm rounded-sm  p-1 h-32 text-black placeholder:text-black placeholder:text-xs' placeholder='Enter message' name="" id="" />
                </div>
                <div className='w-96 m-auto mt-3'>
                    <input className='bg-white text-orange w-24  font-bold py-1  rounded-sm text-sm' type="submit" value='Send' />
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