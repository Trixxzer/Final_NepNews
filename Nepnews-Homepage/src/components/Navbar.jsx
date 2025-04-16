import { Link } from "react-router-dom";
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/business">Business</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
        <li><Link to="/others">Others</Link></li>
      </ul>
      <button className="logins-button">
        <Link to="/Login">Login</Link>
      </button>
    </nav>
  );
};

export default Navbar;
