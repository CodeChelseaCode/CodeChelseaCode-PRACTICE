import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="navbar">
        <div className="left-links">
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
        </div>
        <div className="right-links">
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        
      </div>
      <div className="logo-container">
        <Link to="/">
          <img src={require("./ChelseaLogo.png")} alt="logo" className="logo" />
        </Link>
      <div className="line"></div>
      </div>
      {/* Rest of the home page content */}
    </div>
  );
};

export default Home;
