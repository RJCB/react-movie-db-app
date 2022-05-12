import React, { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="searchbar">
            <input type="text" name="search" id="searchBar" placeholder="Search for a movie,tv show ..." onChange={(e) => setSearchTerm(e.target.value)} />
            <button><span>Search</span></button>
        </div>
    )
}

export default SearchBar;