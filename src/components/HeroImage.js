import React from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../constants';

const HeroImage = ({ backdropPath, children }) => {
    return (
        <div className="heroimage" style={{ backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdropPath})` }}>
            <div className="heroimage_customBg">{children}</div>
        </div>
    )
}

export default HeroImage