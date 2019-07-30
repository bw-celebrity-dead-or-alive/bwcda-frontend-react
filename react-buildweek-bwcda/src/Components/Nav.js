import React from 'react'
import { Route, Link } from 'react-router-dom'
import App from '../App'
import Login from './Login'

const Nav = () => {
  return (
    <nav>
      <Link to=''>
        <p>RESET</p>
      </Link>
      <Link to=''>
        <p>LOGIN</p>
      </Link>
      <Route path='/start' component={App} />
      <Route path='/login' component={Login} />
    </nav>
  )
}

export default Nav
