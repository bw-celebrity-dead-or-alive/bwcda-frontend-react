import React from 'react'
import Button from './Button'
import NameForm from './NameForm'

const EndingScreen = () => {
  const score = window.localStorage.getItem("HighScore")
  const guess = window.localStorage.getItem("TotalGuesses")

  let displayScore = score * (10 * (score / guess))
  isNaN(displayScore) ? displayScore = 0 : console.log('Is number')

  let isNameHere = window.localStorage.getItem("SignUpCred") || ""

  return (
    <div className='end-screen'>
      <header className='end-content'>
        {isNameHere ? <h2>Congrats{` ${isNameHere}`}! </h2> : <h2>Congrats!</h2>}
        <br />
        <h4>You completed the quiz!</h4>
        <br />
        <h4>CORRECT GUESSES: {score}</h4>
        <h4>TOTAL GUESSES: {guess}</h4>
        <h3>SCORE: {Math.floor(displayScore)}</h3>
        {isNameHere ? null : <div>
          <h4>Enter your name to save your score:</h4>
          <NameForm />
        </div>}
      </header>
      <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
    </div>
  )
}

export default EndingScreen

//pulling ending score from game screeen

//just text that gives a score along with a log in and play button
