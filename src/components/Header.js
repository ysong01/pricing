import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-text">DPS</span>
          <span className="logo-separator">|</span>
          <span className="logo-subtext">Pricing Simulator</span>
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="https://github.com/ysong01/pricing-simulator" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 