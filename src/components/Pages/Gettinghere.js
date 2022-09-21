// import React, { useState } from 'react';
import React from "react";
import "./Gettinghere.css";
import exterior from "./Images/Building.jpg";
import carpark from "./Images/Cinemacarpark.png";

// TODO: Add buttons to grab users location and link directions to cinema for bus/walk/bike/drive/train

// function Gettingthere() {
//     const [location, setLocation] = useState(0)
//     const [iframeURL, setIframeURL] = useState({"url":"https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=3rd%20Floor%2C%20International%20House%2C%201%20St%20Katharine%5C's%20Way%2C%20London%20E1W%201UN+(Title)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"})
//     // setIframeURL({"url":"https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=3rd%20Floor%2C%20International%20House%2C%201%20St%20Katharine%5C's%20Way%2C%20London%20E1W%201UN+(Title)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"})
//     function getLocation() {
//         let location;
//         if (navigator.geolocation) {
//           location = navigator.geolocation.getCurrentPosition(callLocation);
//         } else {
//           alert('turn on location settings')
//           location = null;
//         }
//         return location;

//             //grabbing location of the user so i can use it for navigation
//       }
//     function callLocation(e) {
//         setLocation({"longitude":e.coords.longitude,"latitude":e.coords.latitude})
//     }

function Gettingthere() {
	function CreateIframe(props) {
		return (
			<div className="MapProp">
				<iframe title="titlestill" width="100%" height="100%" src={props.url} />
			</div>
		);
	}
	function CarDirections() {
		console.log("car");
	}
	function TrainDirections() {
		console.log("train");
	}
	function WalkingDirections() {
		console.log("walk");
	}
	return (
		<div className="GhComponent">
			<div className="GhGrid">
				<div className="Title"></div>
				<div className="Info">
					<h1>Parking</h1>
					<p>
						Our carpark is CCTV monitored 24hrs a day and free to all of our customers. We have spaces for bikes, cars, motorbikes and electric car charging points. Our carpark closes at 2am so please be aware that your car needs to be moved by
						this time.
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
					<CreateIframe url="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=3rd%20Floor%2C%20International%20House%2C%201%20St%20Katharine%5C's%20Way%2C%20London%20E1W%201UN+(Title)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" />
				</div>
			</div>
		</div>
	);
}

export default Gettingthere;
