import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="about">
      <h4>About us</h4>
      <p>This website is the official news portal of Kantipur National Daily...</p>
    </div>
    <div className="contact">
      <h4>Contact Address</h4>
      <p>Kantipur Publications Ltd.<br />
      Central Business Park, Kathmandu<br />
      +977-01-5135000</p>
    </div>
    <div className="social-icons">
      <i className="fab fa-facebook"><img src='https://thumbs.dreamstime.com/b/facebook-logo-vector-eps-file-squared-coloured-easily-editable-have-white-background-high-resolution-255557233.jpg' width={20} height={20}></img></i>
      <i className="fab fa-instagram"><img src='https://thumbs.dreamstime.com/b/facebook-logo-vector-eps-file-squared-coloured-easily-editable-have-white-background-high-resolution-255557233.jpg' width={20} height={20}></img></i>
      <i className="fab fa-linkedin"><img src='https://thumbs.dreamstime.com/b/facebook-logo-vector-eps-file-squared-coloured-easily-editable-have-white-background-high-resolution-255557233.jpg' width={20} height={20}></img></i>
    </div>
  </footer>
);

export default Footer;
