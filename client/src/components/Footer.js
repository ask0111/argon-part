import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <div className="tags">
          <span>Company</span>
          <span>About Us</span>
          <span>Team</span>
          <span>Products</span>
          <span>Blogs</span>
          <span>Pricing</span>
        </div>
        <div className="social-icons">
          <i className="fa fa-globe"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-pinterest"></i>
          <i className="fab fa-github"></i>
        </div>
       
      </div>
      <div className="footer-right">
        <p>Compyright &copy; 2023 soft by creative Tim.</p>
      </div>
    </footer>
  );
};

export default Footer;
