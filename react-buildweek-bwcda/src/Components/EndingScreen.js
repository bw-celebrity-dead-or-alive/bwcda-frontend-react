import React, { useState } from 'react'
import logo from '../logo.svg'
import Button from './Button'
import NameForm from './NameForm'

const EndingScreen = () => {

  return (
    <div className='end-screen'>
      <header className='end-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Congrats!</h2>
        <br />
        <h4>You completed the quiz!</h4>
        <br />
        <h4>CORRECT GUESSES: 7</h4>
        <h4>TOTAL GUESSES: 23</h4>
        <h3>SCORE: 7 points</h3>
        <h5>Enter name to save score:</h5>
        <br />
        <NameForm />
      </header>
      <Button buttonText={'PLAY AGAIN'} path={''} />
    </div>
  )
}

export default EndingScreen

//pulling ending score from game screeen

//just text that gives a score along with a log in and play button
