import React from 'react';
import './AuthorSidebar.css';

function AuthorSidebar({ activePage, onPageChange }) {
  return (
    <div className="author-sidebar">
      <div className="author-sidebar-content">
        <div className="author-logo-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f8736fc83f341972a01748fe9e66c922155067e?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
            alt="Logo"
            className="author-logo"
          />
        </div>

        <nav className="author-sidebar-nav">
          <a
            href="#drafts"
            className={`author-nav-item ${activePage === 'drafts' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('drafts');
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b830fdac9fb5552878f67cd6951e85386ac954f2?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
              alt="Drafts icon"
              className="author-nav-icon"
            />
            <span className="author-nav-text">My Drafts</span>
          </a>

          <a
            href="#pending"
            className={`author-nav-item ${activePage === 'pending' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('pending');
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b2655d49add00c278390476a49296686601061a?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
              alt="Pending icon"
              className="author-nav-icon"
            />
            <span className="author-nav-text">Pending Reviews</span>
          </a>

          <a
            href="#updates"
            className={`author-nav-item ${activePage === 'updates' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onPageChange('updates');
            }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5216279cc92de74d11c48ea3a7e9ac5a617baf5?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"
              alt="Updates icon"
              className="author-nav-icon"
            />
            <span className="author-nav-text">Updates</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

export default AuthorSidebar;
