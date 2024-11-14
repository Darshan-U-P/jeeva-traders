// src/pages/PartnerLogin.js
import React from 'react';
import MobileLayout from '../components/MobileLayout'; // Adjust the import path as necessary

function PartnerLogin() {
  return (
    <MobileLayout>
      <div className="partner-login">
        <h1>Promoting Partner Login</h1>
        <form>
          <label>Email:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </MobileLayout>
  );
}

export default PartnerLogin;