import React, { useEffect, useState } from "react";
// import Movie from "../MoviesApp";


const FEAT_API = "http://localhost:5500/filmCodeName/drstr";

function DrStr() {
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
export default DrStr;
