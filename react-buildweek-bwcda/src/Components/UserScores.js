import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from './Button'

const UserScores = () => {
  const [userGames, setUserGames] = useState([])
  const [playerId, setPlayerId] = useState(5)

  useEffect(() => {
    axios
      .get(`https://prod-celebrity-dead-alive.herokuapp.com/api/players/${playerId}/scores`)
      .then((res) => {
        // console.log(res)
        const userGamesArr = res.data
        .sort((a, b) => {
          return b.score - a.score
        })
        .slice(0, 10)
        setUserGames(userGamesArr)
      })
      .catch((err) => {
        return `Failed to load user's high scores`, err
      })
    }, [])

  return (
    <div className='userscores-screen'>
      <header className='userscores-content'>
        <h1>HALL OF FAME</h1>
        <h2>{userGames.map(e=>e.name)[0]}</h2>
        <div className='grid-titles'>
          <h2>RANK</h2>
          <h2>SCORE</h2>
          <h2>DATE</h2>
        </div>
        <div className='grid-container'>
          <div className='rank-column'>
            {userGames.map((user, i) => <h3 key={user.id}>{i+1}</h3>)}
          </div>
          <div className='score-column'>
            {userGames.map((user) => (
              <h3 key={user.id}>{user.score}</h3>
            ))}
          </div>
          <div className='date-column'>
            {userGames.map((user) => (
              <h3 key={user.id}>{user.created_at.slice(0,10)}</h3>
            ))}
          </div>
          <div />
        </div>
        <h4>Play again to beat your own high score!</h4>
        <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
      </header>
    </div>
  )
}

export default UserScores
