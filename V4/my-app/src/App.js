import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="cat-image">
          
        <img src="/cat.png" class="cat" />  
        </div>
        <h2>Login to your Account</h2>
        <form>
          <input type="text" placeholder="Please enter your email/mobile no" />
          <input type="password" placeholder="Please enter your password" />
          <button type="submit">Log in</button>
        </form>
        <p>
          <a href="#">Forgot Password?</a> or Sign in with
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

export default App;
