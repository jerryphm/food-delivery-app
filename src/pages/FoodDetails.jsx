import React, { useState } from 'react';
import { CommonBanner } from '../components/shared';
import { helmet } from '../helmet';
import { HiSearch } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { TbMoodSad } from 'react-icons/tb';
import { products } from '../assets/data/products';
import { ProductCard } from '../components/shared';
import ReactPaginate from 'react-paginate';

helmet('Foods');
function FoodDetails() {
   const [draftSearchTerm, setDraftSearchTerm] = useState('');
   const handleSearch = () => {
      let searchTerm = '';
      const arr = draftSearchTerm.split(' ');
      for (let word of arr) {
         word = word.charAt(0).toUpperCase() + word.slice(1);
         searchTerm += searchTerm ? ` ${word}` : word;
      }
      const renderedProducts = products.filter((product) =>
         product.title.includes(searchTerm)
      );
      return renderedProducts;
   };
   const renderedProducts = draftSearchTerm ? handleSearch() : products;

   return (
      <div>
         <CommonBanner title='all foods' />
         <div className='flex justify-between items-center mt-3'>
            <div className='relative flex w-[45vw] md:w-[30vw] px-2 sm:px-3 lg:px-4 py-[3px] sm:py-1  border-2 rounded-sm border-lpink'>
               <input
                  onChange={(e) => setDraftSearchTerm(e.target.value.trim())}
                  type='text'
                  placeholder='find your foods'
                  className='w-[80%] outline-none leading-[1.1] capitalize'
               />
               <div className='flex items-center absolute top-0 right-0 bottom-0 w-fit px-2 sm:px-3 text-lpink'>
                  <HiSearch />
               </div>
            </div>
            <div className='relative w-fit pr-4 border-2 border-lpink rounded-sm shrink-0 grow-0'>
               <select
                  name='sort'
                  className='appearance-none bg-transparent py-1 px-3 m-0 font-sans leading-normal cursor-pointer text-base outline-none'
               >
                  <option value='default'>Default</option>
                  <option value='az'>Alphabetically: A - Z</option>
                  <option value='hightPrice'>High price first</option>
                  <option value='lowPrice'>Low price first</option>
               </select>
               <span className='absolute right-0 top-0 translate-y-[50%] px-2 text-lpink'>
                  <IoIosArrowDown />
               </span>
            </div>
         </div>
         <div className='flex flex-wrap gap-x-[4%] sm:gap-x-[5%] lg:gap-x-[2.66666667%] gap-y-4 mt-10'>
            {renderedProducts.map(({ id, title, price, imgUrl01 }) => (
               <ProductCard
                  title={title}
                  price={price}
                  imgUrl01={imgUrl01}
                  id={id}
                  key={id}
               />
            ))}
            {renderedProducts.length == 0 ? (
               <div className='flex items-center justify-center font-rnroll w-full h-[183px] sm:h-[205px] md:h-[221px] lg:h-[253px] sm:text-lg'>
                  <span className='max-w-[30ch] sm:max-w-full text-center'>
                     Couldn't find your food, please try again
                     <TbMoodSad className='inline ml-2' />
                  </span>
               </div>
            ) : null}
         </div>
      </div>
   );
}

export default FoodDetails;
