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
} from '../components/home';

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
