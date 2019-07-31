import React from 'react'
import Button from './Button'
import NameForm from './NameForm'

const EndingScreen = () => {
  const score = window.localStorage.getItem("HighScore")
  const guess = window.localStorage.getItem("TotalGuesses")

  const displayScore = score * (10 * (score / guess))

  return (
    <div className='end-screen'>
      <header className='end-content'>
        <h2>Congrats!</h2>
        <br />
        <h4>You completed the quiz!</h4>
        <br />
        <h4>CORRECT GUESSES: {score}</h4>
        <h4>TOTAL GUESSES: {guess}</h4>
        <h3>SCORE: {Math.floor(displayScore)}</h3>
        <h4>Enter your name to save your score:</h4>
        <NameForm />
      </header>
      <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
    </div>
  )
}

export default EndingScreen

//pulling ending score from game screeen

//just text that gives a score along with a log in and play button
