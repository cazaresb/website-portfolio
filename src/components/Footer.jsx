import React from 'react';

// Footer component that displays a copyright notice.
const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Brian Cazares. All rights reserved.</p>
  </footer>
);

export default Footer;