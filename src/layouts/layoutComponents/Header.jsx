
import { Container } from 'reactstrap'
import React from 'react'
import logo from '../../assets/images/res-logo.png'
import {Link} from 'react-router-dom'
import Links from '../../router/Links'

function Header() {
  return (
    <header>
      <Container>
        <div className="nav__wrapper flex">
          <div className="logo flex">
            <img src={logo} alt="" />
            <h4>Tasty Treat</h4>
          </div>

          <nav>
            <div className="menu">
              <Links />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header