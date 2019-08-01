//receives data and styles, mainly a dumb component

import React from 'react'



//trying to itterate over img/h3/h4 below and toggle a class that would trigger an animation
//code abov does not work


const CelebCard = (props) => {
  return (
    <div className='celeb-card'>
      <img src={props.data.image_url} alt={props.data.name}/>
      <h3>{props.data.name}</h3>
      <h4>{props.data.info}</h4>
      <h4>Birth Year: {props.data.birth}</h4>
    </div>
  )
}

export default CelebCard
