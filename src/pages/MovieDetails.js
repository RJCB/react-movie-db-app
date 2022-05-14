import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchById, fetchCredits } from '../API';
import CrewThumb from '../components/CrewThumb';
import HeroImage from '../components/HeroImage';
import Spinner from '../components/Spinner';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../constants';

const MovieDetails = () => {
	const { mediaType, mediaId } = useParams();
	const [movieDetails, setMovieDetails] = useState([]);
	const [movieCredits, setMovieCredits] = useState([]);
	const [loading, setLoading] = useState(false);
	const { id,
		backdrop_path, poster_path,
		original_title, title,
		name, original_name,
		overview,
		first_air_date, release_date,
		runtime, tagline,
		vote_average, genres } = movieDetails;

	useEffect(() => {
		setLoading(true);
		const fetchMovieDetails = async () => {
			const res = await fetchById(mediaType, mediaId);
			const creditsRes = await fetchCredits(mediaType, mediaId);
			setMovieDetails(res);
			setMovieCredits(creditsRes);
			setLoading(false);
		}
		fetchMovieDetails();
	}, [mediaId, mediaType]);

	const getDirector = () => {
		const element = movieCredits.crew?.filter(credit => (credit.job === 'Director')).map(director => {
			return <CrewThumb key={director.id} job={director.job} name={director.name || director.original_name} img={director.profile_path} />;
		})
		return element.length > 0 ? element : <p>No crew to show</p>;
	}

	const getActors = () => {
		const element = movieCredits.cast?.map(cast => {
			return <CrewThumb key={id} character={cast.character} name={cast.name || cast.original_name} img={cast.profile_path} />;
		})
		return element.length > 0 ? element : <p>No cast to show</p>;
	}
	return (
		<div className="details">
			<HeroImage backdropPath={backdrop_path}>
				{movieDetails.length !== 0 && !loading ?
					<>
						<div className="details_card">
							<div className="details_card-left">
								<img className="details_card-image" src={`${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`} alt={title} />
							</div>
							<div className="details_card-right">
								<h1>{name || original_name || title || original_title}</h1>
								{genres && <div className="details_card-right-genres">
									{genres.map((genre) => {
										return <span key={genre.id}>{genre.name}</span>
									})}
								</div>
								}
								<p><span>{release_date || first_air_date} {runtime ? `| ${runtime} min` : ''}</span></p>
								<p className="details_card-right-userscore">User Score: <span>{vote_average}</span></p>
								<p className="details_card-right-tagline"><em>{tagline}</em></p>
								<p className="details_card-right-overview">Overview</p>
								<p>{overview}</p>
							</div>
						</div>
						<div className="crew">
							<h2>Crew</h2>
							{movieCredits && getDirector()}
						</div>

						<div className="cast">
							<h2>Cast</h2>
							<div className="cast-thumbs">
								{movieCredits && getActors()}
							</div>
						</div>
					</>
					:
					<Spinner />
				}
			</HeroImage>
		</div >
	)
}

export default MovieDetails