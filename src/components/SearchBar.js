import React, { useContext } from "react";
import { SearchTermContext } from "../App";
import { keywordResultsContext } from "../pages/Home";

const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
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
                onKeyDown={(e) => handleKeyDown(e)}
                value={searchTerm} />
            <button onClick={handleClick}><span>Search</span></button>
        </div>
    )
}

export default SearchBar;