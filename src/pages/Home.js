import React, { createContext, useContext, useEffect, useState } from 'react'
import { SearchTermContext } from '../App';
import Grids from '../components/Grids'
import Hero from '../components/Hero'
import { fetchTrending, fetchPopular, fetchBySearch } from '../API';
import Spinner from '../components/Spinner';

export const keywordResultsContext = createContext();

const Home = () => {
	const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
	const [trending, setTrendingResults] = useState([]);
	const [popular, setPopularResults] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showTrending, setShowTrending] = useState(true);
	const [filter, setFilter] = useState('ta');

	useEffect(() => {
		setLoading(true);
		const trendingList = async () => {
			let res = await fetchTrending('all');
			setTrendingResults(res);
			setLoading(false);
		}
		trendingList();
	}, [])

	const handleTrending = async (value) => {
		setSearchTerm('');
		if (searchResults) setSearchResults([]);
		setLoading(true);
		const mediaType = value.split('-')[1];
		const filterVal = value.split('-')[0];
		setFilter(filterVal);
		const res = await fetchTrending(mediaType);
		setTrendingResults(res);
		setShowTrending(true);
		setLoading(false);
	}

	const handlePopular = async (value) => {
		setSearchTerm('');
		if (searchResults) setSearchResults([]);
		setLoading(true);
		const mediaType = value.split('-')[1];
		const filterVal = value.split('-')[0];
		setFilter(filterVal);
		const res = await fetchPopular(mediaType);
		setPopularResults(res);
		setShowTrending(false);
		setLoading(false);
	}

	const handleInputSearch = async () => {
		setFilter('');
		setLoading(true);
		const res = await fetchBySearch(searchTerm);
		setSearchResults(res);
		setLoading(false);
	}

	const setBtnActive = (e) => {
		return e === filter;
	}

	const renderResults = () => {
		if (searchResults.length > 0) {
			return <Grids items={searchResults} />
		} else if (trending.length > 0 && showTrending) {
			return <Grids items={trending} heading={"What's Trending"} />
		} else if (popular.length > 0) {
			return <Grids items={popular} heading={"What's Popular"} />
		}
	}

	return (
		<div className="homepage">
			<keywordResultsContext.Provider value={{ handleInputSearch: handleInputSearch }}><Hero /></keywordResultsContext.Provider>
			<div className="homepage_filter-btns">
				<button value="ta-all" className={setBtnActive('ta') ? 'active' : ''} onClick={(e) => handleTrending(e.target.value)}>All Trending</button>
				<button value="tm-movie" className={setBtnActive('tm') ? 'active' : ''} onClick={(e) => handleTrending(e.target.value)}>Trending Movies</button>
				<button value="ttv-tv" className={setBtnActive('ttv') ? 'active' : ''} onClick={(e) => handleTrending(e.target.value)}>Trending TV</button>
				<button value="pm-movie" className={setBtnActive('pm') ? 'active' : ''} onClick={(e) => handlePopular(e.target.value)}>Popular Movies</button>
				<button value="ptv-tv" className={setBtnActive('ptv') ? 'active' : ''} onClick={(e) => handlePopular(e.target.value)}>Popular TV</button>
			</div>
			{loading && <Spinner />}
			{!loading && renderResults()}
		</div>
	)
}
export default Home