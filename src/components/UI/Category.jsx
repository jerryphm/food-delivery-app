import React from 'react'
import categoryImg01 from '../../assets/images/category-01.png'
import categoryImg02 from '../../assets/images/category-02.png'
import categoryImg03 from '../../assets/images/category-03.png'
import categoryImg04 from '../../assets/images/category-04.png'

const categoryData = [
   {display: 'Fastfood', imgUrl: categoryImg01},
   {display: 'Pizza', imgUrl: categoryImg02},
   {display: 'Asian Food', imgUrl: categoryImg03},
   {display: 'Row Meat', imgUrl: categoryImg04},
]

function Category() {
  return (
    <div className='flex flex-wrap justify-between gap-4'>
      {categoryData.map((categoryItem, index) => (
         <div className='flex items-center gap-2 w-[47%] sm:w-[23%] py-2 px-3 rounded-md bg-lpink cursor-pointer transition-all hover:-translate-y-2' key={index}>
            <img src={categoryItem.imgUrl} alt="category item image" className='h-9 w-9'/>
            <span className='font-rnroll'>{categoryItem.display}</span>
         </div>
      ))}
    </div>
  )
}

export default Category