import React from 'react'
import { Route, Link } from 'react-router-dom'
import GameScreen from './GameScreen'
// import StartScreen from './StartScreen'
import Login from './Login'

const Buttons = (props) => {
  // button text defaults as 'START PLAYING'
  let buttonText = 'START PLAYING'

  if (props.origin !== 'START PLAYING') {
    buttonText = 'PLAY AGAIN'
  }

  return (
    <div className='buttons'>
      <button><Link to='/login' >LOGIN</Link></button>
      <button><Link to='/play' >{buttonText}</Link></button>
    </div>
  )
}
export default Buttons
