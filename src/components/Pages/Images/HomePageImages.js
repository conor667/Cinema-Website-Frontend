import React from "react";
import "./HomePageImages.css"

function HomePageImages(){
    return(
        <div className="filmcontainer">
        <div className="filmpics">
        <img  src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" />
                <div className="desc"> Description </div> 
        <img  src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" />
                <div className="desc"> Description </div> 
        <img  src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" />
                <div className="desc"> Description </div>
        <img  src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" />
                <div className="desc"> Description </div>
        </div>
        <br/>
        <a className="btn--movies" href="/Movies"> All Movies</a>
    </div>
    )
}

export default HomePageImages;