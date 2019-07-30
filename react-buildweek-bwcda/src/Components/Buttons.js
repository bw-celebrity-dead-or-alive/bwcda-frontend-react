import React from 'react'
import { Route, Link } from 'react-router-dom'
import EndingScreen from './EndingScreen'
import StartScreen from './StartScreen'
import Login from './Login'

const Buttons = (props) => {
  // button text defaults as 'START PLAYING'
  let buttonText = 'START PLAYING'
  let screen = StartScreen

  if (props.origin !== 'START PLAYING') {
    buttonText = 'PLAY AGAIN'
    screen = EndingScreen
  }

  return (
    <div>
      <button><Link to={Login} >LOGIN</Link></button>
      <button><Link to={screen} >{buttonText}</Link></button>
      <Route path='/login' />
      <Route path='/start' />
    </div>
  )
}
export default Buttons
