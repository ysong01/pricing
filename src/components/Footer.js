import React from 'react';
import { FiGithub, FiBook, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Dynamic Pricing Simulator</h3>
          <p>Advanced pricing optimization tool for business decision-makers</p>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="/about" className="footer-link">
            <FiBook /> About
          </a>
          <a href="https://github.com/ysong01/pricing-simulator" className="footer-link">
            <FiGithub /> GitHub Repository
          </a>
        </div>


      </div>
      

    </footer>
  );
};

export default Footer; 