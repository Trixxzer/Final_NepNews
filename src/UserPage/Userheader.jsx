import React, { useState, useEffect } from 'react'; 
import './USerheader.css';
import logo from '../logo.png';
import RoleRequestForm from '../EditorPage/components/RolerequestForm'; 
import { useNavigate } from 'react-router-dom';

const Header = ({ username, onLogout }) => {
  const [showRoleForm, setShowRoleForm] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Loading...',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!token) {
      navigate('/login');
      return;
    }

    if (storedUser?.username) {
      setProfileData((prev) => ({
        ...prev,
        name: storedUser.username,
      }));
    }
  }, [navigate]);

  return (
    <header className="user-header-bar">
      <div className="user-header-left">
        <img src={logo} alt="Logo" className="user-logo" />
      </div>

      <div className="user-header-right">
        <span className="user-name">Welcome, {profileData.name}</span>

        <button
          className="request-role-btn"
          onClick={() => setShowRoleForm(!showRoleForm)}
        >
          Request Role
        </button>

        {showRoleForm && (
          <div className="role-request-inline-form">
            <RoleRequestForm
              userId={JSON.parse(localStorage.getItem('user'))?.user_id}
            />
          </div>
        )}

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
