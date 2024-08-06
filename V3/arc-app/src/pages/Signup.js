import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, email, mobile, password });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create new Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>PLEASE ENTER YOUR NAME</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>PLEASE ENTER YOUR EMAIL</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <span>PLEASE ENTER YOUR MOBILE NUMBER</span>
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </label>
          <label>
            <span>PLEASE ENTER YOUR PASSWORD</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <label>
            <span>RE ENTER YOUR PASSWORD</span>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already Registered? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default SignupForm;

