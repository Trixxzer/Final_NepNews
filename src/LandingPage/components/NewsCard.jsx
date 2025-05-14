import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ 
  id, 
  title, 
  summary, 
  image, 
  variant = 'standard',
  date,
  location
}) => {
  const getCardClass = () => {
    switch (variant) {
      case 'featured':
        return 'news-card-featured';
      case 'sidebar':
        return 'news-card-sidebar';
      case 'horizontal':
        return 'news-card-horizontal';
      case 'small':
        return 'news-card-small';
      default:
        return 'news-card-standard';
    }
  };

  return (
    <Link 
      to={`/article/${id}`} 
      className={`news-card ${getCardClass()}`} 
      aria-label={`Read article: ${title}`}
    >
      {image && (
        <div className="news-card-image-container">
          <img src={image} alt={title} className="news-card-image" />
        </div>
      )}
      <div className="news-card-content">
        <h3 className="news-card-title">{title}</h3>
        {summary && <p className="news-card-summary">{summary}</p>}
        {(date || location) && (
          <div className="news-card-meta">
            {date && <span>{date}</span>}
            {date && location && <span> | </span>}
            {location && <span>{location}</span>}
          </div>
        )}
      </div>
    </Link>
  );
};

export default NewsCard;
