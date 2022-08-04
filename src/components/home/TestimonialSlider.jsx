import 'swiper/css';

import { A11y, Autoplay, EffectCreative } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MdOutlineLocationOn } from 'react-icons/md';
import React from 'react';
import { feedbacks } from '../../assets/data/products';

function TestimonialSlider({}) {
   return (
      <Swiper
         modules={[A11y, Autoplay, EffectCreative]}
         spaceBetween={50}
         slidesPerView={1}
         autoplay={{ delay: 3000 }}
         creativeEffect
         loop={true}
      >
         {feedbacks.map(({ id, avatar, name, feedback, location }) => (
            <SwiperSlide
               key={id}
               className='flex justify-center items-center sm:justify-start w-full sm:w-[40%]'
            >
               <div className=' text-left p-3 border-2 max-w-[40ch] rounded-md border-lpink opacity-90'>
                  <p className='mb-3 font-sans font-normal'>{feedback}</p>
                  <div className='flex gap-4'>
                     <img
                        src={avatar}
                        alt='customer'
                        className='h-14 w-14 object-cover rounded-md border-[1px] border-lpink mb-1'
                     />
                     <div>
                        <span className='block font-rnroll text-sm leading-none'>
                           {name}
                        </span>
                        <span className='text-sm font-sans font-normal'>
                           <MdOutlineLocationOn
                              className='inline-block translate-y-[-1px] mr-[2px]'
                              size={12}
                           />
                           {location}
                        </span>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         ))}
      </Swiper>
   );
}

export default TestimonialSlider;
