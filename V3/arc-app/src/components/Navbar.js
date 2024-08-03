
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Animal Rescue Community</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/adoption">Adoption</Link></li>
                <li><Link to="/rescue-stories">Rescue Stories</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
