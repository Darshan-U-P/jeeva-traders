// src/pages/Contact.js
import React from 'react';
import MobileLayout from '../components/MobileLayout'; // Adjust the import path as necessary

function Contact() {
  return (
    <MobileLayout>
      <div className="contact">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries or assistance.</p>
        <form>
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <label>Message:</label>
          <textarea />
          <button type="submit">Send</button>
        </form>
      </div>
    </MobileLayout>
  );
}

export default Contact;
