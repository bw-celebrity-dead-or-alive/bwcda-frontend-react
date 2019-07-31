import React from 'react'
import Button from './Button'

const StartScreen = () => {
  return (
    <div className='start-screen'>
      <header className='start-content'>
        <h2>
          Have you ever had an argument about whether a celebrity is dead or
          alive?
        </h2>
      </header>
      <Button buttonText={'LOGIN'} pathName={'login'} />
      <Button buttonText={'START PLAYING'} pathName={'play'} />
    </div>
  )
}

export default StartScreen

// Page that the user sees after they click the play now button on the landing page

//Comps

//User can choose rather to log in or just to play

//> click play > goes to game screen
