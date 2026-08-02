import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="/" className="logo">
          dope<span className="text-accent">plan</span>
        </a>

        <nav className="nav-links desktop-only">
          <a href="#services">Services</a>
          <a href="#work">Case Studies</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions desktop-only">
          <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
            Get My Growth Blueprint
          </a>
        </div>

        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="#contact" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
            Get My Growth Blueprint
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
