import {
   Category,
   Features,
   Hero,
   HotPizza,
   PopularFoods,
   Testimonial,
   WhyChooseTasty,
} from '../components/home';

import React from 'react';
import { helmet } from '../helmet';

function Home() {
   helmet('Home');
   return (
      <div className='home'>
         <Hero />
         <Category />
         <Features />
         <PopularFoods />
         <WhyChooseTasty />
         <HotPizza />
         <Testimonial />
         <div className='test h-28'></div>
      </div>
   );
}

export default Home;
