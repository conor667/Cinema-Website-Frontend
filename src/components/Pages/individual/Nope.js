import React, { useEffect, useState } from "react";


const FEAT_API_NOPE = "http://localhost:5500/filmCodeName/nope1";

function Nope() {
	const [movies, setMovies] = useState([]);


	useEffect(() => {
		fetch(FEAT_API_NOPE)
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
export default Nope;