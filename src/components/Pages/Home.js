// import React from "react";
import "./Home.css"
import ImageSlider from "./Images/ImageSlider";
import { SliderData } from './Images/SliderData';
import React, { useEffect, useState } from "react";

const FEAT_API = "http://localhost:5500/newfilm/true";

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
		fetch(FEAT_API)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMovies(data);
			});
	}, []);

    return(
    <div>
        <h1> FEATURED </h1>
        
        <ImageSlider slides={SliderData} />
        
       
        <h1>WHAT'S ON</h1>

        
        <div className="home-film-container">
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
                             <a href={movie.pageURL}>More Info</a>
                
							</div>

							<div className="movie-actions"></div>
                            
						</div>
					))}
                    {/* <HomePageImages /> */}
			</div>

            </div>
    </div>
    )
}

export default Home;
