//receives data and styles, mainly a dumb component

import React from "react";

const CelebCard = (props) => {
    return (
        <div>
            <img src={props.data.image_url} />
            <p>{props.data.name}</p>
            <p>{props.data.info}</p>
            <p>{props.data.birth}</p>
        </div>
    )
}

export default CelebCard;