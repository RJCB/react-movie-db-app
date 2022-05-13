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
	const [filter, setFilter] = useState('ta');

	useEffect(() => {
		setLoading(true);
		const trendingList = async () => {
			let res = await fetchTrending('all');
			setTrending(res);
			setLoading(false);
		}
		trendingList();
	}, [])

	const handleTrending = async (value) => {
		setSearchTerm('');
		setLoading(true);
		const mediaType = value.split('-')[1];
		const filterVal = value.split('-')[0];
		setFilter(filterVal);
		const res = await fetchTrending(mediaType);
		setTrending(res);
		setshowTrending(true);
		setLoading(false);
	}

	const handlePopular = async (value) => {
		setSearchTerm('');
		setLoading(true);
		const mediaType = value.split('-')[1];
		const filterVal = value.split('-')[0];
		setFilter(filterVal);
		const res = await fetchPopular(mediaType);
		setPopular(res);
		setshowTrending(false);
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

	return (
		<div className="homepage">
			<keywordResultsContext.Provider value={{ handleInputSearch: handleInputSearch }}><Hero /></keywordResultsContext.Provider>
			{/* {searchTerm ? <Grids heading="Search results"/> :
				<> */}
			<div>
				<button value="ta-all" className={setBtnActive('ta') ? 'active' : ''} onClick={(e) => handleTrending(e.target.value)}>All Trending</button>
				<button value="tm-movie" className={setBtnActive('tm') ? 'active' : ''} onClick={(e) => handleTrending(e.target.value)}>Trending movies</button>
				<button value="ttv-tv" className={setBtnActive('ttv') ? 'active' : ''} onClick={(e) => handleTrending(e.target.value)}>Trending Tv</button>
				<button value="pm-movie" className={setBtnActive('pm') ? 'active' : ''} onClick={(e) => handlePopular(e.target.value)}>Popular movies</button>
				<button value="ptv-tv" className={setBtnActive('ptv') ? 'active' : ''} onClick={(e) => handlePopular(e.target.value)}>Popular Tv</button>
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