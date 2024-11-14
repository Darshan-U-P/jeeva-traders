// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Assuming you move styles to a separate CSS file

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist. Please check the URL or go back to the homepage.</p>
      <Link to="/" className="back-to-home">
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
