import React from 'react'
import Button from './Button'
import NameForm from './NameForm'

const EndingScreen = () => {
  const score = window.localStorage.getItem("CorrectGuesses")
  const guess = window.localStorage.getItem("TotalGuesses")

  let displayScore = score * (10 * (score / guess))
  isNaN(displayScore) ? displayScore = 0 : console.log('Is number')

  let isNameHere = window.localStorage.getItem("SignUpCred") || ""

  window.localStorage.setItem("GameScore", JSON.stringify(Math.floor(displayScore)))

  const newData () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }


  if (isNameHere) {
    let oldItems = JSON.parse(window.localStorage.getItem(isNameHere)) || []

    let newItem = { 'score': displayScore, 'date': 'date' }

    window.localStorage.setItem(isNameHere, JSON.stringify([]))
  }

  const tempdate = new Date().toString.slice(4, 15)
  console.log(tempdate)

  /**
   * var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);
   * 
   * 
   * 
   * var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
  
  var newItem = {
      'product-name': itemContainer.find('h2.product-name a').text(),
      'product-image': itemContainer.find('div.product-image img').attr('src'),
      'product-price': itemContainer.find('span.product-price').text()
  };
  
  oldItems.push(newItem);
  
  localStorage.setItem('itemsArray', JSON.stringify(oldItems));
   * 
   */
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
