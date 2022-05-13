import React, { createContext, useContext, useEffect, useState } from 'react'
import { SearchTermContext } from '../App';
import Grids from '../components/Grids'
import Hero from '../components/Hero'
import { fetchTrending, fetchPopular, fetchBySearch } from '../API';
import Spinner from '../components/Spinner';

export const keywordResultsContext = createContext();

const Home = () => {
	const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
	const [trending, setTrending] = useState([]);
	const [popular, setPopular] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [loading, setLoading] = useState(false);
	const [showTrending, setshowTrending] = useState(true);

	useEffect(() => {
		setLoading(true);
		const trendingList = async () => {
			let res = await fetchTrending('movie');
			setTrending(res);
			setLoading(false);
		}
		trendingList();
	}, [])

	const handleTrending = async (value) => {
		setSearchTerm('');
		setLoading(true);
		const mediaType = value.split('-')[1];
		const res = await fetchTrending(mediaType);
		setTrending(res);
		setshowTrending(true);
		setLoading(false);
	}

	const handlePopular = async (value) => {
		setSearchTerm('');
		setLoading(true);
		const mediaType = value.split('-')[1];
		const res = await fetchPopular(mediaType);
		setPopular(res);
		setshowTrending(false);
		setLoading(false);
	}

	const handleInputSearch = async () => {
		setLoading(true);
		const res = await fetchBySearch(searchTerm);
		setSearchResults(res);
		setLoading(false);
	}

	return (
		<div className="homepage">
			<keywordResultsContext.Provider value={{ handleInputSearch: handleInputSearch }}><Hero /></keywordResultsContext.Provider>
			{/* {searchTerm ? <Grids heading="Search results"/> :
				<> */}
			<div>
				<button value="trending-all" onClick={(e) => handleTrending(e.target.value)}>All Trending</button>
				<button value="trending-movie" onClick={(e) => handleTrending(e.target.value)}>Trending movies</button>
				<button value="trending-tv" onClick={(e) => handleTrending(e.target.value)}>Trending Tv</button>
				<button value="Popular-movie" onClick={(e) => handlePopular(e.target.value)}>Popular movies</button>
				<button value="Popular-tv" onClick={(e) => handlePopular(e.target.value)}>Popular Tv</button>
			</div>
			{(searchResults.length > 0 && !loading) ? <Grids items={searchResults} /> : <Spinner />}
			{/* {showTrending ?
				<>{(trending.length > 0 && !loading) ? <Grids items={trending} /> : <Spinner />}</> :
				<>{(popular.length > 0 && !loading) ? <Grids items={popular} /> : <Spinner />}</>
			} */}
		</div>
	)
}
//idea is we render grids for popular and trending movies/tvshows by maintaining the state here. We add a state variable whenever searchTerm(mayebe context) is available we set it to true and hide the popular and trending, when its false we just the results.
//for trending implement a toggle button, movies and tv, same state
export default Home