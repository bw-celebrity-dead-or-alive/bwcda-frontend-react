import React, { useEffect, useState } from "react";
import CelebCard from './CelebCard';
import Timebar from './Timebar';
import axios from "axios";

import EndingScreen from './EndingScreen'
import { Redirect, Route } from 'react-router-dom'


const GameScreen = () => {
  //This fetches the list of celebs
  const [data, setData] = useState([]);
  //This works with SetCurrentCard to identify the current ID needed to be passed
  const [id, setId] = useState(0);
  //Keeps track of Score and resets to zero after game ends.
  const [score, setScore] = useState(0)



  const [state, setState] = useState(false)

  //Grabs Data from API
  useEffect(() => {
    axios
      .get("https://prod-celebrity-dead-alive.herokuapp.com/api/celebrities/?page=1,limit=14")
      .then(e => {
        setData(e.data);
      })
      .catch(err => {
        return ("Something isnt working", err);
      });
  }, []);

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

  // return (<Link to='/end' ></Link>)


  // const timeOut = () => {
  //   setTimeout(() => {
  //     console.log('is this working')
  //   }, 3000)




  useEffect(() => {
    const timer = setTimeout(() => setState(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (

    <div>
      <Route path="/play" render={() => (
        state ? (
          <Redirect to="/" />
        ) : (
            <div>
              <div>{/*In here we will have the logo that sits on top on the timer button */}</div>
              <div>{" "}{/* Time Bar will go here and will have a useState that tracks the ending of the time */}{" "}</div>

              {data[id] ? <CelebCard data={data[id]} /> : <div>Loading...</div>}

              <button onClick={() => isDead(data[id].death)}>Dead</button>
              <button onClick={() => isAlive(data[id].death)}>Alive</button>

              <Timebar />
            </div>
          )
      )} />







    </div>


  );
};

export default GameScreen;