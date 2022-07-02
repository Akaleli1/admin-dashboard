import React from 'react'
import '../../styles/home/styles.css';


function Login() {
  return (
    <div className="login-container">
        <form className="login-form">
            <input className="login-form-input" type="text" name="username" placeholder="Username" />
            <input className="login-form-input" type="password" id="pass" name="password" minlength="8" placeholder="Password" required/>
          <input className="login-form-btn" type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login;