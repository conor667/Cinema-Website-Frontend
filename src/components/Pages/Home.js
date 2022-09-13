import React from "react";
import "./Home.css"
import ImageSlider from "./Images/ImageSlider";
import { SliderData } from './Images/SliderData';

function Home() {
    return(
        <>
        <div>
        <h1> FEATURED </h1>
        <ImageSlider slides={SliderData} />
        <h1>WHAT'S ON</h1>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        </div>
        </>
    )
};

export default Home;
