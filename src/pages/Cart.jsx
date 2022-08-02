import React from 'react'
import { CommonBanner } from '../components/shared'
import {helmet} from '../helmet'

function Cart() {
  helmet('Cart')
  return (
    <div>
      <CommonBanner />
    </div>
  )
}

export default Cart