import React from 'react'
import Button from './Button'
import NameForm from './NameForm'

const EndingScreen = () => {
  const correctGuesses = localStorage.getItem('CorrectGuesses');
  const guess = localStorage.getItem("TotalGuesses");

  let score = Math.floor(correctGuesses * (10 * (correctGuesses / guess)));

  if (isNaN(score)) {
    score = 0;
  }

  let isNameHere = localStorage.getItem("SignUpCred") || "";

  localStorage.setItem('GameScore', JSON.stringify(score));

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  if (isNameHere) {
    let oldGames = JSON.parse(localStorage.getItem(isNameHere)) || [];
    let newGame = { score: score, date: today };
    oldGames.push(newGame);
    localStorage.setItem(isNameHere, JSON.stringify(oldGames));
  }

  return (
    <div className='end-screen'>
      <div className='end-content'>
        {isNameHere ? (
          <h2>Congrats{` ${isNameHere}`}! </h2>
        ) : (
          <h2>Congrats!</h2>
        )}
        <br />
        <h4>You completed the quiz!</h4>
        <br />
        <h4>CORRECT GUESSES: {correctGuesses}</h4>
        <h4>TOTAL GUESSES: {guess}</h4>
        <h3>SCORE: {isNaN(score) ? 0 : score} </h3>
        {isNameHere ? null : (
          <div>
            <h4>Enter your name to save your score:</h4>
            <NameForm score={score}/>
          </div>
        )}
      </div>
      <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
    </div>
  )
}

export default EndingScreen
