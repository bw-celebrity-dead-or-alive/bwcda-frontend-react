import React from 'react'
import { Link } from 'react-router-dom'
// import App from '../App'
// import LeaderBoard from './LeaderBoard';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <h3>RESET</h3>
      </Link>
      <Link to='/leaderboard'>
        <h3>HALL OF FAME</h3>
      </Link>
    </nav>
  )
}

export default Nav
