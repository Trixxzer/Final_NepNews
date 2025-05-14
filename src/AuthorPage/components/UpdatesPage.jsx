import React, { useState, useEffect } from "react";
import StatsCard from "./AuthorStatsCard";
import "./UpdatesPage.css";

function UpdatesPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [stats, setStats] = useState({
    published: 0,
    rejected: 0,
    pending: 0,
    recent: [],
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchStats = async () => {
      try {
        const res = await fetch("https://collabbackend-z0kd.onrender.com/accounts/author/dashboard/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const data = await res.json();
        console.log("Author Dashboard Data:", data);

        setStats({
          published: data.published_articles,
          rejected: data.rejected_articles,
          pending: data.pending_reviews,
          recent: data.recent_articles || [],
        });
      } catch (error) {
        console.error("Error fetching author dashboard:", error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Published Articles",
      value: stats.published.toString(),
      trend: "+3 this month",
      trendPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9020dfad5f12e5975f280b1f9e658b3d06cb5c87"
    },
    {
      title: "Rejected Articles",
      value: stats.rejected.toString(),
      trend: "-1 this month",
      trendPositive: false,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/405dcdf348883edd423953bfa02c59b18a273fed"
    },
    {
      title: "Pending Reviews",
      value: stats.pending.toString(),
      trend: "+2 from last week",
      trendPositive: true,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b86a08a97c35fa121e06d1926ee8d6766fd1e090"
    }
  ];

  return (
    <div className="updates-page">
      <div className="stats-container">
        {statCards.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendPositive={stat.trendPositive}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="updates-container">
        <div className="updates-header">
          <h2>Publication Updates</h2>
        </div>
        <div className="updates-list">
          {stats.recent.map((article) => (
            <div key={article.id} className={`update-card ${article.status}`}>
              <div className="update-status-icon"></div>
              <div className="update-content">
                <div className="update-header">
                  <h3>{article.title}</h3>
                  <span className={`status-badge ${article.status}`}>
                    {article.status}
                  </span>
                </div>
                <div className="update-date">{article.date}</div>
                <div className="update-message">
                  {article.status === "published"
                    ? "Congratulations! Your article has been published."
                    : article.status === "rejected"
                    ? "Unfortunately, your article was not approved."
                    : "Your article is under review."}
                </div>

                {article.status === "rejected" && article.editorial_feedback && (
                  <div className="update-feedback">
                    <h4>Editorial Feedback:</h4>
                    <p>{article.editorial_feedback}</p>
                  </div>
                )}

                <div className="update-actions">
                  {(article.status === "published" || article.status === "pending") && (
                    <button
                      className="view-article-link"
                      onClick={() => setSelectedArticle(article)}
                    >
                      View Article
                    </button>
                  )}
                  {article.status === "rejected" && (
                    <p>Please submit a new article.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedArticle.title}</h2>
            <p><strong>Status:</strong> {selectedArticle.status}</p>
            <p><strong>Date:</strong> {selectedArticle.date}</p>
            <div className="highlight">
              <p>{selectedArticle.content}</p>
            </div>
            <button onClick={() => setSelectedArticle(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdatesPage;
