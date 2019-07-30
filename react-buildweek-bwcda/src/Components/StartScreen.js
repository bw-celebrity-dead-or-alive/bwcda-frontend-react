import React from 'react'
import logo from './logo.svg'
import HomeButtons from './Components/Buttons'

const StartScreen = () => {
  return (
    <div>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Have you ever had an argument about whether a celebrity is dead or
          alive?
        </p>
      </header>
      <HomeButtons />
    </div>
  )
}

export default StartScreen

// Page that the user sees after they click the play now button on the landing page

//Comps

//User can choose rather to log in or just to play

//> click play > goes to game screen
