import {Footer, Header} from './layoutComponents'

import React from 'react'
import RouterList from '../RouteList'

function DefaultLayout() {
  return (
    <>
    <Header />
    <RouterList />
    <Footer />
    </>
  )
}

export default DefaultLayout
