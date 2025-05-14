import { useState, useRef, useEffect } from 'react';
import { ChevronDownIcon } from './Icons';
import '../styles/auth.css';

function RoleSelector({ selectedRole, onRoleSelect, isOpen, toggleDropdown }) {
  const roles = ['User', 'Admin', 'Editor', 'Author'];
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (isOpen) toggleDropdown();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleDropdown]);

  return (
    <div className="role-selector" ref={dropdownRef}>
      <div className="role-select" onClick={toggleDropdown}>
        <div className="role-text">{selectedRole || 'Role'}</div>
        <ChevronDownIcon className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="role-dropdown">
          {roles.map((role) => (
            <div
              key={role}
              className="role-option"
              onClick={() => onRoleSelect(role)}
            >
              {role}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RoleSelector;