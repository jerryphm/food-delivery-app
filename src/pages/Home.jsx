import React from 'react';
import { helmet } from '../helmet';
import {
   Hero,
   Category,
   Features,
   PopularFoods,
   WhyChooseTasty,
   HotPizza,
   Testimonial
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
         <Testimonial />
         <div className='h-28'></div>
      </div>
   );
}

export default Home;
