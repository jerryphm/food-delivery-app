import React from 'react';
import mdBannerImgUrl from '../../assets/images/mediumBanner.jpg';

function CommonBanner({ title }) {
   return (
      <div
         className='relative mb-10 -mx-2 sm:-mx-3 md:-mx-4
      lg:-mx-6'
      >
         <img
            src={mdBannerImgUrl}
            alt='Banner'
            style={{ contentVisibility: 'auto' }}
            loading='lazy'
            decoding='async'
            className='w-full h-44 sm:h-56 md:h-64 lg:h-72 object-cover'
         />
         <div
            className='absolute inset-0 flex items-center px-2 sm:px-3 md:px-4
      lg:px-6 bg-[#000000ad] text-white font-rnroll text-lg sm:text-xl md:text-2xl lg:text-3xl capitalize'
         >
            {title}
         </div>
      </div>
   );
}

export default CommonBanner;
