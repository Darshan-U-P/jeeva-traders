import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileLayout.scss';

function MobileLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu and navigate when a link is clicked
  const handleLinkClick = (path) => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div className="mobile-layout">
      {/* Menu Button only visible for mobile screens */}
      <button className="menu-button" onClick={toggleMenu}>☰</button>

      {/* Mobile Nav Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/home" onClick={() => handleLinkClick("/home")}>Home</Link>
        <Link to="/about" onClick={() => handleLinkClick("/about")}>About</Link>
        <Link to="/contact" onClick={() => handleLinkClick("/contact")}>Contact</Link>
        <Link to="/customer-login" onClick={() => handleLinkClick("/customer-login")}>Customer Login</Link>
        <Link to="/promoting-partner" onClick={() => handleLinkClick("/promoting-partner")}>Promoting Partner</Link>
      </div>

      {/* Page content */}
      <div className="content">{children}</div>
    </div>
  );
}

export default MobileLayout;
