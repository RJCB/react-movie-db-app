import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchTermContext } from "../App";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../constants";
import noImage from "../images/no_image.jpeg";

const Thumb = ({ mediaType, item }) => {
    const { id, title, media_type, original_name, vote_average, release_date, poster_path, first_air_date } = item || {};
    const { setSearchTerm } = useContext(SearchTermContext);
    const history = useNavigate();

    const handleThumbClick = () => {
        setSearchTerm('');
        history(`details/${media_type ? media_type : mediaType}/${id}`);
    }

    return (
        <>
            <div className="thumb" onClick={handleThumbClick}>
                <img src={poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}` : `${noImage}`} alt={title} />
                <h4 className="thumb_title">{title ? title : original_name}</h4>
                <div className="thumb_avg_date">
                    <p className="thumb_avg">Rating: <span>{vote_average}</span></p>
                    <p className="thumb_date">{release_date ? release_date : first_air_date}</p>
                </div>
            </div>
        </>
    )
}

export default Thumb;