//receives data and styles, mainly a dumb component

import React from "react";

const CelebCard = (props) => {
    return (
        <div>
            <img src={props.data.image_url} />
            <div>{props.data.name}</div>
            <div>{props.data.info}</div>
            <div>{props.data.birth}</div>
        </div>
    )
}

export default CelebCard;