import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Search = () => {
  return (
    <div className='h-[470px] p-4 pt-9'>
        <div className="bg-[url('public/images/thumbnail.jpg')] bg-cover bg-center rounded-md h-full w-[80%] m-auto">
            <div className=' text-white  p-5 bg-blurrish w-full h-full bg-[rgba(255,255,255,0.1)]'>
                <p className='text-5xl font-bold mt-44 w-[80%]'>Get $0 delivery fee on your first order</p>
                <p className='text-gray text-sm mt-4'>order from your favorit restaurants</p>
                <div className='flex items-center justify-center bg-white rounded-md w-fit p-1 mt-3'>
                    <div className='text-brownish flex items-center justify-center gap-1'>
                        <CiSearch/>
                        <input className='focus:outline-none text-brownish text-sm placeholder:text-brownish' type="text" placeholder='Enter restaurant name'/>
                    </div>
                    <button className='bg-orange rounded-xl text-sm font-bold py-1 px-3'>Find Food</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search