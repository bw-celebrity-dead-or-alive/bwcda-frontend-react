import React from 'react'
import Button from './Button'

const StartScreen = () => {
  let isNameHere = window.localStorage.getItem("SignUpCred") || ""

  return (
    <div className='start-screen'>
      <header className='start-content'>
        {isNameHere === "" ? null : <h2>Welcome {isNameHere}!</h2>}
        <h2>
          Have you ever had an argument about whether a celebrity is dead or
          alive?
        </h2>
        <h3>Get ready to guess as many as you can in 30 seconds!</h3>
      </header>
      <div className='buttons'>
        <Button buttonText={'START PLAYING'} pathName={'play'} />
        {isNameHere === "" ? <Button buttonText={'LOGIN'} pathName={'login'} /> : null}
      </div>
    </div>
  )
}

export default StartScreen

// Page that the user sees after they click the play now button on the landing page

//Comps

//User can choose rather to log in or just to play

//> click play > goes to game screen
