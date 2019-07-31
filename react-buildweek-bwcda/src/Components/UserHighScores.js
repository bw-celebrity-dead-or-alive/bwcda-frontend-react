import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from './Button'

const UserHighScores = () => {
  const [userScores, setUserScores] = useState([])

  // useEffect(() => {
  //   axios
  //     .get('https://prod-celebrity-dead-alive.herokuapp.com/api/leaderboard/')
  //     .then((res) => {
  //       const highScoresArr = res.data
  //         .sort((a, b) => {
  //           return b.score - a.score
  //         })
  //         .slice(0, 10)
  //       setHighScores(highScoresArr)
  //     })
  //     .catch((err) => {
  //       return `Failed to load user's high scores`, err
  //     })
  // }, [])

  return (
    <div className='userscores-screen'>
      <header className='userscores-content'>
        <h1>HALL OF FAME</h1>
        <h3>USERNAME to be live data</h3>
        <div className='grid-titles'>
          <h2 className='title-rank'>RANK</h2>
          <h2 className='name-rank'>NAME</h2>
          <h2 className='score-rank'>SCORE</h2>
        </div>
        <div className='grid-container'>
          <div className='rank-column'>
            <h3 className='row1'>1</h3>
            <h3 className='row2'>2</h3>
            <h3 className='row3'>3</h3>
            <h3 className='row4'>4</h3>
            <h3 className='row5'>5</h3>
            <h3 className='row6'>6</h3>
            <h3 className='row7'>7</h3>
            <h3 className='row8'>8</h3>
            <h3 className='row9'>9</h3>
            <h3 className='row10'>10</h3>
          </div>
          {/* <div className='name-column'>
            {userScores.map((person) => (
              <h3 key={person.id}>{`${person.firstName} ${
                person.lastName
              }`}</h3>
            ))}
          </div> */}
          {/* <div className='score-column'>
            {userScores.map((person) => (
              <h3 key={person.id}>{person.score}</h3>
            ))}
          </div> */}
          <div />
        </div>
        <h4>Plaay again to beat your own high score!</h4>
        <Button buttonText={'PLAY AGAIN'} pathName={'play'} />
      </header>
    </div>
  )
}

export default UserHighScores
