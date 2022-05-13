import React, { useContext, useState } from "react";
import { fetchByKeyword } from "../API";
import { SearchTermContext } from "../App";
import { keywordResultsContext } from "../pages/Home";

const SearchBar = () => {
    const { setSearchTerm } = useContext(SearchTermContext);
    const { handleInputSearch } = useContext(keywordResultsContext);

    const handleClick = () => {
        handleInputSearch();
    }
    const handleKeyDown = (e) => {
        if (e.which === 13) {
            handleClick()
        } return;
    }
    return (
        <div className="searchbar">
            <input type="text" name="search" id="searchBar" placeholder="Search for a movie,tv show ..."
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)} />
            <button onClick={handleClick}><span>Search</span></button>
        </div>
    )
}

export default SearchBar;