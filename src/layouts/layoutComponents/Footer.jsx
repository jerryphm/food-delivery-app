import React from 'react';
import { TbSend } from 'react-icons/tb';
import {
   RiFacebookBoxLine,
   RiInstagramLine,
   RiYoutubeLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/res-logo.png';

function Footer() {
   return (
     
         <footer
            className='flex justify-center items-center min-h-[150] px-2 sm:px-3 md:px-4 lg:px-6 pt-4 sm:pt-5 md:pt-7 pb-6 sm:pb-8 md:pb-10 -mx-2 sm:-mx-3 md:-mx-4
            lg:-mx-6 bg-lpink'
         >
            <section className='flex flex-col justify-center items-stretch w-full h-full '>
               <div className='flex flex-wrap justify-between items-start gap-y-5 [&>*]:w-[48%] md:[&>*:not(:first-child)]:w-[27%] md:[&>:first-child]:w-[15%]'>
                  <section className='flex'>
                     <div className='flex flex-col items-center'>
                        <img
                           src={logo}
                           alt='Food Ordering Logo'
                           className='w-10 h-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16'
                        />
                        <h4 className='font-bold font-rnroll'>Tasty Treat</h4>
                     </div>
                  </section>
   
                  <section>
                     <h3 className='text-[18px] font-bold font-rnroll'>
                        Delivery Time
                     </h3>
                     <h4 className='mt-1 font-bold sm:mt-2 md:mt-3'>
                        Sunday - Thursday
                     </h4>
                     <p className='leading-4'>10:00am - 11:00pm</p>
                     <h4 className='mt-1 font-bold sm:mt-2 md:mt-3'>
                        Friday - Saturday
                     </h4>
                     <p className='leading-4'>Off day</p>
                  </section>

                  <section>
                     <h3 className='text-[18px] font-bold font-rnroll'>Contact</h3>
                     <h4 className='mt-1 sm:mt-2 md:mt-3'>
                        <span className='mt-1 font-bold sm:mt-2 md:mt-3'>
                           Location
                        </span>
                        : 3 Armada Way, London, UK
                     </h4>
                     <h4>
                        <span className='mt-1 font-bold sm:mt-2 md:mt-3'>
                           Phone
                        </span>
                        : 028 847 3329
                     </h4>
                     <h4>
                        <span className='mt-1 font-bold sm:mt-2 md:mt-3'>
                           Email
                        </span>
                        : example@gmail.com
                     </h4>
                  </section>

                  <section>
                     <h3 className='text-[18px] font-bold font-rnroll'>
                        Newsletter
                     </h3>
                     <h4 className='mt-1 sm:mt-2 md:mt-3'>
                        Subscribe our newsletter
                     </h4>
                     <form className='flex justify-between gap-2 min-h-[42px] p-1 rounded-sm border-[1px] border-black bg-white'>
                        <input
                           type='email'
                           placeholder='Enter your email'
                           required
                           pattern="^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$"
                           className='w-full px-1 capitalize outline-none'
                        />
                        <button
                           type='submit'
                           value='newsletterSubmit'
                           className='flex items-center justify-center text-white h-[38px] w-[45px] sm:w-[80px] rounded-sm bg-red-500'
                        >
                           <Link to='#'>
                              <TbSend />
                           </Link>
                        </button>
                     </form>
                     <div className='flex items-center justify-start gap-2 mt-1 sm:gap-3 lg:gap-4 sm:mt-2 md:mt-3'>
                        <h4>Follow:</h4>
   
                        <div className='flex gap-2 sm:gap-3 lg:gap-4 '>
                           <Link to='#'>
                              <RiFacebookBoxLine className=' text-red-500 text-xl md:text-2xl' />
                           </Link>
                           <Link to='#'>
                              <RiInstagramLine className=' text-red-500 text-xl md:text-2xl' />
                           </Link>
                           <Link to='#'>
                              <RiYoutubeLine className=' text-red-500 text-xl md:text-2xl' />
                           </Link>
                        </div>
                     </div>
                  </section>
               </div>
            </section>
         </footer>
      
   );
}

export default Footer;
