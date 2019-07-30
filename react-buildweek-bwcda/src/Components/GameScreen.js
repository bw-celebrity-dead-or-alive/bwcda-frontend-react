//on button press from homescreen, game starts timer for 30 seconds

//first card is displayed

//below that you are given the option to pick dead or alive based on the celeb that is shown(see celeb card for logic)

//will hold - Timebar.js, celebcard.js

//will be pulling data from an api and be pushing that to celebcard.js

//gamescreen will also house the buttons instead of another comp

//funtion above will handle all the choices that handeles the dead or alive answers that will trigger a visual cue

//score tracker will be also held here, will have its own usestate and when the answer is true the score will have a point added to it. will also display current score

import React, { useEffect, useState } from "react";
import CelebCard from './CelebCard';
import Timebar from './Timebar';
import axios from "axios";

const GameScreen = () => {
  //This fetches the list of celebs
  const [data, setData] = useState([]);
  //This works with ID useState to set the current celebCard to be passed
  const [currentCard, setCurrentCard] = useState(data);
  //This works with SetCurrentCard to identify the current ID needed to be passed
  const [id, setId] = useState(0);
  //Keeps track of Score and resets to zero after game ends.
  const [score, setScore] = useState(0)

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

  const setCard = (e) => {
    setCurrentCard(currentCard[e])
  }

  return (
    <div>
      <div>{/*In here we will have the logo that sits on top on the timer button */}</div>
      <div>{" "}{/* Time Bar will go here and will have a useState that tracks the ending of the time */}{" "}</div>

      <CelebCard data={setCard(id)} />

      <button onClick={() => isDead(currentCard.death)}></button>
      <button onClick={() => isAlive(currentCard.death)}></button>

      <Timebar />
    </div>
  );
};

export default GameScreen;