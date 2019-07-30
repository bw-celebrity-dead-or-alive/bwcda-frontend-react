import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './Components/Nav'
import StartScreen from './Components/StartScreen';
import GameScreen from './Components/GameScreen'
import EndingScreen from './Components/EndingScreen'
import Err404 from './Components/Err404'
import '../src/scss/App.scss'

export default function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route exact path='/' component={StartScreen} />
        <Route path='/play' component={GameScreen} />
        <Route path='/end' component={EndingScreen} />
        <Route component={Err404} />
      </Switch>
    </div>
  )
}
