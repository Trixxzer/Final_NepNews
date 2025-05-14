import React from 'react';
import './UserProfile.css';

const UserProfile = ({ setShowProfile }) => {
  return (
    <div className="profile-overlay" onClick={() => setShowProfile(false)}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="profile-header">
          <h2>User Profile</h2>
          <button className="close-button" onClick={() => setShowProfile(false)}>
            <i className="ti ti-x"></i>
          </button>
        </div>
        
        <div className="profile-content">
          <div className="profile-avatar-container">
            <img src={avatar} alt="User Avatar" className="profile-avatar" />
            <button className="change-avatar-button">
              <i className="ti ti-camera"></i>
            </button>
          </div>
          
          <div className="profile-info">
            <div className="profile-field">
              <label>Name</label>
              <input type="text" value="John Editor" readOnly />
            </div>
            
            <div className="profile-field">
              <label>Email</label>
              <input type="email" value="john.editor@example.com" readOnly />
            </div>
            
            <div className="profile-field">
              <label>Role</label>
              <input type="text" value="Senior Editor" readOnly />
            </div>
            
            <div className="profile-field">
              <label>Department</label>
              <input type="text" value="Technology" readOnly />
            </div>
            
            <div className="profile-field">
              <label>Joined</label>
              <input type="text" value="January 15, 2023" readOnly />
            </div>
          </div>
          
          <div className="profile-stats">
            <div className="profile-stat-item">
              <span className="stat-value">124</span>
              <span className="stat-label">Articles Edited</span>
            </div>
            
            <div className="profile-stat-item">
              <span className="stat-value">87</span>
              <span className="stat-label">Published</span>
            </div>
            
            <div className="profile-stat-item">
              <span className="stat-value">12</span>
              <span className="stat-label">Pending</span>
            </div>
          </div>
        </div>
        
        <div className="profile-actions">
          <button className="edit-profile-button">Edit Profile</button>
          <button className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;