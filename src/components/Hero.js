import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-headings">
                    <h1>Welcome.</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                </div>
                <SearchBar />
            </div>
        </div>
    )
}

export default Hero;