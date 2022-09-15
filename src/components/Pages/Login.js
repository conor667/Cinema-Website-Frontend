import React from "react";

function Login() {
    return(
        <>
        <form>
        <h1>Login</h1>
            <div>
               <label htmlFor="name">Email</label>
               <input placeholder="Email" type="text" id="Email" required />
            </div>
            <div>
                <label> Password </label>
                <input placeholder="Password" type="password" id="password" required/>
            </div>
            <button className="btncontact" type="submit"> Login </button>
        </form>
        </>
    )
}

export default Login;