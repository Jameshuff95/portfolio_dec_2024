import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from '../Components/Nav';
import Home from '../Components/Home';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  useEffect(() => {
    // Set initial theme
    const initialTheme = 'dark'; // or 'light', based on your preference
    document.body.className = initialTheme;
  }, []);

  return (
    <Router>
      <Nav />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
