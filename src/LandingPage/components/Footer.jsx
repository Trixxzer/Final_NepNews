import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <div className="footer-logo-container">
            <img src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/e14ce877f3e0bd2e24373aa7fdfb53f88e412848?placeholderIfAbsent=true" alt="Footer Logo" className="footer-logo" />
          </div>
          <div className="footer-about-text">
            <h4>About us</h4>
            <p>
              This website is the official news portal of Kantipur National Daily. 
              This Nepali language portal covers news, opinions, entertainment, sports, 
              world, information technology, videos and news and analysis from various 
              aspects of life.
            </p>
          </div>
        </div>
        <div className="footer-contact">
          <p>
            Contact address<br />
            Kantipur Publications Ltd.Central Business Park, ThapathaliKathmandu, 
            Nepal+977-01-5135000+977-01-5135001
          </p>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 Condé Nast. All rights reserved. The New Yorker may earn a portion 
          of sales from products that are purchased through our site as part of our 
          Affiliate Partnerships with retailers. The material on this site may not be
        </p>
        <div className="footer-social">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
    <FaFacebookF />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
    <FaTwitter />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
    <FaLinkedinIn />
  </a>
</div>
      </div>
      <div className="footer-divider"></div>
    </footer>
  );
};

export default Footer;