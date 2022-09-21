import React, { useEffect, useState } from "react";
import "./Movie.css";

const FEAT_API = "http://localhost:5500/movie";
const SEARCH_API = "http://localhost:5500/movie?";

function MovieApp() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		fetch(FEAT_API)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMovies(data);
			});
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();

		fetch(SEARCH_API + searchTerm)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				movies(data);
			});
	};

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<header>
				<form onSubmit={handleOnSubmit}>
					<input className="search" type="text" placeholder="Search ..." value={searchTerm} onChange={handleOnChange} />
				</form>
			</header>

			<div className="movie-container">
				{movies.length > 0 &&
					movies.map((movie) => (
						<div className="movie">
							<div className="movie-header"></div>

							<img src={movie.imageURL} alt="img"></img>

							<div className="movie-details">
								<p className="film-title">{movie.filmName}</p>
								<p>{movie.genre}</p>
								<p>{movie.rating}</p>
							</div>

							<div className="movie-over">
								<h2> Overview: </h2>
								<p>{movie.description}</p>
							</div>

							<div className="movie-actions"></div>
						</div>
					))}
			</div>
		</>
	);
}

export default MovieApp;
