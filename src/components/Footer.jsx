import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/" className="logo">
              dope<span className="text-accent">plan</span>
            </a>
            <p className="footer-description">
              A full-service marketing agency dedicated to driving measurable growth for mid-market e-commerce brands.
            </p>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Services</h4>
            <a href="#services">Performance Ads</a>
            <a href="#services">Social Media</a>
            <a href="#services">Affiliate Management</a>
            <a href="#services">Web Dev & SEO</a>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-heading">Company</h4>
            <a href="#work">Case Studies</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} dopeplan. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
