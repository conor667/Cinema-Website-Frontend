import React from "react";
import "./css/Login.css";
import { useState } from "react";

function Login() {
	const [typeData, setTypeData] = useState("Login");

	function FormHandler(type) {
		setTypeData(type);
	}
	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formObject = Object.fromEntries(formData.entries());
		(async () => {
			const rawResponse = await fetch("http://localhost:5500/login", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formObject),
			});
			if (rawResponse.status === 400) {
				alert("Invalid login details, please try again");
			} else if (rawResponse.status === 200) {
				alert("You've successfully logged in!");
				// console.log(await rawResponse.json());
				//TODO : Cookie doesn't save on changing pages - not MVP so will come back to this if time.
			}
			// console.log(content);
		})();
	}

	if (typeData === "Login") {
		return (
			<div className="Login">
				<div id="login-form-wrap">
					<h2 className="Login">Login</h2>
					<form id="login-form" onSubmit={(e) => handleSubmit(e)}>
						<div className="EmailLoginInput">
							<input className="input" type="email" id="email" name="email" placeholder="Email Address" required />
							<i class="validation">
								<span></span>
								<span></span>
							</i>
						</div>
						<div className="PasswordLoginInput">
							<input className="input" type="password" id="password" name="password" placeholder="Password" required />
							<i class="validation">
								<span></span>
								<span></span>
							</i>
						</div>
						<div className="RegisterInput">
							<input className="input" type="submit" id="login" placeholder="Login" />
						</div>
						{/* <div className="RememberMe">
							<input className="input" type="submit" id="login" placeholder="Login" />
							<label className="rememberMe">
								{" "}
								Remember Me
								<input className="rememberbox" type="checkbox" />
							</label>
						</div> */}
					</form>
					<div id="create-account-wrap">
						<p>
							Not a member?{" "}
							<button className="CreateAccountBtn" onClick={() => FormHandler("Register")}>
								Create Account
							</button>
						</p>
					</div>
				</div>
			</div>
		);
	} else if (typeData === "Register") {
		return (
			<div className="Reigster">
				<div id="login-form-wrap">
					<h2 className="Register">Reigster</h2>
					<form id="login-form">
						<div className="RegisterEmailInput">
							<input className="input" type="email" id="email" name="email" placeholder="Email" required />
							<i class="validation">
								<span></span>
								<span></span>
							</i>
						</div>
						<div className="RegisterPasswordInput">
							<input className="input" type="password" id="password" name="password" placeholder="Password" required />
							<i class="validation">
								<span></span>
								<span></span>
							</i>
						</div>
						<div className="RegisterUserNameInput">
							<input className="input" type="username" id="username" name="username" placeholder="User Name" required />
							<i class="validation">
								<span></span>
								<span></span>
							</i>
						</div>

						<div className="RegisterDateOfBirthInput">
							<input className="input" type="DateOfBirth" id="DateOfBirth" name="DareOfBirth" placeholder="Date of Birth: YYYY-MM-DD" pattern="([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))" required />
							<i class="validation">
								<span></span>
								<span></span>
							</i>
						</div>
						<div className="RegisterPhoneNumberInput">
							<input className="input" type="PhoneNumber" id="PhoneNumber" name="PhoneNumber" placeholder="Phone Number" required />
							<i class="validation">
								<span></span>
								<span></span>
							</i>
						</div>
						<div className="RegisterInput">
							<input className="input" type="submit" id="login" placeholder="Login" />
						</div>
					</form>
					<div id="create-account-wrap">
						<p>
							Already a member?{" "}
							<button className="LoginBtn" onClick={() => FormHandler("Login")}>
								Login
							</button>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
