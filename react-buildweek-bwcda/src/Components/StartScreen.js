import React from 'react'
import logo from '../logo.svg'
import Button from './Button'

const StartScreen = () => {
  return (
    <div className='start-screen'>
      <header className='start-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>
          Have you ever had an argument about whether a celebrity is dead or
          alive?
        </h2>
      </header>
      <Button buttonText={'LOGIN'} path={'/login'} />
      <Button buttonText={'START PLAYING'} path={'play'} />
    </div>
  )
}

export default StartScreen

// Page that the user sees after they click the play now button on the landing page

//Comps

//User can choose rather to log in or just to play

//> click play > goes to game screen
