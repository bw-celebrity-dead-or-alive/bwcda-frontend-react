import React from 'react'
import Button from './Button'

const LeaderBoard = () => {
  const score = window.localStorage.getItem('HighScore')
  const guess = window.localStorage.getItem('TotalGuesses')

  return (
    <div className='leaderboard-screen'>
      <header className='leaderboard-content'>
        <h1>HALL OF FAME</h1>
        <div className='grid-titles'>
          <h2 className='title-rank'>RANK</h2>
          <h2 className='name-rank'>NAME</h2>
          <h2 className='score-rank'>SCORE</h2>
        </div>
        {/* possibly map through data instead of hardcoding */}
        <div className='grid-container'>
          <h3 className='row1'>1</h3>
          <h3 className='row1'>name1</h3>
          <h3 className='row1'>28</h3>
          <h3 className='row2'>2</h3>
          <h3 className='row2'>name2</h3>
          <h3 className='row2'>24</h3>
          <h3 className='row3'>3</h3>
          <h3 className='row3'>name3</h3>
          <h3 className='row3'>23</h3>
          <h3 className='row4'>4</h3>
          <h3 className='row4'>name4</h3>
          <h3 className='row4'>20</h3>
          <h3 className='row5'>5</h3>
          <h3 className='row5'>name5</h3>
          <h3 className='row5'>19</h3>
          <h3 className='row6'>6</h3>
          <h3 className='row6'>name6</h3>
          <h3 className='row6'>16</h3>
          <h3 className='row7'>7</h3>
          <h3 className='row7'>name7</h3>
          <h3 className='row7'>14</h3>
          <h3 className='row8'>8</h3>
          <h3 className='row8'>name8</h3>
          <h3 className='row8'>13</h3>
          <h3 className='row9'>9</h3>
          <h3 className='row9'>name9</h3>
          <h3 className='row9'>9</h3>
          <h3 className='row10'>10</h3>
          <h3 className='row10'>name10</h3>
          <h3 className='row10'>1</h3>
        </div>
        <h4>Login to save and view your own high scores!</h4>
        <Button buttonText={'LOGIN'} pathName={'login'} />
      </header>
    </div>
  )
}

export default LeaderBoard
