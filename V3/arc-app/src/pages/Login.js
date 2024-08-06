import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="cat-image">
          <img src="/Cat.png" alt="Cat" />  
        </div>
        <h2>Login to your Account</h2>
        <form>
          <input type="text" placeholder="Please enter your email/mobile no" />
          <input type="password" placeholder="Please enter your password" />
          <button type="submit">Log in</button>
        </form>
        <p>
          <a href="#">Forgot Password?</a>  <Link to="/signup"> or Sign up</Link> 
        </p>
        <div className="social-login">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
          <button className="microsoft">Microsoft</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
