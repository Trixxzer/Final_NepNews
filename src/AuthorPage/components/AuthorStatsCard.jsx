import React from 'react';
import './AuthorStatsCard.css';

function StatsCard({ title, value, trend, trendPositive, icon }) {
  return (
    <div className="stats-card">
      <div className="stats-header">
        <div className="stats-title">{title}</div>
        <img src={icon} alt={`${title} icon`} className="stats-icon" />
      </div>
      
      <div className="stats-value">{value}</div>
      
      <div className="stats-trend">
        <div className="trend-icon">
          <img 
            src={trendPositive ? "https://cdn.builder.io/api/v1/image/assets/TEMP/afde7bfcbe24a37df7da9e4147cfd0b06c2ed479?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8" : "https://cdn.builder.io/api/v1/image/assets/TEMP/6ded2fe91b09d7959fe8973cef5186850c6466ef?placeholderIfAbsent=true&apiKey=51fe0c6b992a41b4a7df9fb95584ecd8"} 
            alt={trendPositive ? "Upward trend" : "Downward trend"} 
            className="trend-arrow"
          />
        </div>
        <div className={`trend-text ${trendPositive ? 'positive' : 'negative'}`}>
          {trend}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;