import React from "react";
import Thumb from "./Thumb";

const Grids = ({ heading, mediaType, items }) => {
    const thumbElements = items?.map((item) => {
        return <Thumb key={item.id} item={item} mediaType={mediaType} />
    });
    return (
        <div className="grid-section">
            <h3>{heading}</h3>
            <div className="thumbs">
                {thumbElements}
            </div>
        </div>
    )
}

export default Grids;