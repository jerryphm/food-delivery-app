import React from 'react';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import {
   addItem,
   removeItem,
   deleteItem,
} from '../../store/shoppingCart/cartSlice';
import { useDispatch } from 'react-redux';

function CartItem({ cartItem }) {
   const dispatch = useDispatch();
   const { id, itemTotalQuantity, itemTotalPrice, title, imgUrl } = cartItem;

   return (
      <section
         className='flex items-start gap-3 sm:gap-4 md:gap-7 lg:gap-10 mb-3 sm:mb-4 md:mb-5'
         key={id}
      >
         <img
            src={imgUrl}
            className='h-7 w-7 sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-14 lg:w-14 translate-y-2 sm:translate-y-1 md:translate-x-0'
            alt='product image'
         />
         <div className='mark-info basis-[70%]'>
            <h3>{title}</h3>
            <div>
               <span className='quantity text-sm mr-5 sm:mr-7 md:mr-8 lg:mr-10'>
                  {itemTotalQuantity}x
               </span>
               <span className='totalPrice text-red-500'>
                  ${itemTotalPrice}
               </span>
            </div>
            <div className='flex justify-between items-center gap-3 md:gap-5 w-fit rounded-md mt-2 bg-lpink [&>button]:p-3'>
               <button
                  onClick={() => dispatch(addItem(cartItem))}
                  className='add text-sm'
               >
                  <BsPlusLg />
               </button>
               <span className='quantity w-5'>{itemTotalQuantity}</span>
               <button
                  onClick={() => dispatch(removeItem(id))}
                  className='remove text-sm'
               >
                  <BsDashLg />
               </button>
            </div>
         </div>
         <button 
         onClick={() => dispatch(deleteItem(id))} className='mark-deleteItem translate-y-2 font-rnroll text-xl lg:text-2xl p-2'>
            <CgClose />
         </button>
      </section>
   );
}

export default CartItem;
