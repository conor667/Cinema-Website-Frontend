import React from "react";
import "./Home.css"
import ImageSlider from "./Images/ImageSlider";
import { SliderData } from './Images/SliderData';

function Home() {
    return(
        <>
        <div>
        <ImageSlider slides={SliderData} />
        <p>Welcome to QA Cinema!</p>
        </div>
        </>
    )
};

export default Home;