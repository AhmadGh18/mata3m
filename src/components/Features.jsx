import React from 'react'
import { FastFood, FoodBank, Location, MDiscount, MReviews, User } from './icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const Features = () => {
  return (
    <div>
        <div className='w-[80%] m-auto py-5 px-0 sm:px-10 sm:py-10'>
            <p className='font-bold text-2xl text-center text-orange font-Acme'>Services</p>
            <div className='hidden sm:flex items-center justify-center flex-wrap gap-4 p-0 sm:p-4 mt-4'>
               <div className='h-52 w-72 sm:w-52 bg-white border-b-4 border-orange p-6 shadow-xl'>
                    <span className='text-5xl text-orange'><FastFood/></span>
                    <p className='font-bold mt-2 text-lg'>Seamless Ordering</p>
                    <p className='text-xs font-semibold text-gray mt-3'>Experience easy ordering with simple navigation and live order updates.</p>
               </div>

               <div className='h-52 w-72 sm:w-52 bg-white border-b-4 border-orange p-6 shadow-xl'>
                    <span className='text-5xl text-orange'><Location/></span>
                    <p className='font-bold mt-2 text-lg'>Local Restaurants</p>
                    <p className='text-xs font-semibold text-gray mt-3'>Discover nearby restaurants available for convenient online ordering.</p>
               </div>

               <div className='h-52 w-72 sm:w-52 bg-white border-b-4 border-orange p-6 shadow-xl'>
                    <span className='text-5xl text-orange'><MDiscount/></span>
                    <p className='font-bold mt-2 text-lg'>Offers / Discounts</p>
                    <p className='text-xs font-semibold text-gray mt-3'>Benefit from exclusive promotions and discounts offerred by Bites.</p>
               </div>

               <div className='h-52 w-72 sm:w-52 bg-white border-b-4 border-orange p-6 shadow-xl'>
                    <span className='text-5xl text-orange'><MReviews/></span>
                    <p className='font-bold mt-2 text-lg'>Reviews / Ratings</p>
                    <p className='text-xs font-semibold text-gray mt-3'>Read genuine user reviews and ratings for informed dining choices.</p>
               </div>
            </div>

            <div className='block sm:hidden'>
               <Swiper
               className='m-auto w-full '
               modules={[Autoplay, Pagination]}
               autoplay={{ 
               delay: 2000,
               disableOnInteraction: false
               }}
               loop={true}
               spaceBetween={50}
               slidesPerView={1}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
               >
                    <SwiperSlide className='w-full   flex items-center justify-center mt-10'>
                         <div className='h-52 w-72 sm:w-52 bg-white border-b-4 border-orange p-6 shadow-xl'>
                              <span className='text-5xl text-orange'><FastFood/></span>
                              <p className='font-bold mt-2 text-lg'>Seamless Ordering</p>
                              <p className='text-xs font-semibold text-gray mt-3'>Experience easy ordering with simple navigation and live order updates.</p>
                         </div>
                     </SwiperSlide>

                     <SwiperSlide className='w-full   flex items-center justify-center mt-10'>
                         <div className='h-52 w-72 sm:w-52 bg-white border-b-4 border-orange p-6 shadow-xl'>
                              <span className='text-5xl text-orange'><Location/></span>
                              <p className='font-bold mt-2 text-lg'>Local Restaurants</p>
                              <p className='text-xs font-semibold text-gray mt-3'>Discover nearby restaurants available for convenient online ordering.</p>
                         </div>
                     </SwiperSlide>

                     <SwiperSlide className='w-full   flex items-center justify-center mt-10'>
                         <div className='h-52 w-72 sm:w-52 bg-white border-b-4 border-orange p-6 shadow-xl'>
                              <span className='text-5xl text-orange'><MDiscount/></span>
                              <p className='font-bold mt-2 text-lg'>Offers / Discounts</p>
                              <p className='text-xs font-semibold text-gray mt-3'>Benefit from exclusive promotions and discounts offerred by Bites.</p>
                         </div>
                     </SwiperSlide>

                     <SwiperSlide className='w-full   flex items-center justify-center mt-10'>
                         <div className='h-52 w-72 sm:w-52 bg-white border-b-4 border-orange p-6 shadow-xl'>
                              <span className='text-5xl text-orange'><MReviews/></span>
                              <p className='font-bold mt-2 text-lg'>Reviews / Ratings</p>
                              <p className='text-xs font-semibold text-gray mt-3'>Read genuine user reviews and ratings for informed dining choices.</p>
                         </div>
                     </SwiperSlide>

            
               </Swiper>
            </div>

            
            
        </div>
    </div>
  )
}

export default Features