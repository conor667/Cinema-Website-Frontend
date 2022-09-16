import React from "react";
import "./About.css";
import BuildingImage from "../Pages/Images/Building.jpg";

function About() {
	return (
		<>
			<h1 className="main-title">About Us</h1>
			<h2 className="title-1">QA Cinema</h2>
			<QaCinema />
			<h2 className="title-2">Team Members</h2>
			<TeamMembers />
			<h2 className="title-3">Socials</h2>
			<Socials />
		</>
	);
}

function QaCinema() {
	return (
		<div>
			<img src={BuildingImage} alt="QA Cinema building" className="building-image" />
			<div className="qa-cinema-section">
				<p className="paragraph-1">
					Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema.
					Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema. Info about QA cinema.
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
					Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team
					members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members
					info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team
					members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info. Team members info.
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
					Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials
					info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info.
					Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials
					info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info. Socials info.
				</p>
			</div>
		</div>
	);
}

export default About;
