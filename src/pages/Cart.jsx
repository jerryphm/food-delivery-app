import React from 'react';
import { Link } from 'react-router-dom';
import { CommonBanner } from '../components/shared';
import { helmet } from '../helmet';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../store/shoppingCart/cartSlice';
import { BiTrash } from 'react-icons/bi';

function Cart() {
   helmet('Cart');
   const dispatch = useDispatch();
   const { cartItems, cartTotalPrice } = useSelector((state) => state.cart);

   return (
      <section>
         <CommonBanner title={'Your Cart'} />
         <div>
            {cartItems.length != 0 ? (
               <>
                  <table className='w-full border-lpink rounded-sm px-3 py-2'>
                     <thead className='text-left h-10 sm:h-14 lg:h-20 border-lpink rounded-sm bg-red-500 text-white border-0'>
                        <tr className='[&>*]:px-3 [&>*]:sm:px-4 [&>*]:lg:px-6'>
                           <th>Image</th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Qty</th>
                           <th>Del</th>
                        </tr>
                     </thead>
                     <tbody>
                        {cartItems.map((cartItem) => (
                           <tr
                              key={cartItem.id}
                              className='[&>*]:px-3 [&>*]:sm:px-4 [&>*]:lg:px-6'
                           >
                              <td className='h-16 sm:h-24 lg:h-28 w-16 sm:w-auto'>
                                 <img
                                    src={cartItem.imgUrl01}
                                    className='object-cover h-10 w-10 sm:h-16 sm:w-16 lg:h-20 lg:w-20 mx-auto'
                                    alt='cart item image'
                                 />
                              </td>
                              <td>
                                 <span className='font-bold sm:font-rnroll sm:text-lg'>
                                    {cartItem.title}
                                 </span>
                              </td>
                              <td>
                                 <span className='font-bold sm:text-lg'>
                                    {cartItem.itemTotalQuantity}x
                                 </span>
                              </td>
                              <td>
                                 <span className='font-bold text-red-500 sm:text-lg'>
                                    ${cartItem.itemTotalPrice}
                                 </span>
                              </td>
                              <td>
                                 <button
                                    onClick={() =>
                                       dispatch(deleteItem(cartItem.id))
                                    }
                                    className='px-3 py-1 text-xl'
                                 >
                                    <BiTrash />
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
                  <div className='mt-3'>
                     
                        <span className='font-rnroll sm:text-lg'>
                           Subtotal:
                           <span className='text-red-500 ml-1 sm:ml-2'>
                              ${cartTotalPrice}
                           </span>
                        </span>{' '}
                        <p>
                        Taxes and shipping will calculate at checkout.
                        </p>
                   
                  </div>
               </>
            ) : (
               <div className='flex items-center justify-center font-rnroll mb-7'>
                  <span>You haven't ordered anything yet.</span>
               </div>
            )}
            <div className={`flex gap-5 mt-4 mb-14 ${cartItems.length != 0 ?'' :'justify-center'}`}>
               <button className='px-3 py-1 sm:px-4 md:px-5 md:py-2 lg:px-7 lg:py-[10px] rounded-md text-white bg-red-500'>
                  <Link to='/foods'>Continue Shopping</Link>
               </button>
               {cartItems.length != 0 ? (
                  <button className='px-3 py-1 sm:px-4 md:px-5 md:py-2 lg:px-7 lg:py-[10px] rounded-md text-white bg-red-500'>
                     <Link to='/checkout'>Proceed to checkout</Link>
                  </button>
               ) : null}
            </div>
         </div>
      </section>
   );
}

export default Cart;
