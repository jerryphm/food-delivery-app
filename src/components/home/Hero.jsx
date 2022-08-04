import { useDispatch, useSelector } from 'react-redux';

import { BiCheckShield } from 'react-icons/bi';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import React from 'react';
import { RiCarLine } from 'react-icons/ri';
import { Link as SmoothLink } from 'react-scroll';
import heroImage from '../../assets/images/hero.png';
import { setActivePage } from '../../store/activePage/activePage';

function Hero() {
   const dispatch = useDispatch();
   return (
      <section className='flex flex-col sm:flex-row items-center sm:items-center sm:justify-between sm:gap-x-[5vw] py-10'>
         {/* hero text */}
         <div className='flex flex-col items-center sm:items-start'>
            <h3 className='font-rnroll text-[17px] sm:text-lg md:text-xl lg:text-2xl mb-1 lg:mb-3'>
               Easy way to make an order
            </h3>
            <h1 className='font-rnroll text-3xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.2] text-center sm:text-left mb-6 lg:mb-9'>
               <span className='text-red-500 uppercase'>Hungry?</span>
               Just wait
               <br />
               food at <span className='text-red-500'>your door</span>
            </h1>
            <div className='flex gap-8 mb-4'>
               <button className='py-[7px] px-4 rounded-md bg-red-500 text-white'>
                  <SmoothLink
                     to='popularFoods'
                     smooth={true}
                     offset={-90}
                     duration={350}
                  >
                     Order now
                     <IoIosArrowForward className='inline-block' />
                  </SmoothLink>
               </button>
               <button className='py-[7px] px-4 rounded-md border-[1px  ] border-red-500'>
                  <Link
                     onClick={() => dispatch(setActivePage('/foods'))}
                     to='/foods'
                  >
                     See all foods
                  </Link>
               </button>
            </div>
            <div className='flex flex-col lg:flex-row items-center sm:items-start lg:text-lg opacity-[0.9]'>
               <span className='md:mr-10'>
                  <RiCarLine className='inline-block text-red-500 -translate-y-[2px] mr-1' />
                  No shipping charge
               </span>
               <span>
                  <BiCheckShield className='inline-block text-red-500 -translate-y-[2px] mr-1' />
                  100% secure checkout
               </span>
            </div>
         </div>
         {/* hero image */}
         <div className='grow-0 shrink-0 w-[80%] sm:w-[47%] md:w-[45%] lg:w-[40%]'>
            <img src={heroImage} alt='' />
         </div>
      </section>
   );
}

export default Hero;
