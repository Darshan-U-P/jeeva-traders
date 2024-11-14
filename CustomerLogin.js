// src/pages/CustomerLogin.js
import React from 'react';
import MobileLayout from '../components/MobileLayout'; // Adjust the import path as necessary

function CustomerLogin() {
  return (
    <MobileLayout>
      <div className="customer-login">
        <h1>Customer Login</h1>
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

export default CustomerLogin;