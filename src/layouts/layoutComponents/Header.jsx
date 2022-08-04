import {
   RiMenu3Line,
   RiMenuLine,
   RiShoppingBagLine,
   RiUserLine,
} from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { Cart } from '../../components/home';
import { Link } from 'react-router-dom';
import MainLinksComp from '../../router/MainLinksComp';
import { Modal } from '../../components/shared';
import logo from '../../assets/images/res-logo.png';
import { setActivePage } from '../../store/activePage/activePage';
import { showCartActs } from '../../store/shoppingCart/showCartSlice';
import { showMenuActs } from '../../store/menu/showMenuSlice';

function Header() {
   const dispatch = useDispatch();

   //showMenu slice:
   const handleDispatchShowMenu = () => {
      dispatch(showMenuActs.toggleShowMenu());
      dispatch(showCartActs.toggleShowCart('hide'));
   };
   const isShowMenu = useSelector((state) => state.showMenu.isShowMenu);

   //showCart slice:
   const handleDispatchShowCart = () => {
      dispatch(showCartActs.toggleShowCart());
      dispatch(showMenuActs.toggleShowMenu('hide'));
   };
   //hide cart and bar when clicking:
   const handleHideCartAndBar = () => {
      dispatch(showCartActs.toggleShowCart('hide'));
      dispatch(showMenuActs.toggleShowMenu('hide'));
   };
   const isShowCart = useSelector((state) => state.showCart.isShowCart);

   const cartTotalQuantity = useSelector(
      (state) => state.cart.cartTotalQuantity
   );

   //activePage slice: (set active state - red color for login)
   const activePage = useSelector((state) => state.activePage.activePage);
   return (
      <header className='fixed z-[999] top-0 right-0 left-0 flex justify-center'>
         <div className='flex justify-between items-center max-w-7xl w-full py-1 sm:py-2 px-2 sm:px-3 md:px-4 lg:px-6 mx-auto bg-white'>
            <Link
               onClick={() => {
                  if (isShowMenu) handleDispatchShowMenu();
                  dispatch(setActivePage('/'));
               }}
               to='/'
               className='flex flex-col items-center'
            >
               <img
                  src={logo}
                  alt='Food Ordering Logo'
                  className='h-[30px] w-[30px] sm:h-8 sm:w-8 md:h-9 md:w-9'
               />
               <h4 className='font-bold font-rnroll'>Tasty Treat</h4>
            </Link>

            <nav className='grow-[0.5] flex flex-row-reverse md:flex-row justify-between items-center'>
               <MainLinksComp className='mark-main-links hidden md:grow-[0.6] md:flex md:justify-between md:text-lg md:items-center hover:[&>*]:text-red-500 font-rnroll text-lg' />
               <div className='mark-sub-links flex gap-2'>
                  <div onClick={handleDispatchShowCart} className='relative'>
                     <RiShoppingBagLine
                        className={`text-2xl md:text-3xl cursor-pointer ${
                           isShowCart ? 'text-red-500' : ''
                        }`}
                     />
                     {cartTotalQuantity !== 0 ? (
                        <span className='absolute top-[-2px] sm:top-[1px] right-[-3px] sm:right-[0px] lg:top-[-2px] lg:right-[0px] px-[3px] lg:px-[5px] pb-[1px] lg:pb-0 leading-[1] bg-red-500 rounded-full text-white font-rnroll text-sm lg:text-base cursor-pointer'>
                           {cartTotalQuantity}
                        </span>
                     ) : null}
                  </div>
                  <Link
                     onClick={() => {
                        dispatch(setActivePage('/login'));
                        handleHideCartAndBar();
                     }}
                     to='/login'
                  >
                     <RiUserLine
                        className={`text-2xl md:text-3xl ${
                           activePage == '/login' ? 'text-red-500' : ''
                        }`}
                     />
                  </Link>
                  <div
                     onClick={handleDispatchShowMenu}
                     className={`md:hidden text-2xl md:text-3xl cursor-pointer ${
                        isShowMenu ? 'text-red-500' : null
                     }`}
                  >
                     {isShowMenu ? <RiMenu3Line /> : <RiMenuLine />}
                  </div>
               </div>
            </nav>
         </div>
         {/* render menubar */}
         {isShowMenu ? (
            <>
               <MainLinksComp
                  dispatch={handleDispatchShowMenu}
                  className='md:hidden fixed right-0 top-[62px] sm:top-[72px] md:top-[76px] flex flex-col items-end gap-10 w-fit min-w-[40vw] h-screen pt-14 rounded-bl-md bg-white font-rnroll shadow-2xl'
               />
               <Modal dispatch={handleDispatchShowMenu} />
            </>
         ) : null}
         {/* render cart */}
         <>
            {isShowCart ? (
               <>
                  <Cart dispatch={handleDispatchShowCart} />
                  <Modal dispatch={handleDispatchShowCart} />
               </>
            ) : null}
         </>
      </header>
   );
}
export default Header;
