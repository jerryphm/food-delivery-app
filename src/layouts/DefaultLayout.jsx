import {Footer, Header} from './layoutComponents'

import React from 'react'
import RouterList from '../router/RouteList'

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
