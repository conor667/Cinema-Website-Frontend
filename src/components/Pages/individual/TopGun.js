import React, { useEffect, useState } from "react";
// import Movie from "../MoviesApp";


const FEAT_API = "http://localhost:5500/filmCodeName/topgm";

function TopGun() {
	const [movies, setMovies] = useState([]);


	useEffect(() => {
		fetch(FEAT_API)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMovies(data);
			});
	}, []);



	return (
        <>
        <div className="movie-container-in">
            {movies.length > 0 && 
                movies.map((movie) => (
                    <div className="movie-in">
                        <div className="movie-header"></div>

                        <img src={movie.imageURL} class="imageclassin" alt="img"></img>

                        <div className="movie-details-in">
                            <p className="film-rating-12">{movie.rating}</p>
                            <p className="film-title-in">{movie.filmName}</p>
                            <p className="film-genre">{movie.genre}</p>
                            <p className="film-director"> by {movie.director}</p>
                            <p className="film-description">{movie.longDescription}</p>
                            <p>{movie.length}</p>

                            <btn className="book-button">Book Now</btn> 
                        </div>
                    </div>


                ))}
        </div>
    </>
);
}
export default TopGun;