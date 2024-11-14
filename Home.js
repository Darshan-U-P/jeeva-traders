// src/pages/Home.js
import React, { useState } from 'react';
import './Home.scss';
import MobileLayout from '../components/MobileLayout'; // Adjust the import path as necessary

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to check if the user is on a mobile device
  const isMobile = () => {
    return /Mobi/i.test(navigator.userAgent);
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Render content for mobile (Android) devices
  const renderMobileContent = () => (
    <MobileLayout>
      <div className="home">
        <div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
        <div className="container">
          <div className="left-section">
            <div className="welcome-text">Welcome to</div>
            <div className="sub-text">JEEVA TRADERS</div>
          </div>
          <div className="right-section">
            <button className="menu-button" onClick={toggleMenu}>☰</button>
            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
              <a href="/home" style={{ borderColor: '#ff6347', color: '#ff6347' }}>HOME</a> {/* Update to '/home' */}
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
              <a href="/customer-login">Customer login</a>
              <a href="/partner-login">Promoting Partner</a>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );

  // Render content for desktop devices
  const renderDesktopContent = () => (
    <div className="home desktop-only">
      <h1>Welcome to Jeeva Traders</h1>
      <p>Your trusted partner for quality products and services.</p>
    </div>
  );

  // Check if the user is on a mobile device
  if (isMobile()) {
    return renderMobileContent();
  }

  // If not on mobile, render desktop content
  return renderDesktopContent();
}

export default Home;
