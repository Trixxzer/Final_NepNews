import React from 'react';
import './SidebarEditor.css';
import logo from '../../logo.png';

const Sidebar = ({ activeView, onViewChange }) => {
  const isActive = (view) => activeView === view ? 'active' : '';
  
  return (
    <div className="sidebar">
      <img
        src={logo}
        alt="Logo"
        className="sidebar-logo"
      />
      
      <div className={`sidebar-item ${isActive('dashboard')}`} onClick={() => onViewChange('dashboard')}>
        <i className="ti ti-layout-dashboard sidebar-icon"></i>
        <span className="sidebar-text">Dashboard</span>
      </div>
      
      <div className={`sidebar-item ${isActive('pending')}`} onClick={() => onViewChange('pending')}>
        <i className="ti ti-hourglass sidebar-icon"></i>
        <span className="sidebar-text">Pending Reviews</span>
      </div>
      
      <div className={`sidebar-item ${isActive('published')}`} onClick={() => onViewChange('published')}>
        <i className="ti ti-article sidebar-icon"></i>
        <span className="sidebar-text">Published Article</span>
      </div>
    </div>
  );
};

export default Sidebar;