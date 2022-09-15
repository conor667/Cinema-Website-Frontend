import React from "react";
import "./Lighthouse.css"

function Lighthouse(){
    return(
        <div className="filmWrapper">
        <h1>The Lighthouse</h1>
        <img className="lighthousepic" src="https://media.gq-magazine.co.uk/photos/5e170a023720d40008ec3c55/master/pass/20200109-Ratio-03.jpg"/>
        <h2>Description</h2>
        <p>In a remote island, Ephraim Winslow arrives as a lighthouse keeper and assists his elderly supervisor,Thomas Wake. As days pass, Winslow is haunted by strange and mysterious visions.
        <br/>When it is time to return home, a furious storm hits the island marooning Wake and Winslow. <br/>The two lighthouse keepers try to maintain their sanity while surviving on the remote New England island in the 1890s.</p>
        <h2>Directors</h2>
        <ul>
            <li>Robert Eggers</li>
            <li>Max Eggers</li>
        </ul>
        <br/>
        <h2>Stars</h2>
        <ul>
            <li>Robert Pattinson</li>
            <li>Willem Dafoe</li>
        </ul>
        <br/>
        <h2>Runtime</h2>
        <p className="runtime"> 1h 50m </p>
        <br/>
        <h2>Trailer</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Hyag7lR8CPA" title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <button className="booknow"> Booknow</button>
        </div>
    )
}

export default Lighthouse