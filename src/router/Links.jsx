import React from 'react'
import {Link} from 'react-router-dom'
import {Home, FoodDetails, Cart, Contact} from '../pages';

function Links() {
  return (
    <div className=''>
    <Link to='/' >Home</Link>
    <Link to='/fooddetails' >Foods</Link>
    <Link to='/cart' >Cart</Link>
    <Link to='/contact' >Contact</Link>
    </div>
  )
}

export default Links