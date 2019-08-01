import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from './Button'

const LeaderBoard = () => {
  const [highScores, setHighScores] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    axios
      .get(
        'https://prod-celebrity-dead-alive.herokuapp.com/api/leaderboard/?page=1&limit=10'
      )
      .then((res) => {
        const highScoresArr = res.data
        setHighScores(highScoresArr)
      })
      .catch((err) => {
        console.log('Failed to load leaderboard', err)
      })
  }, [])

  let isNameHere = window.localStorage.getItem("SignUpCred") || ""

  return (
    <>
      {highScores ? (
        <div className='leaderboard-screen'>
          <h1>HALL OF FAME</h1>
          <div className='grid-titles'>
            <h2>RANK</h2>
            <h2>NAME</h2>
            <h2>SCORE</h2>
          </div>
          <div className='grid-container'>
            <div className='grid-column'>
              {highScores.map((user, i) => (
                <h3 key={user.id}>{i + 1}</h3>
              ))}
            </div>
            <div className='grid-column'>
              {highScores.map((person) => (
                <h3 key={person.id}>{person.name}</h3>
              ))}
            </div>
            <div className='grid-column'>
              {highScores.map((person) => (
                <h3 key={person.id}>{person.score}</h3>
              ))}
            </div>
            <div />
          </div>
          {isNameHere === "" ?
            (<div>
              <h4>Login to save and view your own high scores!</h4>
              <Button buttonText={'LOGIN'} pathName={'login'} />
            </div>) : <div>
              <h4>Play again to beat the high score!</h4>
              <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
            </div>
          }

        </div>
      ) : (
          <div>Loading Scores...</div>
        )}
    </>
  )
}

export default LeaderBoard
