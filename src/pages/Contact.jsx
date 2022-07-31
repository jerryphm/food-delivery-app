import React from 'react'
import {helmet} from '../helmet'


function Contact() {
  helmet('Contact')
  return (
    <div className='min-h-screen w-screen bg-red-500 text-bold text-white flex justify-center items-center'>Contact</div>
  )
}

export default Contact