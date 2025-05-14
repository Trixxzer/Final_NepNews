import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SideMenu.css';

const SideMenu = ({ isOpen, toggleSideMenu }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { name: 'Homepage', path: '/' },
    { name: 'News', path: '/category/news' },
    { name: 'Business', path: '/category/business' },
    { name: 'Sports', path: '/category/sports' },
    { name: 'Entertainment', path: '/category/entertainment' },
    { name: 'Articles', path: '/category/others' },
    { name: 'Login', path: '/login' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    toggleSideMenu();
  };

  return (
    <>
      <div className={`side-menu-overlay ${isOpen ? 'active' : ''}`} onClick={toggleSideMenu}></div>
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="side-menu-header">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/fe8566d938ccd5dfcc6419dc4ed429abb9ba7b9d?placeholderIfAbsent=true" 
            alt="Logo" 
            className="side-menu-logo" 
          />
          <button className="close-button" onClick={toggleSideMenu}>×</button>
        </div>
        <div className="side-menu-content">
          {categories.map((category) => (
            <a 
              key={category.name}
              href="#"
              className={`side-menu-item ${location.pathname === category.path ? 'side-menu-item-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(category.path);
              }}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideMenu;
