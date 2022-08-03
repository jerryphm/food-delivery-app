import React from 'react'
import {helmet} from '../helmet'
import { CommonBanner } from '../components/shared'
import {useSelector, useDispatch} from 'react-redux'
import {Link, Routes, Route} from 'react-router-dom'


function Login() {
  helmet('Login')
  return (
    <section>
      <CommonBanner title={Login} />
      <div>
        <form action="">
          <input type="email" name="email" id="" placeholder='Enter your email' />
          <input type="password" name="password" id="" placeholder='Enter your password' />
        </form>
        <button>
          <Link ></Link>
        </button>
      </div>
    </section>
    )
}

export default Login