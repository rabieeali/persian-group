'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { ObstacleItem } from './Obstacles.types';

export default function ObstaclesSlider({ items }: { items: ObstacleItem[] }) {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section className='w-full'>
      {/* Gradient background */}
      <div className='w-full relative'>
        <div
          className='absolute w-full h-75'
          style={{
            background: 'linear-gradient(180deg, #3b0f71 0%, #4d148e 24%, #7a2be6 70%)',
          }}></div>
        <div className='container mx-auto px-6 relative py-12'>
          {/* Header */}
          <div className='md:mb-4 text-center'>
            <h2 className='text-white text-lg md:text-xl font-bold'>موانع رایج در دریافت خدمات تولید محتوا برای کسب‌وکارها</h2>
          </div>
          <div className='relative p-2 lg:mx-12'>
            <div className='absolute inset-y-0 -left-4 md:-left-6 hidden md:flex items-center z-20'>
              <button
                aria-label='قبلی'
                onClick={handlePrev}
                className='w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white shadow-lg rounded-full flex items-center justify-center focus:outline-none'>
                {/* Left arrow icon (RTL: points left visually previous) */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-gray-700'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'>
                  <path d='M15 18l-6-6 6-6' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
            </div>

            <div className='absolute inset-y-0 -right-4 md:-right-6 hidden md:flex items-center z-20'>
              <button
                aria-label='بعدی'
                onClick={handleNext}
                className='w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white shadow-lg rounded-full flex items-center justify-center focus:outline-none'>
                {/* Right arrow icon*/}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-gray-700'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'>
                  <path d='M9 6l6 6-6 6' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
              </button>
            </div>
            <div
              className='p-2'
              onMouseEnter={() => {
                if (swiperRef.current?.autoplay) swiperRef.current.autoplay.stop();
              }}
              onMouseLeave={() => {
                if (swiperRef.current?.autoplay) swiperRef.current.autoplay.start();
              }}>
              <Swiper
                modules={[Navigation, Autoplay]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                dir='rtl'
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}>
                {items.map((item) => (
                  <SwiperSlide key={item.id} className='p-4'>
                    <article className='bg-white rounded-xl shadow-md p-6 h-full flex flex-col cursor-pointer' dir='rtl'>
                      <div className='w-full flex justify-center mb-4'>
                        <div className='w-16 h-16 rounded-full bg-white border border-white/40 flex items-center justify-center shadow-sm'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-8 h-8 text-purple-600'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.8'>
                            <path d='M12 2v20' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M5 7h14' strokeLinecap='round' strokeLinejoin='round' />
                            <path d='M5 17h14' strokeLinecap='round' strokeLinejoin='round' />
                          </svg>
                        </div>
                      </div>

                      <h3 className='text-md md:text-lg font-semibold mb-2 text-center text-gray-800'>{item.title}</h3>

                      <p className='text-sm text-gray-600 text-center flex-1'>{item.description}</p>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
