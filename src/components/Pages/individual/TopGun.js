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
        <div className="movie-container">
            {movies.length > 0 && 
                movies.map((movie) => (
                    <div className="movie">
                        <div className="movie-header"></div>

                        <img src={movie.imageURL} class="imageclassin" alt="img"></img>

                        <div className="movie-details">
                            <p className="film-title">{movie.filmName}</p>
                            <p>{movie.genre}</p>
                            <p>{movie.director}</p>
                            <p>{movie.rating}</p>
                            <p>{movie.longDescription}</p>
                            <p>{movie.length}</p>

                            <btn>Book Now</btn>
                        </div>

                        <div className="movie-actions-in"></div>
                    </div>
                ))}
        </div>
    </>
);
}
export default TopGun;