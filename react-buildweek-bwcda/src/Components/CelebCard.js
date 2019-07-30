//receives data and styles, mainly a dumb component

import React from "react";

const CelebCard = (props) => {
    return (
        <div>
            <div>{props.data.id}</div>
            <div>{props.data.name}</div>
            <div>{props.data.info}</div>
            <div>{props.data.image_url}</div>
            <div>{props.data.birth}</div>
            <div>{props.data.death}</div>
        </div>
    )
}
