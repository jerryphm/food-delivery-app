import { Footer, Header } from './layoutComponents';

import React from 'react';
import RouteComp from '../router/RoutesComp';

function DefaultLayout() {
   return (
      <div className='max-w-7xl min-h-screen px-2 sm:px-3 md:px-4 lg:px-6 mx-auto'>
         <Header />
         <div className='mt-[64px] sm:mt-[72px] md:mt-[76px]'>
            <RouteComp />
         </div>
         <Footer />
      </div>
   );
}

export default DefaultLayout;
