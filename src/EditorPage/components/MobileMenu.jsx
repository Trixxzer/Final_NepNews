import React from 'react';
import './MobileMenu.css';
import logo from '../../../assets/logo.png';

const MobileMenu = ({ activeView, setActiveView, setShowMobileMenu }) => {
  const handleNavClick = (view) => {
    setActiveView(view);
    setShowMobileMenu(false);
  };

  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <img src={logo} alt="Logo" className="mobile-menu-logo" />
          <button className="close-menu-button" onClick={() => setShowMobileMenu(false)}>
            <i className="ti ti-x"></i>
          </button>
        </div>
        
        <div className="mobile-menu-items">
          <div 
            className={`mobile-menu-item ${activeView === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleNavClick('dashboard')}
          >
            <i className="ti ti-home mobile-menu-icon"></i>
            <span>Dashboard</span>
          </div>
          
          <div 
            className={`mobile-menu-item ${activeView === 'pending' ? 'active' : ''}`}
            onClick={() => handleNavClick('pending')}
          >
            <i className="ti ti-clock mobile-menu-icon"></i>
            <span>Pending Reviews</span>
          </div>
          
          <div 
            className={`mobile-menu-item ${activeView === 'published' ? 'active' : ''}`}
            onClick={() => handleNavClick('published')}
          >
            <i className="ti ti-check-circle mobile-menu-icon"></i>
            <span>Published Articles</span>
          </div>
          
          <div className="mobile-menu-item" onClick={() => setShowMobileMenu(false)}>
            <i className="ti ti-user mobile-menu-icon"></i>
            <span>Profile</span>
          </div>
          
          <div className="mobile-menu-item" onClick={() => setShowMobileMenu(false)}>
            <i className="ti ti-bell mobile-menu-icon"></i>
            <span>Notifications</span>
          </div>
        </div>
        
        <div className="mobile-menu-footer">
          <button className="mobile-logout-button">
            <i className="ti ti-logout"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;