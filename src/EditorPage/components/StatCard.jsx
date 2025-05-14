import React from 'react';
import './StatCard.css';
import { ArrowUpRight } from 'lucide-react'; // Lucide icon as fallback if needed

const StatCard = ({
  title,
  value,
  changeValue,
  changeDirection = 'up',
  icon: IconComponent,
  iconBgColor,
  iconColor = '#000',
  changeColor = "#059669"
}) => {
  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-card-title">{title}</span>
        <div
          className="stat-card-icon-container"
          style={{ backgroundColor: iconBgColor }}
        >
          {IconComponent && <IconComponent size={20} color={iconColor} />}
        </div>
      </div>
      <div className="stat-card-value">{value}</div>
      <div className="stat-card-change" style={{ color: changeColor }}>
        {changeDirection === 'up' ? <ArrowUpRight size={16} color={changeColor} /> : <span>↓</span>}
        <span>{changeValue} from last month</span>
      </div>
    </div>
  );
};

export default StatCard;
