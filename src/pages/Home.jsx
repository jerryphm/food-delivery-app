import React from 'react';
import { helmet } from '../helmet';
import {
   Hero,
   Category,
   Features,
   PopularFoods,
   WhyChooseTasty,
   HotPizza
} from '../components/UI';

function Home() {
   helmet('Home');
   return (
      <div>
         <Hero />
         <Category />
         <Features />
         <PopularFoods />
         <WhyChooseTasty />
         <HotPizza />
         <div className='h-28'></div>
      </div>
   );
}

export default Home;
