
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Adoption from './pages/Adoption';
import RescueStories from './pages/RescueStories';
import Donate from './pages/Donate';
import About from './pages/About';
import Login from './pages/Login';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/adoption" element={<Adoption />} />
                <Route path="/rescue-stories" element={<RescueStories />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
