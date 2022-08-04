import React, { useState } from 'react';

import { CommonBanner } from '../components/shared';
import { Link } from 'react-router-dom';
import { helmet } from '../helmet';

function Login() {
   helmet('Login');
   const [userEmail, setUserEmail] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const handleSubmit = (e) => {
      e.preventDefault();
   };
   const handleUserLoginInfo = () => {
      const USER_LOGIN_INFO = [
         {
            userEmail,
            userPassword,
         },
      ];
      console.info('... successfully get USER_LOGIN_INFO', USER_LOGIN_INFO);
   };
   return (
      <section>
         <CommonBanner title={'Login'} />
         <div>
            <form
               onSubmit={(e) => handleSubmit(e)}
               className='flex flex-col items-center w-[60vw] sm:w-[40vw] max-w-[500px] mx-auto py-4 px-3 rounded-sm bg-lpink [&_input]:px-3 [&_input]:py-1  [&_input]:rounded-sm [&_input]:mb-3 [&_input]:outline-none'
            >
               <input
                  onChange={(e) => setUserEmail(e.target.value)}
                  type='email'
                  required
                  pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                  placeholder='Enter your email'
               />

               <input
                  onChange={(e) => setUserPassword(e.target.value)}
                  type='password'
                  required
                  minLength={6}
                  maxLength={21}
                  placeholder='Enter your password'
               />
               <button
                  onClick={handleUserLoginInfo}
                  type='submit'
                  className='px-3 py-1 sm:px-4 md:px-5 md:py-2 lg:px-7 lg:py-[10px] rounded-md mx-auto mt-3 text-white bg-red-500'
               >
                  Login
               </button>
            </form>

            <Link
               className='block mt-5 mb-14 underline mx-auto w-fit'
               to='/register'
            >
               Don't have an account? Create one!
            </Link>
         </div>
      </section>
   );
}

export default Login;
