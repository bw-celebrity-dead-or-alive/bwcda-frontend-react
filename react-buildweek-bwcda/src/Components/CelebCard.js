//receives data and styles, mainly a dumb component

import React from "react";

const CelebCard = (props) => {
    return (
        <div className='celeb-card'>
            <img src={props.data.image_url} />
            <h3>{props.data.name}</h3>
            <h4>{props.data.info}</h4>
            <h5>Birth Year: {props.data.birth}</h5>
        </div>
    )
}

export default CelebCard;
