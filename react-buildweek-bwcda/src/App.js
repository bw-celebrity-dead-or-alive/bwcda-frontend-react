import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import StartScreen from './Components/StartScreen'
import GameScreen from './Components/GameScreen'
import EndingScreen from './Components/EndingScreen'
import Login from './Components/Login'
import Err404 from './Components/Err404'
import logo from './logo.svg'
import '../src/scss/App.scss'

export default function App() {
  return (
    <div className='App'>
      <Nav />
      <div className='content'>
        <img src={logo} className='App-logo' alt='logo' />
        <Switch>
          <Route exact path='/' component={StartScreen} />
          <Route path='/play' component={GameScreen} />
          <Route path='/end' component={EndingScreen} />
          <Route path='/login' component={Login} />
          <Route component={Err404} />
        </Switch>
      </div>
    </div>
  )
}
