import React from 'react';
import './Footer.css';

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
          <img src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/ba4d4ef995fe87d2d5bc9e42fe36cf26646feec5?placeholderIfAbsent=true" alt="Social Media" className="footer-social-icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/aaffa218e12403e101be8bd22f411feb92643734?placeholderIfAbsent=true" alt="Social Media" className="footer-social-icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/52b177f16eecc1b89a3e503db0d7e2bc0d003e7f?placeholderIfAbsent=true" alt="Social Media" className="footer-social-icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/ac5d5a53d69787ac082f69c468e8f937f0e927c9?placeholderIfAbsent=true" alt="Social Media" className="footer-social-icon" />
        </div>
      </div>
      <div className="footer-divider"></div>
    </footer>
  );
};

export default Footer;