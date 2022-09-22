// import React, { useState } from 'react';
import React, { useState } from "react";
import "./Gettinghere.css";
import exterior from "./Images/Building.jpg";
import carpark from "./Images/Cinemacarpark.png";

// TODO: Add buttons to grab users location and link directions to cinema for bus/walk/bike/drive/train
const MAP_KEY = "AIzaSyDTucTo5-y0BnXrP7Rmy0y5q4Y1jJERfeg"; // env file not working? Can use in local for now as it's not going live - but key currently exposed.

function Gettingthere() {
	const [iframeURL, setIframeURL] = useState(`https://www.google.com/maps/embed/v1/place?key=${MAP_KEY}&q=51.507517,-0.073804`); //iframe detault
	let url;
	function iframeHandler(method) {
		//this function is called when a button is clicked and cases dictate the api link called.
		function successLoc(e) {
			switch (method) {
				case "walk":
					url = `https://www.google.com/maps/embed/v1/directions?key=${MAP_KEY}&origin=${e.coords.latitude},${e.coords.longitude}&destination=51.507517,-0.073804&mode=walking`;
					break;
				case "drive":
					url = `https://www.google.com/maps/embed/v1/directions?key=${MAP_KEY}&origin=${e.coords.latitude},${e.coords.longitude}&destination=51.507517,-0.073804&mode=driving`;
					break;
				case "train":
					url = `https://www.google.com/maps/embed/v1/directions?key=${MAP_KEY}&origin=${e.coords.latitude},${e.coords.longitude}&destination=51.507517,-0.073804&mode=transit`;
					break;
			}
			setIframeURL(url);
			return;
		}
		function errorLoc(e) {
			return;
		}
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(successLoc, errorLoc);
		} else {
			alert("turn on location settings"); //Warns to turn on location settings if can't access
		}
	}
	function WalkingDirections() {
		// these functions call iframe handler with specific transport methods
		iframeHandler("walk");
	}
	function CarDirections() {
		iframeHandler("drive");
	}
	function TrainDirections() {
		iframeHandler("train");
	}
	return (
		<div className="GhComponent">
			<div className="GhGrid">
				<div className="Title"></div>
				<div className="Info">
					<h1>Parking</h1>
					<p>
						Our carpark is CCTV monitored 24hrs a day and free to all of our customers. We have spaces for bikes, cars, motorbikes and electric car charging points. Our carpark closes at 2am so please be aware that your car
						needs to be moved by this time.
					</p>
					<h1>Directions</h1>
					<p>Use the links below to get directions to us depending on how you plan on getting here!</p>
					<div className="DirectionBtn">
						<div className="CarBtn dbtn" onClick={() => CarDirections()}>
							<img src="https://ik.imagekit.io/x7dbw9vtu/Driving_tpt77NSf5.png" alt="ello"></img>
						</div>
						<div className="TrainBtn dbtn" onClick={() => TrainDirections()}>
							<img src="https://ik.imagekit.io/x7dbw9vtu/Train_P4f6CwXZH.png" alt="ello"></img>
						</div>
						<div className="WalkBtn dbtn" onClick={() => WalkingDirections()}>
							<img src="https://ik.imagekit.io/x7dbw9vtu/Walking_JCFc5MmiM.png" alt="ello"></img>
						</div>
					</div>
				</div>
				{/* <button className="btn" onClick={() => getLocation()}>CLICK</button> */}
				{/* <p>Your Location is {location.latitude} {location.longitude} </p> */}
				<div className="CinemaExterior">
					<img src={exterior} width="100%" height="100%" alt="Exterior of the building" />
				</div>
				<div className="CinemaCarPark">
					<img src={carpark} width="100%" height="100%" alt="Carparking" />
				</div>
				<div className="Address">
					<h1>Delta Cinema</h1>
					<p>3rd Floor, International House</p>
					<p>1 St Katharine's Way</p>
					<p>London</p>
					<p>E1W 1UN</p>
				</div>
				<div className="Map">
					<div className="MapProp">
						<iframe src={iframeURL} width="100%" height="100%" />
					</div>
					{/* <CreateIframe url="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=3rd%20Floor%2C%20International%20House%2C%201%20St%20Katharine%5C's%20Way%2C%20London%20E1W%201UN+(Title)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" /> */}
				</div>
			</div>
		</div>
	);
}

export default Gettingthere;
