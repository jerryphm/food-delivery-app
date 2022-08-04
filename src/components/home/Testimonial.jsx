import React from 'react';
import { TestimonialSlider } from './index';
import networkImg from '../../assets/images/network.png';

function Testimonial() {
   return (
      <section className='flex flex-col items-center sm:flex-row gap-3 mt-16 sm:mt-20'>
         <div className='text-center sm:text-left font-rnroll font-bold '>
            <h3 className='text-red-500 md:text-lg mb-1'>Testimonial</h3>
            <h2 className='text-2xl mb-5'>
               What our <span className='text-red-500'>customers</span>
               &nbsp;are saying
            </h2>
            <p className='font-sans font-normal opacity-90'>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Praesentium veritatis vel velit pariatur aperiam laboriosam
               distinctio, recusandae beatae ipsum eligendi!
            </p>
            <div className='mt-10 w-[95vw] sm:w-[47vw] overflow-hidden'>
               <TestimonialSlider />
            </div>
         </div>
         <div className='shrink-0 grow-0 w-[80%] sm:w-[45%]'>
            <img src={networkImg} alt='testimonial image' />
         </div>
      </section>
   );
}

export default Testimonial;
