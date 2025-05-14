import React from 'react';
import './Notifications.css';

const Notifications = ({ setShowNotifications }) => {
  const notifications = [
    {
      id: 1,
      type: 'review',
      message: 'New article submitted for review: "The Future of AI in Journalism"',
      time: '10 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'publish',
      message: 'Your article "Climate Change Impact Report" has been published',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'comment',
      message: 'Sarah Johnson commented on your article',
      time: '3 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'revision',
      message: 'Revision requested for "Tech Industry Updates"',
      time: '5 hours ago',
      read: true
    },
    {
      id: 5,
      type: 'system',
      message: 'System maintenance scheduled for tonight at 2 AM',
      time: '1 day ago',
      read: true
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'review':
        return <i className="ti ti-clipboard-check notification-icon review"></i>;
      case 'publish':
        return <i className="ti ti-rocket notification-icon publish"></i>;
      case 'comment':
        return <i className="ti ti-message-circle notification-icon comment"></i>;
      case 'revision':
        return <i className="ti ti-pencil notification-icon revision"></i>;
      case 'system':
        return <i className="ti ti-info-circle notification-icon system"></i>;
      default:
        return <i className="ti ti-bell notification-icon"></i>;
    }
  };

  return (
    <div className="notifications-overlay" onClick={() => setShowNotifications(false)}>
      <div className="notifications-dropdown" onClick={(e) => e.stopPropagation()}>
        <div className="notifications-header">
          <h3>Notifications</h3>
          <button className="mark-all-read">Mark all as read</button>
        </div>
        
        <div className="notifications-list">
          {notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            >
              {getNotificationIcon(notification.type)}
              <div className="notification-content">
                <p className="notification-message">{notification.message}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="notifications-footer">
          <button className="view-all-notifications">View all notifications</button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;