// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.jpg'; // Import the logo image

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Jeeva Traders Logo" style={{ width: '100px', height: 'auto' }} />
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navbar Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/customer-login">Customer Login</Link>
        <Link to="/partner-login">Promoting Partner Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
