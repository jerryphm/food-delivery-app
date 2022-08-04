import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/shoppingCart/cartSlice';
import { setActivePage } from '../../store/activePage/activePage';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
   
   const dispatch = useDispatch();
   const handleDispatch = () => {
      dispatch(addItem(product));
   };
   return (
      <div className='flex flex-col items-center justify-between max-h-[210px] sm:max-h-60 lg:max-h-[280px] w-[48%] sm:w-[30%] lg:w-[23%] border-[1px] border-lpink rounded-sm overflow-hidden'>
         <div className='w-full py-3 sm:py-4 lg:py-6 cursor-pointer'>
            <Link onClick={() => dispatch(setActivePage('/foods'))} to={`/foods/${product.id}`}>
               <img
                  src={product.imgUrl02}
                  className='h-[70px] w-[70px] sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 mx-auto '
                  alt='Food image'
               />
            </Link>
         </div>
         <div className='w-full pt-1 pb-3 sm:pb-4 px-3 sm:px-4 bg-lpink'>
            <p className='text-center font-rnroll mb-4'>{product.title}</p>
            <div className='flex justify-between items-center'>
               <span className='font-rnroll text-red-500 text-sm'>
                  ${product.price}
               </span>
               <button
                  onClick={handleDispatch}
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
