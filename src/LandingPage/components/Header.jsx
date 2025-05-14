import { useNavigate } from 'react-router-dom';
import React from 'react';
import './Header.css';

const Header = ({ toggleSideMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/7a23e8baa3bb56cd21e0faee83349fd14dbf4ef7?placeholderIfAbsent=true" 
        alt="Menu" 
        className="header-menu-icon"
        onClick={toggleSideMenu}
      />

      <a 
        href="#" 
        className="header-logo-link"
        onClick={(e) => {
          e.preventDefault();
          navigate('/');
        }}
      >
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/fe8566d938ccd5dfcc6419dc4ed429abb9ba7b9d?placeholderIfAbsent=true" 
          alt="Logo" 
          className="header-logo" 
        />
      </a>

      <a 
        href="#" 
        className="login-button"
        onClick={(e) => {
          e.preventDefault();
          navigate('/login');
        }}
      >
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/49e9cfe25e5cae07ba0e4517188e4df925e193d1?placeholderIfAbsent=true" 
          alt="User" 
          className="login-icon" 
        />
        <span>Login</span>
      </a>
    </div>
  );
};

export default Header;