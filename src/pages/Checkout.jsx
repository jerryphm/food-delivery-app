import React from 'react';
import { CommonBanner } from '../components/shared';
import { helmet } from '../helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import { useState } from 'react';

function Checkout() {
   helmet('Checkout');
   const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);
   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userPhoneNumber, setUserPhoneNumber] = useState('');
   const [userLocation, setUserLocation] = useState('');
   const handleSubmit = (e) => {
      e.preventDefault();
   };
   const handleUserCheckoutInfo = () => {
      const USER_CHECKOUT_INFO = [
         {
            userName,
            userEmail,
            userPhoneNumber,
            userLocation,
         },
      ];
      console.info('...successfully get USER_CHECKOUT_INFO',USER_CHECKOUT_INFO)
   };

   return (
      <div>
         <CommonBanner title={'Checkout'} />
         <section className='mb-14'>
            {cartTotalPrice != 0 ? (
               <>
                  <h3 className='font-rnroll lg:text-xl'>Shipping Address</h3>
                  <div className='flex items-start gap-2 sm:gap-4 lg:gap-7 mt-4'>
                     <form
                        onSubmit={(e) => handleSubmit(e)}
                        className='w-[70vw] sm:w-[60vw] lg:w-[40vw] max-w-[500px] p-3 rounded-sm bg-lpink [&_input]:px-3 [&_input]:py-1  [&_input]:rounded-sm [&_input]:mb-3 [&_input]:outline-none'
                     >
                        <input
                           onChange={(e) => setUserName(e.target.value)}
                           type='text'
                           required
                           placeholder='Enter your name'
                        />
                        <input
                           onChange={(e) => setUserEmail(e.target.value)}
                           type='email'
                           required
                           pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                           placeholder='Enter your email'
                        />
                        <input
                           onChange={(e) => setUserPhoneNumber(e.target.value)}
                           type='text'
                           required
                           pattern='^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$'
                           placeholder='Phone number'
                        />
                        <input
                           onChange={(e) => setUserLocation(e.target.value)}
                           type='text'
                           required
                           placeholder='Location'
                        />
                        <button
                           onClick={handleUserCheckoutInfo}
                           type='submit'
                           className='px-3 py-1 sm:px-4 md:px-5 md:py-2 lg:px-7 lg:py-[10px] rounded-md mx-auto mt-3 text-white bg-red-500'
                        >
                           <Link to='/login' >Payment</Link>
                        </button>
                     </form>
                     <div className='grow-1 sm:w-auto px-3 py-1 rounded-sm bg-lpink'>
                        <h3>
                           Subtotal:{' '}
                           <span className='block sm:inline font-bold'>
                              ${cartTotalPrice}
                           </span>
                        </h3>
                        <span>
                           Shipping:{' '}
                           <span className='block sm:inline font-bold'>
                              $10
                           </span>
                        </span>
                        <h3>
                           Total:{' '}
                           <span className='block sm:inline font-bold'>
                              ${cartTotalPrice + 10}
                           </span>
                        </h3>
                     </div>
                  </div>
               </>
            ) : (
               <div className='flex flex-col items-center font-rnroll lg:text-xl'>
                  <span>You haven't ordered anything yet</span>
                  <button className='px-3 py-1 sm:px-4 md:px-5 md:py-2 lg:px-7 lg:py-[10px] rounded-md mt-8 text-white bg-red-500'>
                     <Link to='/foods'>Continue Shopping</Link>
                  </button>
               </div>
            )}
         </section>
      </div>
   );
}

export default Checkout;
