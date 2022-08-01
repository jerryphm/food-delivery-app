import React from 'react';
import img from '../../assets/images/ava-3.jpg';
import { useDispatch } from 'react-redux';
import { addItems } from '../../store/shoppingCart/cartSlice';

function ProductCard({ id, title, price, imgUrl01, imgUrl02 }) {
   let imgUrl = imgUrl01 ? imgUrl01 : imgUrl02;
   const cartDispatch = useDispatch();
   return (
      <div className='flex flex-col items-center justify-between w-[48%] sm:w-[30%] lg:w-[23%] border-[1px] border-lpink rounded-sm overflow-hidden'>
         <div className='py-3 sm:py-4 lg:py-6'>
            <img
               src={imgUrl}
               className='h-[70px] w-[70px] sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 cursor-pointer'
               alt='Food image'
            />
         </div>
         <div className='w-full pt-1 pb-3 sm:pb-4 px-3 sm:px-4 bg-lpink'>
            <p className='text-center font-rnroll mb-4'>{title}</p>
            <div className='flex justify-between items-center'>
               <span className='font-rnroll text-red-500 text-sm'>
                  ${price}
               </span>
               <button
                  onClick={() =>
                     cartDispatch(addItems({ id, title, price, imgUrl }))
                  }
                  className='py-1 px-2 sm:py-1 sm:px-3 rounded-md bg-red-500 text-white'
               >
                  Add to cart
               </button>
            </div>
         </div>
      </div>
   );
}

export default ProductCard;
