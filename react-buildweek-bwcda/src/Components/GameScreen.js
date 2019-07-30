//Figure out the Logic for randomizing the array of data celebs

import React, { useEffect, useState } from "react";
import CelebCard from './CelebCard';
import Timebar from './Timebar';
import axios from "axios";

import { Redirect, Route } from 'react-router-dom'
import logo from '../logo.svg'

const GameScreen = () => {
  //This fetches the list of celebs
  const [data, setData] = useState();
  //This works with SetCurrentCard to identify the current ID needed to be passed
  const [id, setId] = useState(0);
  //Keeps track of Score and resets to zero after game ends.
  const [score, setScore] = useState(0)
  //sets the state of the timer
  const [time, setTime] = useState(false)

  //Grabs Data from API
  useEffect(() => {
    axios
      .get(`https://prod-celebrity-dead-alive.herokuapp.com/api/celebrities/${id}`)
      .then(e => {
        setData(e.data);
      })
      .catch(err => {
        return ("Something isnt working", err);
      });
  }, [id]);

  //Checks for death case on Click
  const isDead = (deathCheck) => {
    if (deathCheck > 0) {
      //true case, reward one point
      setScore(score + 1)
    }
    //move to next card
    setId(id + 1)
  }

  //Checks for Alive case on Click
  const isAlive = (aliveCheck) => {
    if (aliveCheck === 0) {
      //true case, reward one point
      setScore(score + 1)
    }
    //move to next card
    setId(id + 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => setTime(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (

    <div>
      <Route path="/play" render={() => (
        time ? (
          <Redirect to="/end" props={score} />
        ) : (
            <div>
              <img src={logo} className='App-logo' alt='logo' />
              <h1>Guesses:{id}</h1>
              <h1>Score:{score}</h1>

              <div>{/*In here we will have the logo that sits on top on the timer button */}</div>
              <div>{" "}{/* Time Bar will go here and will have a useState that tracks the ending of the time */}{" "}</div>

              {data ? <CelebCard data={data} /> : <div>Loading...</div>}

              <button onClick={() => isDead(data.death)}>Dead</button>
              <button onClick={() => isAlive(data.death)}>Alive</button>

              <Timebar />
            </div>
          )
      )} />
    </div>
  );
};

export default GameScreen;