
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Doglisting from './pages/Doglisting';
import Catlisting from './pages/Catlisting';
import Adoptionpost from './pages/Adoptionpost';
import Adoptiondetails from './pages/Adoptiondetails';
import RescueStories from './pages/RescueStories';
import Donate from './pages/Donate';
import About from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/doglisting" element={<Doglisting />} />
                <Route path="/catlisting" element={<Catlisting />} />
                <Route path="/adoptionpost" element={<Adoptionpost />} />
                <Route path="/adoptiondetails" element={<Adoptiondetails />} />
                <Route path="/rescue-stories" element={<RescueStories />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
