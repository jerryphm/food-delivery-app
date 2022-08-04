import React, { useMemo, useState } from 'react';

import { CommonBanner } from '../components/shared';
import { HiSearch } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { ProductCard } from '../components/shared';
import ReactPaginate from 'react-paginate';
import { TbMoodSad } from 'react-icons/tb';
import { helmet } from '../helmet';
import { products } from '../assets/data/products';

helmet('Foods');
let items = [];
function AllFoods() {
   const [sortRule, setSortRule] = useState('default');
   const [draftSearchTerm, setDraftSearchTerm] = useState('');

   const handleSearch = () => {
      let searchTerm = '';
      const arr = draftSearchTerm.split(' ');
      for (let word of arr) {
         word = word.charAt(0).toUpperCase() + word.slice(1);
         searchTerm += searchTerm ? ` ${word}` : word;
      }
      const notSortedProducts = products.filter((product) =>
         product.title.includes(searchTerm)
      );
      return notSortedProducts;
   };

   const notSortedProducts = draftSearchTerm ? handleSearch() : products;
   const notSortedProductsCopy = notSortedProducts.slice(0);
   let renderedProducts;
   switch (sortRule) {
      case 'default':
         renderedProducts = notSortedProducts;
         break;
      case 'az':
         renderedProducts = notSortedProductsCopy.sort((preItem, nextItem) => {
            return preItem.title.localeCompare(nextItem.title);
         });
         break;
      case 'hightPrice':
         renderedProducts = notSortedProductsCopy.sort(
            (preProduct, nextProduct) => nextProduct.price - preProduct.price
         );
         break;
      default:
         renderedProducts = notSortedProductsCopy.sort(
            (preProduct, nextProduct) => preProduct.price - nextProduct.price
         );
   }

   //separate component vs react-paginate. provide product card array for react-paginate:
   const innerItems = renderedProducts.map((product) => {
      return <ProductCard product={product} key={product.id} />;
   });

   items = innerItems;

   return (
      <div>
         <CommonBanner title='all foods' />
         <div className='flex flex-col sm:flex-row justify-between items-end sm:items-center mt-3'>
            <div className='relative flex w-full sm:w-[40vw] md:w-[30vw] px-2 sm:px-3 lg:px-4 py-[3px] sm:py-1  border-2 rounded-sm border-lpink'>
               <input
                  onChange={(e) => setDraftSearchTerm(e.target.value.trim())}
                  type='text'
                  placeholder='find your foods here...'
                  className='w-[80%] outline-none leading-[1.1] capitalize'
               />
               <div className='flex items-center absolute top-0 right-0 bottom-0 w-fit px-2 sm:px-3 text-lpink'>
                  <HiSearch />
               </div>
            </div>
            <div className='relative w-fit border-2 border-lpink rounded-sm shrink-0 grow-0 mt-2 sm:mt-0'>
               <select
                  name='sort'
                  onChange={(e) => {
                     setSortRule(e.currentTarget.value);
                  }}
                  className='appearance-none bg-transparent py-[3px] pl-3 pr-7 m-0 font-sans leading-normal cursor-pointer text-base outline-none opacity-[0.75]'
               >
                  <option value='default'>Default</option>
                  <option value='az'>A - Z</option>
                  <option value='hightPrice'>High price first</option>
                  <option value='lowPrice'>Low price first</option>
               </select>
               <span className='absolute right-0 top-0 translate-y-[50%] px-2 text-lpink cursor-pointer pointer-events-none'>
                  <IoIosArrowDown />
               </span>
            </div>
         </div>
         <div className='relative flex flex-wrap gap-x-[4%] sm:gap-x-[5%] lg:gap-x-[2.66666667%] gap-y-4 h-[520px] sm:h-[560px] lg:h-[370px] mt-10 pb-[95px]'>
            {renderedProducts.length == 0 ? (
               <>
                  <div className='flex items-center justify-center font-rnroll w-full h-[183px] sm:h-[205px] md:h-[221px] lg:h-[253px] sm:text-lg'>
                     <span className='max-w-[30ch] sm:max-w-full text-center'>
                        Couldn't find your food, please try again
                        <TbMoodSad className='inline ml-2' />
                     </span>
                  </div>
                  <ul class='absolute right-0 left-0 bottom-0 flex items-center justify-center gap-5 mx-auto mt-3 mb-9 opacity-40'>
                     <li class='rounded-sm bg-red-500 text-white font-rnroll'>
                        <a class='px-3 py-1 font-rnroll'>1</a>
                     </li>
                  </ul>
               </>
            ) : (
               <PaginatedItems
                  itemsPerPage={4}
                  isSearching={draftSearchTerm}
                  isSorting={sortRule}
               />
            )}
         </div>
      </div>
   );
}

//// react-paginate's code

function PaginatedItems({ itemsPerPage, isSearching, isSorting }) {
   // start with an empty list of items.
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);

   const [itemOffset, setItemOffset] = useState(0);
   let reduceCompReRenderTrick;

   useMemo(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
      reduceCompReRenderTrick = true;
   }, [isSearching, isSorting, itemOffset, itemsPerPage]);

   // prevent component re-render
   if (reduceCompReRenderTrick) return;

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
   };

   return (
      <>
         <Items currentItems={currentItems} />
         <ReactPaginate
            // CSS
            containerClassName='absolute right-0 left-0 bottom-0 flex items-center justify-center gap-5 mx-auto mt-3 mb-9'
            pageLinkClassName='px-3 py-1 font-rnroll'
            activeClassName='rounded-sm bg-red-500 text-white font-rnroll'
            nextLabel=''
            previousLabel=''
            nextClassName='hidden'
            previousClassName='hidden'
            //End CSS
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
         />
      </>
   );
}
function Items({ currentItems }) {
   return <>{currentItems}</>;
}
export default AllFoods;
