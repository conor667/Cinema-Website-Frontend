// import React, { useState } from 'react';
import React from 'react';
import "./Gettinghere.css"
import exterior from "./Images/Building.jpg"
import carpark from "./Images/Cinemacarpark.png"
import station from "./Images/Station.png"


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

    function CreateIframe(props) {
        return (
            <div className="MapProp">
                <iframe title = "titlestill" width="100%" height="100%" src= {props.url}/>            
            </div>
        )
    }
    function Gettingthere() {

    return(
        <div className="GhComponent">
        <div className="GhGrid">
        <div className="Title">
        </div>
        <div className="Info">
            <p className="fontimport">
            We offer many different facilities for your convenience at our Cinema!
            There is carparking available, toilets, water refil stations and baby changing rooms free for all customers to use.
            Our Cinema is also perfectly located near bus and train statations!
            Our carparking is covered by CCTV 24hrs a day so you can be assured your car is safe within our carpark.
            </p>
        </div>
        {/* <button className="btn" onClick={() => getLocation()}>CLICK</button> */}
        {/* <p>Your Location is {location.latitude} {location.longitude} </p> */}
        <div className="CinemaExterior">
            <img src={exterior}  width="100%" height="100%" alt="Exterior of the building" />
       </div>
       <div className="CinemaCarPark">
       <img src={carpark} width="100%" height="100%" alt="Carparking" />
       </div>
       <div className="TrainStation">
        <img src={station} width="100%" height="100%" alt="Station" />
        </div><div className="Address">
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