import React from 'react';
import './style.css';
import logo from '../../logo.png';

const Sidebar = ({ activePage, setActivePage }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'ti ti-home' },
    { id: 'users', label: 'Users', icon: 'ti ti-users' },
    { id: 'requests', label: 'Requests', icon: 'ti ti-clipboard-check' }
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img
          src={logo}
          alt="Nepnews"
          className="logo"
        />
      </div>
      <nav className="nav-menu">
        {navItems.map(item => (
          <div
            key={item.id}
            className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => setActivePage(item.id)}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;