import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchById } from '../API';
import HeroImage from '../components/HeroImage';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../constants';

const MovieDetails = () => {
	const { mediaType, movieId } = useParams();
	const [movieDetails, setMovieDetails] = useState([]);
	const [loading, setLoading] = useState(false);
	const { id, backdrop_path, media_type, original_title, overview, poster_path, release_date, runtime, tagline, title, vote_average, vote_count } = movieDetails;

	useEffect(() => {
		setLoading(true);
		const fetchMovieDetails = async () => {
			const res = await fetchById(mediaType, movieId);
			console.log(res);
			setMovieDetails(res);
			setLoading(false);
		}
		fetchMovieDetails();
	}, [movieId, mediaType]);
	return (
		<div className="details">
			<HeroImage backdropPath={backdrop_path}>
				<div className="details_card">
					<div className="details_card-left">
						<img className="details_card-image" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`} alt={title} />
					</div>
					<div className="details_card-right">
						<h1>{title ? title : original_title}</h1>
						<p><span>{release_date} {runtime}min</span></p>
						<p>User Score: {vote_average}</p>
						<p><em>{tagline}</em></p>
						<h2>Overview</h2>
						<p>{overview}</p>
					</div>
				</div>
			</HeroImage>
		</div>
	)
}

export default MovieDetails