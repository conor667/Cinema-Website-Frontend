import React from "react";
import "./Openingtimes.css";

function Openingtimes() {
	function AvatarEvent() {
		window.open("https://www.youtube.com/watch?v=5PSNL1qE6VY");
	}
	return (
		<div className="GhComponent">
			<div className="GhGrid">
				<div className="Title"></div>
				<div className="Info">
					<h1>Special Events</h1>
					<p>
						{" "}
						We may sometimes have special screenings of events such as sporting events or event old movies playing ahead of a new release. This will usually be done outside of our normal opening times and will give more options for you to
						experience it! The information for these will be available on the home page when we have news of this, and you can even check here if you like.
					</p>
					<h1>Special Events Coming Soon</h1>
					<p>We have an amazing event coming of the first Avatar movie ahead of the upcoming new release! Click the buttons below and it will take you to the trailer for the upcoming film event!</p>
					<div className="Avatar" onClick={() => AvatarEvent()}>
						<img src="https://ik.imagekit.io/x7dbw9vtu/avatar-2-james-cameron.jpg_bpsjw_Qcy.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1663768196680" width="100%" height="100%" alt="Avatar pic" />
					</div>
					<h1>Standard Opening Times</h1>
					<ul>
						<li>Monday - 11:00am to 23:00pm</li>
						<li>Tuesday - 11:00am to 23:00pm</li>
						<li>Wednesday - 11:00am to 23:00pm</li>
						<li>Thursday - 11:00am to 23:00pm</li>
						<li>Friday - 11:00am to 23:00pm</li>
						<li>Saturday - 11:00am to 23:00pm</li>
						<li>Sunday - 11:00am to 23:00pm</li>
						<li>*Times may change on bank holidays*</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Openingtimes;
