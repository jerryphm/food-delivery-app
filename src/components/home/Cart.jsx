import { useDispatch, useSelector } from 'react-redux';

import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import React from 'react';
import { setActivePage } from '../../store/activePage/activePage';

function Cart({ dispatch: dispatchToggleCart }) {
   const { cartItems, cartTotalPrice, cartTotalQuantity } = useSelector(
      (state) => state.cart
   );
   const dispatch = useDispatch();

   return (
      <section
         className='flex flex-col justify-between fixed right-0 top-[62px] sm:top-[72px] md:top-[76px] w-[70vw] sm:w-[60vw md:w-[45vw] lg:w-[30vw]]
         px-3 py-2 md:px-6 md:py-4 lg:px-10 lg:py-7 rounded-bl-md bg-white font-rnroll shadow-2xl'
      >
         <div className='h-[55vh] overflow-y-scroll'>
            {cartItems.map((cartItem) => (
               <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
            {cartItems[0] ? null : (
               <p className='text-center mt-[25vh]'>
                  You haven't ordered anything yet
               </p>
            )}
         </div>
         <div className='flex items-center h-[7vh] pt-3 pb-3 sm:pt-4 lg:pt-5'>
            <p className='basis-[80%] text-base'>
               Total: <span>${cartTotalPrice}</span>
            </p>
            <button
               onClick={(e) => {
                  if (cartItems[0]) {
                     dispatchToggleCart();
                  }
               }}
               className={`px-3 py-1 sm:px-4 md:px-5 md:py-2 lg:px-7 lg:py-[10px] rounded-md text-white bg-red-500 ${
                  cartItems[0] ? '' : 'opacity-50'
               }`}
            >
               <Link
                  onClick={(e) => {
                     dispatch(setActivePage('/checkout'));
                     console.log(cartItems);
                     if (!cartItems[0]) {
                        e.preventDefault();
                        e.stopPropagation();
                     }
                  }}
                  to='/checkout'
               >
                  Checkout
               </Link>
            </button>
         </div>
      </section>
   );
}

export default Cart;
