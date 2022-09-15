import React from "react";
import "./HomePageImages.css"
import { HomeImageData } from './HomeImageData';

function HomePageImages(){

    let num = Math.floor(Math.random() * 8);
    const pic = HomeImageData[num]

    return(
        <div className="filmcontainer">
            <div className="filmpics">
                <div>
                    <img  src="https://www.themoviedb.org/t/p/original/bk9GVjN4kxmGekswNigaa5YIdr5.jpg" />
                        <div className="desc"> <sub>Alien </sub></div> 
                </div>
            <div>
                <img  src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg" />
                    <div className="desc"> <sub>Ironman</sub></div> 
                </div>
            <div>
                    <img  src="https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"/>
                    <div className="desc"> <sub>The Lighthouse</sub> </div> 
            </div>
            <div>
                <img  src="https://m.media-amazon.com/images/I/81XjzlJ364L._AC_SL1500_.jpg" />
                    <div className="desc"> <sub>Coraline</sub> </div> 
            </div>
            <div>
        </div>
        </div>
    <a className="btn--movies" href="/Movies"> All Movies</a>
    <p className="spacehome"> &#8205; </p>
</div>
    )
}

export default HomePageImages;