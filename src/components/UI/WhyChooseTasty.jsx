import React from 'react';
import WhyChooseImg from '../../assets/images/location.png';
import { RiCheckboxCircleLine } from 'react-icons/ri';

function WhyChooseTasty() {
   return (
      <section className='flex flex-col-reverse items-center gap-x-5 sm:flex-row mt-10'>
         <div className='shrink-0 grow-0 w-[80%] sm:w-[45%]'>
            <img src={WhyChooseImg} alt='' />
         </div>
         <div className='text-center sm:text-left'>
            <h2 className='text-2xl mb-3 font-rnroll font-bold '>
               Why <span className='text-red-500'>Tasty Treat</span>
            </h2>
            <p className=' opacity-90 mb-5 max-w-[60ch]'>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Praesentium veritatis vel velit pariatur aperiam laboriosam
               distinctio.
            </p>

            <div className='mb-2 md:mb-3'>
               <h4 className='font-rnroll text-[16px]'>
                  <RiCheckboxCircleLine className='inline-block text-red-500 mr-1 -translate-y-[1px]' />
                  Fresh and tasty foods
               </h4>
               <p className='opacity-90'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </p>
            </div>
            <div className='mb-3'>
               <h4 className='font-rnroll text-[16px]'>
                  <RiCheckboxCircleLine className='inline-block text-red-500 mr-1 -translate-y-[1px]' />
                  Quality support
               </h4>
               <p className='opacity-90'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </p>
            </div>
            <div>
               <h4 className='font-rnroll text-[16px]'>
                  <RiCheckboxCircleLine className='inline-block text-red-500 mr-1 -translate-y-[1px]' />
                  Order from location
               </h4>
               <p className='opacity-90'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               </p>
            </div>

         </div>
      </section>
   );
}

export default WhyChooseTasty;
