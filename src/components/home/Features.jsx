import React from 'react';
import featureImg01 from '../../assets/images/service-01.png';
import featureImg02 from '../../assets/images/service-02.png';
import featureImg03 from '../../assets/images/service-03.png';

const featureData = [
   {
      display: 'Quick Delivery',
      description:
         'lorem ipsum dolor sit amet, verial bake at meniued. Holo rius tadest bedo.',
      imgUrl: featureImg01,
   },
   {
      display: 'Super Dine in',
      description:
         'lorem ipsum dolor sit amet, verial bake at meniued. Holo rius tadest bedo.',
      imgUrl: featureImg02,
   },
   {
      display: 'Easy Pick Up',
      description:
         'lorem ipsum dolor sit amet, verial bake at meniued. Holo rius tadest bedo.',
      imgUrl: featureImg03,
   },
];
function Features() {
   return (
      <div className='mt-16 sm:mt-20'>
         <section className='text-center font-rnroll font-bold'>
            <h3 className='text-red-500 md:text-lg'>What we serve</h3>
            <h2 className='text-2xl mt-2 sm:mt-3 mb-3'>
               <span className='whitespace-nowrap'>Just sit back at home</span>
               <br />
               we will <span className='text-red-500'>take care</span>
            </h2>
         </section>
         <section className='flex flex-col sm:flex-row items-center gap-3 sm:gap-7 mt-10 sm:mt-14'>
            {featureData.map((feature, i) => (
               <div key={i} className='flex flex-col items-center'>
                  <img
                     className='h-[60px] w-[60px]'
                     src={feature.imgUrl}
                     alt='feature image'
                  />
                  <h3 className='font-rnroll'>{feature.display}</h3>
                  <p className='text-center max-w-[40ch] opacity-90'>
                     {feature.description}
                  </p>
               </div>
            ))}
         </section>
      </div>
   );
}

export default Features;
