import React from "react";
import "./About.css";
import BuildingImage from "../Pages/Images/Building.jpg";

function About() {
	return (
		<>
		<div className="aboutContainer">
			<h1 className="main-title">About Us</h1>
			<h2 className="title-1">QA Cinema</h2>
			<QaCinema />
			<h2 className="title-2">Team Members</h2>
			<TeamMembers />
			<h2 className="title-3">Socials</h2>
			<Socials />
		</div>
		</>
	);
}

function QaCinema() {
	return (
		<div>
			<img src={BuildingImage} alt="QA Cinema building" className="building-image" />
			<div className="qa-cinema-section">
				<p className="paragraph-1">
					Hello, thank you for viewing QA Cinema! <br/> QA Cinema is a small cinema located in london. We are focused on the continuous growth and development of our community
					to try and get more people back into the screens rather than at home. <br/> We have 4 screens that play films every two hours to bring you the best variety of movies and entertainment opporunities.
					<br/> We bring classic movies as well as highly anticipated blockbusters with cinematic titles including opera, ballett, musicals, national theatre as well as live streaming sporting events.
				</p>
			</div>
		</div>
	);
}

function TeamMembers() {
	return (
		<div>
			<div className="team-members-section">
				<p className="paragraph-2">
					Conor White <br/>
					Subhaan Malik <br/>
					Justin Graham <br/>
					Robert Kusz <br/>
				</p>
			</div>
		</div>
	);
}

function Socials() {
	return (
		<div>
			<div className="socials-section">
				<p className="paragraph-3">
					Instagram - <br/>
					Facebook -  <br/>
					Twitter -  <br/>
				</p>
			</div>
		</div>
	);
}

export default About;
