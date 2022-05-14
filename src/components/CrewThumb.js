import React from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from "../constants";
import noImage from "../images/no_image.jpeg";

const CrewThumb = ({ job, character, name, img }) => {
    return (
        <div className="thumb">
            <img src={img ? `${IMAGE_BASE_URL}${POSTER_SIZE}${img}` : `${noImage}`} alt={name} />
            <div>
                <p className="thumb-name">{name}</p>
                <p className="thumb-role">{job ? job : character}</p>
            </div>
        </div>
    )
}

export default CrewThumb