import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './AuthorSidebar';
import DraftsPage from './DraftsPage';
import PendingReviewPage from './PendingReviewPage';
import UpdatesPage from './UpdatesPage';
import RoleRequestForm from '../../EditorPage/components/RolerequestForm';
import './AuthorDashboard.css';

function Dashboard() {
  const [activePage, setActivePage] = useState('drafts');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showRoleForm, setShowRoleForm] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Loading...',
    photoUrl:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/beadbe452d99e5a91843b44b7aba69f5d09ecc29?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handlePageChange = (page) => {
    setActivePage(page);
    setShowProfileDropdown(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const renderPageContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    switch (activePage) {
      case 'drafts':
        return <DraftsPage />;
      case 'pending':
        return <PendingReviewPage />;
      case 'updates':
        return <UpdatesPage />;
      default:
        return <DraftsPage />;
    }
  };

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
    <div className="dashboard">
      <div className="dashboard-container">
        <Sidebar activePage={activePage} onPageChange={handlePageChange} />

        <div className="dashboard-content">
          <div className="dashboard-content-inner">
            <div className="editor-header">
              <div className="editor-header-left">
                <h1 className="editor-title">Author Dashboard</h1>
              </div>

              <div className="editor-header-right">
                <span className="editor-username" onClick={toggleProfileDropdown}>
                  {profileData.name}
                </span>

                <div className="role-request-dropdown">
                  <button
                    className="request-role-btn"
                    onClick={() => setShowRoleForm(!showRoleForm)}
                  >
                    Request Role
                  </button>
                  {showRoleForm && (
                    <div className="role-request-menu">
                      <RoleRequestForm
                        userId={JSON.parse(localStorage.getItem("user"))?.user_id}
                      />
                    </div>
                  )}
                </div>

                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>

            {renderPageContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
