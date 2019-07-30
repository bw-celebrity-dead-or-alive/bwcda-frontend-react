import React from 'react'
import { Route, Link } from 'react-router-dom'
import EndingScreen from './EndingScreen'
import App from '../App'
import Login from './Login'


const Buttons = () => {
  // TODO: add logic to change link destination dynamic

  return (
    <div>
      <button><Link to={Login} >LOGIN</Link></button>
      <button><Link to={App}>PLAY GAME</Link></button>
      <Route path='/login' />
      <Route path='/start' />
    </div>
  )
}
export default Buttons
