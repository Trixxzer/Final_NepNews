import React, { useEffect, useState } from 'react';
import StatCard from './StatCard';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Unauthorized access. Please log in.");
        return;
      }

      try {
        const response = await fetch("https://collabbackend-z0kd.onrender.com/admin_panel/dashboard/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        const data = await response.json();
        setStats(data.stats);
        setActivities(data.recent_activities);
      } catch (err) {
        console.error(err);
        setError("Error loading dashboard.");
      }
    };

    fetchDashboardData();
  }, []);

  const iconMap = {
    "Total Users": { icon: "ti ti-users", bg: "#DBEAFE", color: "#2563EB" },
    "Active Authors": { icon: "ti ti-pencil", bg: "#D1FAE5", color: "#059669" },
    "Pending Role Requests": { icon: "ti ti-clock", bg: "#FEF3C7", color: "#D97706" },
  };

  return (
    <div className="dashboard">
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="admin-stats-container">
        {stats.map((stat, index) => {
          const iconData = iconMap[stat.title] || {};
          return (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.trend}
              changeType={stat.trendPositive ? "positive" : "negative"}
              icon={iconData.icon}
              iconBg={iconData.bg}
              iconColor={iconData.color}
            />
          );
        })}
      </div>

      <div className="recent-activities">
        <h2 className="section-title">Recent Activities</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Activity Title</th>
                <th>User Name</th>
                <th>Role</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.activity_title}</td>
                  <td>{activity.user_name}</td>
                  <td>
                    <span className={`role-badge ${activity.role.toLowerCase()}`}>
                      {activity.role}
                    </span>
                  </td>
                  <td>{activity.date}</td>
                  <td>
                    <span className={`status-badge ${activity.status.toLowerCase()}`}>
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
