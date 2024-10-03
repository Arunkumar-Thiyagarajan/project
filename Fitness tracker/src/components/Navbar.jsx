import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Fitness Tracker</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <link to="/Home">Home</link>
        </li>
        <li>
          
        </li>
        <li>
          <link to="/workouts">Workouts</link>
        </li>
        <li>
          <link to="/nutrition"> Nutrition</link>
        </li>
        
        <li>
          <link to="/profile">Profile</link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
