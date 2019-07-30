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
  const [data, setData] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);
  const [id, setId] = useState(0);

  // 1st fetch all the celebs we want 
  // render one after the other to the screen
  // when one is rendered, fetch his image
  //put the use effect in here rather than the cardlist

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

  const SetCurrentCard = (id) => {
    setCurrentCard(currentCard[id])
  }

  const isAlive = (aliveCheck) => {
    if(deathCheck > 0){
      //If this is true then the person is dead and score is added
    } else {
      //If the death date is less than 0 then that person is dead and 
    }
  }

   const isDead = (deathCheck) => {
     if (deathCheck > 0) {
       //If this is true then the person is dead and score is added
     } else {
       //If the death date is less than 0 then that person is dead and 
     }
   }
  
  return (
    <div>   
      <div>{console.log("data out of the function", data.map(e => e.name))}</div>
      {SetCurrentCard(id)}
      <CelebCard data={currentCard} />
      {/* <div>{console.log(data.filter(e => e))}<div/> */}

      <div>{/*In here we will have the logo that sits on top on the timer button */}</div>
      <div>{" "}{/* Time Bar will go here and will have a useState that tracks the ending of the time */}{" "}</div>
      <div>{/* CelebCard */}</div>
      <div>{/*Buttons for dead or alive*/}</div>

      <button onClick={()=> isDead(currentCard.death)}></button>
      <button onClick={()=> isAlive(currentCard.death)}></button>

      <h2>Holding</h2>
        <img src={img} alt="Testing"/>
        <button onClick={() => setId(id + 1)}>+1</button>
        {/* <button onClick={() => setId(id + 1)}><h2>{data.map(e => e.name[id])}</h2></button> */}
        {/*button above is printing some crazy stuff.*/} 
      {console.log('data[id]', data[id])}
      <Timebar />
      </div>
  );
};

export default GameScreen;
