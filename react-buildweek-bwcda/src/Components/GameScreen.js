//on button press from homescreen, game starts timer for 30 seconds

//first card is displayed

//below that you are given the option to pick dead or alive based on the celeb that is shown(see celeb card for logic)

//will hold - Timebar.js, celebcard.js

//will be pulling data from an api and be pushing that to celebcard.js

//gamescreen will also house the buttons instead of another comp

//funtion above will handle all the choices that handeles the dead or alive answers that will trigger a visual cue

//score tracker will be also held here, will have its own usestate and when the answer is true the score will have a point added to it. will also display current score

import React, { useEffect, useState } from "react";
// import CelebCard from './CelebCard';
// import Timebar from './Timebar';
import axios from "axios";

const GameScreen = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);

  const [img, setImg] = useState('');

  // 1st fetch all the celebs we want 
  // render one after the other to the screen
  // when one is rendered, fetch his image

  //put the use effect in here rather than the cardlist
  useEffect(() => {
    axios
      .get("https://prod-celebrity-dead-alive.herokuapp.com/api/celebrities/")
      .then(e => {
        setData(e.data);
      })
      .catch(err => {
        return "Something isnt working", err;
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://prod-celebrity-dead-alive.herokuapp.com/api/celebrities/picture/${id})}`
      )
      .then(e => {
        setImg(e.data)
      })
      .catch(err => {
        return "Something isnt working", err;
      });
  }, [id]);

  return (
    <div>
      <div>{console.log("data out of the function", data.map(e => e))}</div>
      <div>{/*In here we will have the logo that sits on top on the timer button */}</div>
      <div>{" "}{/* Time Bar will go here and will have a useState that tracks the ending of the time */}{" "}</div>
      <div>{/* CelebCard */}</div>
      <div>{/*Buttons for dead or alive*/}</div>
    </div>
  );
};

export default GameScreen;
