import React from 'react';
import { CommonBanner } from '../components/shared';
import { helmet } from '../helmet';
import happySvgImg from '../assets/images/happy-svgrepo-com.svg';

function Feedback() {
   helmet('Feedback');
   return (
      <section>
         <CommonBanner title={'Feedback'} />
         <div className='flex flex-col items-center min-h-44 mt-10 mb-16'>
            <div className='text-center mb-6'>
               <h3 className='font-bold text-xl md:text-2xl'>
                  We value your feedback.
               </h3>
               <p className='mt-1 text-lg '>
                  Please complete the following form and <br /> help us improve
                  our customer experience
                  <img
                     className='h-5 inline ml-1'
                     src={happySvgImg}
                     alt='happy'
                  />
               </p>
            </div>
            <form className='flex flex-col gap-4 px-4 py-4 sm:p-5 w-[80vw] max-w-[600px] rounded-sm bg-lpink py-1 [&_input]:px-2 [&_input]:rounded-sm [&_input]:min-h-[44px]'>
               <div className='flex flex-col sm:flex-row gap-4  sm:gap-[5%]'>
                  <input type='text' placeholder='First name' />
                  <input type='text' placeholder='Last name' />
               </div>
               <div className='flex flex-col sm:flex-row gap-4  sm:gap-[5%]'>
                  <input type='email' placeholder='Email' />
                  <input type='text' placeholder='Phone' />
               </div>

               <input type='text' placeholder='Address' />
               <textarea
                  className='outline-none py-1 px-2 rounded-sm min-h-[44px]'
                  rows={4}
                  type='text'
                  placeholder='Your feedback'
               />
               <button
                  className={`w-fit mx-auto px-3 py-1 sm:px-4 md:px-5 md:py-2 lg:px-7 lg:py-[10px] rounded-md text-white bg-red-500 `}
               >
                  Submit
               </button>
            </form>
         </div>
      </section>
   );
}

export default Feedback;
