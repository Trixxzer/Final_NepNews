import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- import navigate
import Sidebar from './Sidebar';
import Dashboard from './AdminDashboard';
import Users from './Users';
import Requests from './Requests';
import './style.css';

const AdminPanel = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [adminProfile, setAdminProfile] = useState({
    name: 'Admin',
    image: 'https://via.placeholder.com/40'
  });

  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'requests':
        return <Requests />;
      default:
        return <Dashboard />;
    }
  };

  const handleProfileUpdate = (newProfile) => {
    setAdminProfile(newProfile);
    setProfileModalOpen(false);
  };

  return (
    <div className="admin-panel">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="content-area">
        <div className="admin-header">
          <div className="editor-header-left">
            <h1>{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</h1>
          </div>
          <div className="editor-header-right">
            <span className="editor-username" onClick={() => setProfileModalOpen(true)}>
              {adminProfile.name}
            </span>
            <button
              className="logout-button"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                navigate("/login"); // 🔄 use navigate instead of window.location.href
              }}
            >
              Logout
            </button>
          </div>
        </div>
        {renderContent()}
      </div>

      {profileModalOpen && (
        <ProfileModal
          profile={adminProfile}
          onClose={() => setProfileModalOpen(false)}
          onSave={handleProfileUpdate}
        />
      )}
    </div>
  );
};

export default AdminPanel;
