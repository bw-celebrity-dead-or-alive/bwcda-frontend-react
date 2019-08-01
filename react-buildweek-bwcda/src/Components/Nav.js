import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to='/'>HOME</Link>
      <Link to='/userscores'>MY SCORES</Link>
      <Link to='/leaderboard'>HALL OF FAME</Link>
    </nav>
  )
}

export default Nav
