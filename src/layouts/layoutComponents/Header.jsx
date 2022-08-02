import { Link } from 'react-router-dom';
import MainLinksComp from '../../router/MainLinksComp';
import logo from '../../assets/images/res-logo.png';
import {
   RiUserLine,
   RiMenuLine,
   RiMenu3Line,
   RiShoppingBagLine,
} from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { showMenuActs } from '../../store/menu/showMenuSlice';
import { showCartActs } from '../../store/shoppingCart/showCartSlice';
import { Cart } from '../../components/home';
import { Modal } from '../../components/shared';

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
   const isShowCart = useSelector((state) => state.showCart.isShowCart);

   const cartTotalQuantity = useSelector(
      (state) => state.cart.cartTotalQuantity
   );
   return (
      <header className='fixed z-[999] top-0 right-0 left-0 flex justify-center'>
         <div className='flex justify-between items-center max-w-7xl w-full py-1 sm:py-2 px-2 sm:px-3 md:px-4 lg:px-6 mx-auto bg-white'>
            <section className='mark-logo flex flex-col items-center'>
               <Link
                  onClick={isShowMenu ? handleDispatchShowMenu : null}
                  to='/'
               >
                  <img
                     src={logo}
                     alt='Food Ordering Logo'
                     className='h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10'
                  />
               </Link>
               <h4 className='font-bold font-rnroll'>Tasty Treat</h4>
            </section>

            <nav className='grow-[0.5] flex flex-row-reverse md:flex-row justify-between items-center'>
               <MainLinksComp className='mark-main-links hidden md:grow-[0.6] md:flex md:justify-between md:text-lg md:items-center hover:[&>*]:text-red-500 font-rnroll text-lg' />
               <div className='mark-sub-links flex gap-2'>
                  <div className='relative'>
                     <RiShoppingBagLine
                        onClick={handleDispatchShowCart}
                        className={`text-2xl sm:text-3xl lg:text-4xl cursor-pointer ${
                           isShowCart ? 'text-red-500' : ''
                        }`}
                     />
                     {cartTotalQuantity !== 0 ? (
                        <span className='absolute top-[-2px] sm:top-[1px] right-[-3px] sm:right-[0px] lg:top-[-2px] lg:right-[0px] px-[3px] lg:px-[5px] pb-[1px] lg:pb-0 leading-[1] bg-red-500 rounded-full text-white font-rnroll text-sm lg:text-base cursor-pointer'>
                           {cartTotalQuantity}
                        </span>
                     ) : null}
                  </div>
                  <Link to='/login'>
                     <RiUserLine className='text-2xl sm:text-3xl lg:text-4xl' />
                  </Link>
                  <div
                     onClick={handleDispatchShowMenu}
                     className={`ml-2 md:hidden text-2xl sm:text-3xl lg:text-4xl cursor-pointer ${
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
                  className='md:hidden fixed right-0 top-[64px] sm:top-[80px] flex flex-col items-end gap-10 w-fit min-w-[40vw] h-screen pt-14 rounded-bl-md bg-white font-rnroll shadow-2xl'
               />
               <Modal dispatch={handleDispatchShowMenu} />
            </>
         ) : null}
         {/* render cart */}
         <>{isShowCart ? <Cart dispatch={handleDispatchShowCart} /> : null}</>
      </header>
   );
}
export default Header;
