import React from 'react'
import Button from './Button'
import NameForm from './NameForm'

const EndingScreen = () => {
  const score = window.localStorage.getItem("CorrectGuesses")
  const guess = window.localStorage.getItem("TotalGuesses")

  let displayScore = Math.floor(score * (10 * (score / guess)))
  isNaN(displayScore) ? displayScore = 0 : console.log('Is number')

  let isNameHere = window.localStorage.getItem("SignUpCred") || ""

  window.localStorage.setItem("GameScore", JSON.stringify(displayScore))


  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
  const yyyy = today.getFullYear()
  today = mm + '/' + dd + '/' + yyyy;

  const tempdate = new Date().toString().slice(4, 15) // -> returns Aug 01 2019

  if (isNameHere) {
    let oldGames = JSON.parse(window.localStorage.getItem(isNameHere)) || []
    let newGame = { 'score': displayScore, 'date': today }
    oldGames.push(newGame)
    window.localStorage.setItem(isNameHere, JSON.stringify(oldGames))
  }

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
