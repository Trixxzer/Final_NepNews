import React, { useEffect, useState } from 'react';
import './style.css';

const Requests = () => {
  const [requests, setRequests] = useState([]);

  const token = localStorage.getItem('token');

  const fetchRequests = async () => {
    try {
      const response = await fetch('https://collabbackend-z0kd.onrender.com/admin_panel/role-change-requests/', {
        headers: {
          Authorization: `Token ${token}`
        }
      });
      const data = await response.json();
      setRequests(data);
    } catch (err) {
      console.error('Failed to fetch requests:', err);
    }
  };

  const sendAction = async (id, action) => {
    try {
      const response = await fetch('https://collabbackend-z0kd.onrender.com/admin_panel/role-change/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`
        },
        body: JSON.stringify({ id, action })
      });

      if (!response.ok) throw new Error('Failed to send action');

      const result = await response.json();
      console.log('Action result:', result);
      setRequests(prev => prev.filter(req => req.id !== id));
    } catch (err) {
      console.error(`${action} request failed:`, err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="requests-page">
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Current Role</th>
              <th>Requested Role</th>
              <th>Request Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(request => (
              <tr key={request.id}>
                <td>{request.user_name}</td>
                <td><span className={`role-badge ${request.role.toLowerCase()}`}>{request.role}</span></td>
                <td><span className={`role-badge ${request.requested_role.toLowerCase()}`}>{request.requested_role}</span></td>
                <td>{request.date}</td>
                <td className="actions-cell">
                  <button className="accept-btn" onClick={() => sendAction(request.id, 'accept')}>
                    <i className="ti ti-check"></i> Accept
                  </button>
                  <button className="reject-btn" onClick={() => sendAction(request.id, 'reject')}>
                    <i className="ti ti-x"></i> Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Requests;
