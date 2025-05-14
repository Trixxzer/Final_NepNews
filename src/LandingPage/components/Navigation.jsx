import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { name: 'Homepage', path: '/' },
    { name: 'News', path: '/category/news' },
    { name: 'Business', path: '/category/business' },
    { name: 'Sports', path: '/category/sports' },
    { name: 'Entertainment', path: '/category/entertainment' },
    { name: 'Articles', path: '/category/others' }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {categories.map((category) => (
          <a 
            key={category.name}
            href="#"
            className={`nav-item ${location.pathname === category.path ? 'nav-item-active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(category.path);
            }}
          >
            {category.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
