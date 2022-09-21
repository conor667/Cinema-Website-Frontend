import React from "react";

const IMAGE_API = "http://localhost:5500/movie";

const Movie = ({filmName, imageURL}) => 
    <div className="movie">
        <img src={IMAGE_API + imageURL} alt={filmName}/>
        
        <div className="movie-over">
            <h2> Overview: </h2>
        </div>
    </div>;
;

export default Movie;
