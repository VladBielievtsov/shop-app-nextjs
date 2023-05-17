"use client"

import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

export default function HomeBanner() {
  return (
    <Swiper 
      className='rounded-md' 
      slidesPerView={1} 
      modules={[Autoplay, Navigation]} 
      autoplay
      navigation
    >
      {[...Array(3)].map((banner, id) => (
        <SwiperSlide>
          <div className='relative w-full aspect-video cursor-grab'>
            <img 
              src="https://plus.unsplash.com/premium_photo-1661281366900-88b41445a004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="alt"
              className='absolute block top-0 left-0 right-0 bottom-0 object-cover w-full h-full' 
            />
            <div className='relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50'>
              <h2 className='text-white text-8xl text-center mb-[50px] select-none'>Level up your style with our summer collections</h2>
              <Link href='/' className='text-black bg-white py-4 px-6 rounded-md hover:bg-gray-200'>Shop now</Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
