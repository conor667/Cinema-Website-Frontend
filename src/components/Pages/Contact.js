import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
	const [status, setStatus] = useState("Submit");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus("Sending...");
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		let response = await fetch("http://localhost:3000/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(details),
		});
		setStatus("Submit");
		let result = await response.json();
		alert(result.status);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label className="ContactLabel" htmlFor="name">
					Name
				</label>
				<input className="contactInput" type="text" id="name" required />
			</div>
			<div>
				<label className="ContactLabel" htmlFor="email">
					Email
				</label>
				<input className="contactInput" type="email" id="email" required />
			</div>
			<div>
				<label className="ContactLabel" htmlFor="message">
					Message
				</label>
				<textarea className="message" id="message" required />
			</div>
			<button className="btncontact" type="submit">
				{status}
			</button>
		</form>
	);
};

export default Contact;
