import React, { useState, useEffect, useMemo } from 'react';
import { CommonBanner } from '../components/shared';
import { helmet } from '../helmet';
import { HiSearch } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { TbMoodSad } from 'react-icons/tb';
import { products } from '../assets/data/products';
import { ProductCard } from '../components/shared';
import ReactPaginate from 'react-paginate';

helmet('Foods');
let items = [];
function AllFoods() {
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
   console.log('renderedProducts: ', renderedProducts);
   //separate component vs react-paginate. provide product card array for react-paginate:
   const innerItems = renderedProducts.map((product) => {
      return <ProductCard product={product} />;
   });
   items = innerItems;

   return (
      <div>
         <CommonBanner title='all foods' />
         <div className='flex justify-between items-center mt-3'>
            <div className='relative flex w-[43vw] md:w-[30vw] px-2 sm:px-3 lg:px-4 py-[3px] sm:py-1  border-2 rounded-sm border-lpink'>
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
                  className='appearance-none bg-transparent py-[3px] px-3 m-0 font-sans leading-normal cursor-pointer text-base outline-none'
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
         <div className='relative flex flex-wrap gap-x-[4%] sm:gap-x-[5%] lg:gap-x-[2.66666667%] gap-y-4 h-[520px] sm:h-[560px] lg:h-[370px] mt-10 pb-[95px]'>
            <PaginatedItems itemsPerPage={4} isSearching={draftSearchTerm} />
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

//// react-paginate's code

function PaginatedItems({ itemsPerPage, isSearching }) {
   // start with an empty list of items.
   const [currentItems, setCurrentItems] = useState(null);
   const [pageCount, setPageCount] = useState(0);

   const [itemOffset, setItemOffset] = useState(0);
   let reduceCompReRenderTrick;

   useMemo(() => {
      if (isSearching) {
         const endOffset = 0 + itemsPerPage;
         setCurrentItems(items.slice(0, endOffset));
         setPageCount(Math.ceil(items.length / itemsPerPage));
         reduceCompReRenderTrick = true;
      } else {
         const endOffset = itemOffset + itemsPerPage;
         setCurrentItems(items.slice(itemOffset, endOffset));
         setPageCount(Math.ceil(items.length / itemsPerPage));
         reduceCompReRenderTrick = true;
      }
   }, [isSearching, itemOffset, itemsPerPage]);

   // prevent component re-render
   if (reduceCompReRenderTrick) return;

   // Invoke when user click to request another page.
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
   };
   console.log('paginatedItems');
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
