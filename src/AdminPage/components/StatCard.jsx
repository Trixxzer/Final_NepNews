import React from 'react';
import './style.css';
const StatCard = ({ title, value, change, changeType, icon, iconBg, iconColor }) => {
  return (
    <div className="Admin-stat-card">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        <div className="stat-icon" style={{ backgroundColor: iconBg }}>
          <i className={icon} style={{ color: iconColor }}></i>
        </div>
      </div>
      <div className="stat-value">{value}</div>
      <div className={`stat-change ${changeType}`}>
        <i className={changeType === 'positive' ? 'ti ti-arrow-up' : 'ti ti-arrow-down'}></i>
        <span>{change} from last month</span>
      </div>
    </div>
  );
};

export default StatCard;