import React from "react";
import './css/Login.css'

function Login() {
    return (
      <>
      <div className="Login">
      <div id="login-form-wrap">
      <h2 className="Login">Login</h2>
      <form id="login-form">
      <p className="loginInput">
    <input className="input" type="email" id="email" name="email" placeholder="Email Address" required/><i class="validation"><span></span><span></span></i>
    </p>
    <p className="loginInput">
    <input className="input" type="password" id="password" name="email" placeholder="Password" required/><i class="validation"><span></span><span></span></i>
    </p>
    <p className="loginInput">
    <input className="input" type="submit" id="login" value="Login"/>
    </p>
  </form>
  <div id="create-account-wrap">
    <p>Not a member? <a className="createbutton" href="#">Create Account</a></p>
  </div>
</div>
</div>
      </>
    );
  }

export default Login;
