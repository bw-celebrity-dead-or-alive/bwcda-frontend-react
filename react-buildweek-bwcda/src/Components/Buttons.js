import React from 'react'
import { Route, Link } from 'react-router-dom'
import EndingScreen from './EndingScreen'
import StartScreen from './StartScreen'
import Login from './Login'

const Buttons = (buttonText) => {

  let button = StartScreen
  let slug = 'start'

  if (buttonText === 'START PLAYING') {
    button = StartScreen
  } else {
    button = EndingScreen
    slug = 'end'
  }

  return (
    <div>
      <button><Link to={Login} >LOGIN</Link></button>
      <button><Link to={button} >{buttonText}</Link></button>
      <Route path='/login' />
      <Route path={`/${slug}`} />
    </div>
  )
}
export default Buttons
