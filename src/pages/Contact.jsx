import React from 'react'
import { CommonBanner } from '../components/shared'
import {helmet} from '../helmet'


function Contact() {
  helmet('Contact')
  return (
    <div>
<CommonBanner />
    </div>
  )
}

export default Contact