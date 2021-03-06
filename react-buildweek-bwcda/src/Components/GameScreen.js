import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios'
import CelebCard from './CelebCard'
import Timebar from './Timebar'

const GameScreen = () => {
  const randomID = () => {
    return Math.floor(Math.random() * 300 + 1)
  }

  //This fetches the list of celebs
  const [data, setData] = useState({})
  //This works with SetCurrentCard to identify the current ID needed to be passed
  const [id, setId] = useState(Math.floor(Math.random() * 300 + 1))
  //Keeps track of Score and resets to zero after game ends.
  const [score, setScore] = useState(0)
  const [guesses, setGuesses] = useState(0)
  //sets the state of the timer
  const [time, setTime] = useState(false)
  const [wrongDead, setWrongDead] = useState(false)
  const [wrongAlive, setWrongAlive] = useState(false)

  //Grabs Data from API
  useEffect(() => {
    axios
      .get(
        `https://prod-celebrity-dead-alive.herokuapp.com/api/celebrities/${id}`
      )
      .then((e) => {
        e.status ? setData(e.data) : console.log("This shouldn't show up")
      })
      .catch((err) => {
        console.log('Something isnt working', err)
        setId(randomID())
      })
  }, [id])

  useEffect(() => {
    const timer = setTimeout(() => setTime(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  //Checks for death case on Click
  const isDead = (deathCheck) => {
    if (deathCheck > 0) {
      //true case, reward one point
      setScore(score + 1)
      setWrongDead(false)
    } else {
      setWrongDead(true)
    }
    //Move to next card
    setId(randomID())
    setGuesses(guesses + 1)
  }

  //Checks for Alive case on Click
  const isAlive = (aliveCheck) => {
    if (aliveCheck === 0) {
      //true case, reward one point
      setScore(score + 1)
      setWrongAlive(false)
    } else {
      setWrongAlive(true)
    }
    //move to next card
    setId(randomID())
    setGuesses(guesses + 1)
  }

  window.localStorage.setItem('CorrectGuesses', JSON.stringify(score))
  window.localStorage.setItem('TotalGuesses', JSON.stringify(guesses))

  return (
    <div className='play-screen'>
      <Route
        path='/play'
        render={() =>
          time ? (
            <Redirect to='/end' />
          ) : (
            <div className='play-content'>
              <div className='score-status'>
                <h3>Guesses:&nbsp;&nbsp; {guesses}</h3>
                <h3>Correct Guesses:&nbsp;&nbsp; {score}</h3>
              </div>
              <Timebar />
              {data ? <CelebCard data={data} /> : <div>Loading...</div>}
              <button
                onClick={() => isDead(data.death)}
                className={wrongDead ? 'wrong' : ''}
              >
                Dead
              </button>
              <button
                onClick={() => isAlive(data.death)}
                className={wrongAlive ? 'wrong' : ''}
              >
                Alive
              </button>
            </div>
          )
        }
      />
    </div>
  )
}

export default GameScreen
