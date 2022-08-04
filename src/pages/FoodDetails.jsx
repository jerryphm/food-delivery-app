import React, { useMemo, useState } from 'react';

import { CommonBanner } from '../components/shared';
import ProductCard from '../components/shared/ProductCard';
import { addItem } from '../store/shoppingCart/cartSlice';
import { feedbacks } from '../assets/data/products';
import { helmet } from '../helmet';
import { products } from '../assets/data/products';
import { useDispatch } from 'react-redux';

function FoodDetails() {
   helmet('Food Details');
   const productId = window.location.pathname.slice(7).toString();
   const product = products.find((product) => product.id == productId);
   const [imgUrl, setImgUrl] = useState(product.imgUrl01);
   //fix not change imgUrl when click another product
   useMemo(() => {
      setImgUrl(product.imgUrl01);
   }, [productId]);
   //dispatch
   const dispatch = useDispatch();
   const handleDispatch = () => {
      dispatch(addItem(product));
   };
   //get random products to render 'you might also like section'
   const randomProducts = useMemo(() => {
      const otherProducts = products.filter((item) => item.id != productId);
      const getRandomIndex = () => {
         const draftIndex = Math.floor(otherProducts.length * Math.random());
         if (draftIndex + 3 <= otherProducts.length) {
            return draftIndex;
         } else {
            return getRandomIndex();
         }
      };
      const getRandomProducts = () => {
         const startIndex = getRandomIndex();
         const endIndex = startIndex + 4;
         const randomProducts = otherProducts.slice(startIndex, endIndex);
         return randomProducts;
      };
      return getRandomProducts();
   }, [productId]);

   //to toggle reviews and description
   const [isReviews, setReviews] = useState(true);
   return (
      <section>
         <CommonBanner title={product ? product.title : ''} />

         <div className='flex gap-4 sm:gap-6 lg:gap-8 mb-6'>
            <img
               className='h-36 sm:h-48 md:h-52 lg:h-56'
               src={imgUrl}
               alt='food image'
            />
            <div>
               <div className='font-rnroll'>
                  <h3 className=' mb-1'>{product.title}</h3>
                  <div className='text-sm mb-5'>
                     <span className='text-red-500 mr-4 lg:mr-6'>
                        ${product.price}
                     </span>
                     <span>• {product.category}</span>
                  </div>
                  <div className='flex gap-3 md:gap-4 lg:gap-5 mb-2'>
                     <img
                        src={product.imgUrl01}
                        onClick={(e) => setImgUrl(product.imgUrl01)}
                        className={`opacity-50 cursor-pointer object-cover h-10 sm:h-16 mb-3 sm:mb-4 lg:mb-5 ${
                           imgUrl == product.imgUrl01 ? 'opacity-100' : ''
                        }`}
                        alt='food image'
                     />
                     <img
                        src={product.imgUrl02}
                        onClick={(e) => setImgUrl(product.imgUrl02)}
                        className={`opacity-50 cursor-pointer object-cover h-10 sm:h-16 mb-3 sm:mb-4 lg:mb-5 ${
                           imgUrl == product.imgUrl02 ? 'opacity-100' : ''
                        }`}
                        alt='food image'
                     />
                     <img
                        onClick={(e) => setImgUrl(product.imgUrl03)}
                        src={product.imgUrl03}
                        className={`opacity-50 cursor-pointer object-cover h-10 sm:h-16 ${
                           imgUrl == product.imgUrl03 ? 'opacity-100' : ''
                        }`}
                        alt='food image'
                     />
                  </div>

                  <button
                     onClick={handleDispatch}
                     className='py-1 px-2 sm:py-1 sm:px-3 rounded-md bg-red-500 text-white'
                  >
                     Add to cart
                  </button>
               </div>
            </div>
         </div>

         <div className='mt-20'>
            <div className='sm:w-[80%]'>
               <button
                  onClick={() => setReviews(true)}
                  className={`px-3 py-[1px] md:px-4 md:py-[2px] rounded-sm mr-3 font-rnroll ${
                     isReviews ? 'bg-lpink' : null
                  }`}
               >
                  Reviews
               </button>
               <button
                  onClick={() => setReviews(false)}
                  className={`px-3 py-[1px] md:px-4 md:py-[2px] rounded-sm font-rnroll ${
                     isReviews ? null : 'bg-lpink'
                  }`}
               >
                  Description
               </button>
            </div>
            <div className='mt-5'>
               {isReviews ? (
                  <>
                     {feedbacks.map(
                        ({ id, name, location, avatar, feedback }) => (
                           <div
                              key={id}
                              className='px-3 py-2 rounded-sm border-[1px] border-lpink mb-5'
                           >
                              <h3 className='mb-1'>"{feedback}"</h3>
                              <div>
                                 <img
                                    src={avatar}
                                    className='object-cover h-9 w-9 rounded-sm inline mr-3'
                                    alt='use image'
                                 />
                                 <span className=' opacity-90'>
                                    {name} ({location})
                                 </span>
                              </div>
                           </div>
                        )
                     )}
                  </>
               ) : (
                  <div>{product.desc}</div>
               )}
            </div>
         </div>

         <div className='mt-10'>
            <h3 className='font-rnroll'>You might also like</h3>
            <div className='flex flex-wrap gap-x-[4%] sm:gap-x-[5%] lg:gap-x-[2.66666667%] gap-y-4 h-[520px] sm:h-[560px] lg:h-[370px] mt-5 pb-[95px]'>
               {randomProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default FoodDetails;
