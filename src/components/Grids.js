import React from "react";
import Thumb from "./Thumb";

const Grids = ({ heading, items }) => {
    const thumbElements = items?.map((item) => {
        return <Thumb key={item.id} item={item} />
    });
    return (
        <div className="grid-section">
            <h3>{heading}</h3>
            {/* <h3>What's Popular</h3> */}
            <div className="thumbs">
                {thumbElements}
            </div>
        </div>
    )
}

export default Grids;