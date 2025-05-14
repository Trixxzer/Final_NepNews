import React, { useState } from "react";
import "./HeaderEditor.css";
import RoleRequestForm from "./RolerequestForm"; 

const HeaderEditor = ({ title, username, onProfileClick, onLogout }) => {
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  return (
    <header className="editor-header">
      <div className="editor-header-left">
        <h1>{title}</h1>
      </div>
      <div className="editor-header-right">
        <span className="editor-username" onClick={onProfileClick}>
          {username}
        </span>

        <div className="role-request-dropdown">
          <button
            className="request-role-btn"
            onClick={() => setShowRoleDropdown(!showRoleDropdown)}
          >
            Request Role
          </button>

          {showRoleDropdown && (
            <div className="role-request-menu">
              <RoleRequestForm
                userId={JSON.parse(localStorage.getItem("user"))?.user_id}
              />
            </div>
          )}
        </div>

        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default HeaderEditor;
