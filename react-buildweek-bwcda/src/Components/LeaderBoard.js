import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from './Button'

const LeaderBoard = () => {
  const [highScores, setHighScores] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    axios
      .get('https://prod-celebrity-dead-alive.herokuapp.com/api/leaderboard/')
      .then((res) => {
        const highScoresArr = res.data
          .sort((a, b) => {
            return b.score - a.score
          })
          .slice(0, 10)
        setHighScores(highScoresArr)
      })
      .catch((err) => {
        console.log('Failed to load leaderboard', err)
      })
  }, [])

  return (
    <div className='leaderboard-screen'>
      {highScores ? (
        <header className='leaderboard-content'>
          <h1>HALL OF FAME</h1>
          <div className='grid-titles'>
            <h2>RANK</h2>
            <h2>NAME</h2>
            <h2>SCORE</h2>
          </div>
          <div className='grid-container'>
            <div className='rank-column'>
              {highScores.map((user, i) => <h3 key={user.id}>{i+1}</h3>)}
            </div>
            <div className='name-column'>
              {highScores.map((person) => (
                <h3 key={person.id}>{person.name}</h3>
              ))}
            </div>
            <div className='score-column'>
              {highScores.map((person) => (
                <h3 key={person.id}>{person.score}</h3>
              ))}
            </div>
            <div />
          </div>
          <h4>Login to save and view your own high scores!</h4>
          <Button buttonText={'LOGIN'} pathName={'login'} />
        </header>
      ) : (
        <div>Loading Scores...</div>
      )}
    </div>
  )
}

export default LeaderBoard
