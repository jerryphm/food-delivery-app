import React from 'react';
import logo from '../../assets/images/res-logo.png';
import { Link } from 'react-router-dom';
import MainLinks from '../../router/MainLinks';
import {
   RiUserLine,
   RiMenuLine,
   RiMenu3Line,
   RiShoppingBagLine,
} from 'react-icons/ri';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';

function Header() {
   const [isShowMenu, setShowMenu] = useState(false);
   const toggleMenu = () => {
      setShowMenu(!isShowMenu);
   };
   return (
      <header className='z-10 fixed top-0 right-0 left-0 flex justify-center'>
         <nav className='flex justify-between items-center max-w-7xl w-full py-2 sm:py-4 lg:py-5 px-2 sm:px-3 md:px-4 lg:px-6 mx-auto bg-white'>
            <section className='flex flex-col items-center'>
               <img
                  src={logo}
                  alt='Food Ordering Logo'
                  className='h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12'
               />
               <h4 className='font-bold font-rnroll'>Tasty Treat</h4>
            </section>

            <section className='grow-[0.5] flex flex-row-reverse md:flex-row justify-between items-center'>
               <MainLinks className='hidden md:grow-[0.6] md:flex md:justify-between md:text-lg md:items-center hover:[&>*]:text-red-500 font-rnroll text-lg' />
               <div className='flex gap-4'>
                  <div className='flex gap-2'>
                     <RiShoppingBagLine
                        data-tip='Your Cart'
                        className='text-2xl sm:text-3xl lg:text-4xl cursor-pointer'
                     />
                     <ReactTooltip
                        effect='solid'
                        place='bottom'
                        delayShow={100}
                     />

                     <Link to='/login'>
                        <RiUserLine
                           data-tip='Login'
                           className='text-2xl sm:text-3xl lg:text-4xl'
                        />
                        <ReactTooltip
                           effect='solid'
                           place='bottom'
                           delayShow={100}
                        />
                     </Link>
                  </div>

                  <div
                     onClick={toggleMenu}
                     className='md:hidden text-2xl sm:text-3xl lg:text-4xl cursor-pointer'
                  >
                     {isShowMenu ? <RiMenu3Line /> : <RiMenuLine />}
                  </div>
                  {isShowMenu ? (
                     <MainLinks toggleMenu={toggleMenu} className='md:hidden fixed right-0 top-[72px] sm:top-[96px] flex flex-col items-end gap-10 w-fit min-w-[40vw] h-screen pt-14 rounded-bl-md bg-white font-rnroll shadow-2xl' />
                  ) : null}
               </div>
            </section>
         </nav>
      </header>
   );
}

export default Header;
