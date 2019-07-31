import React from 'react'
import logo from '../logo.svg'
import Button from './Button'
import NameForm from './NameForm'


const EndingScreen = () => {
  const score = window.localStorage.getItem("HighScore")
  const guess = window.localStorage.getItem("TotalGuesses")

  return (
    <div className='end-screen'>
      <header className='end-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Congrats!</h2>
        <br />
        <h4>You completed the quiz!</h4>
        <br />
        <h4>CORRECT GUESSES: {score}</h4>
        <h4>TOTAL GUESSES: {guess}</h4>
        <h3>SCORE: {score}</h3>
        <h4>Enter name to save score</h4>
        <br />
        <NameForm />
      </header>
      <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
    </div>
  )
}

export default EndingScreen

//pulling ending score from game screeen

//just text that gives a score along with a log in and play button
