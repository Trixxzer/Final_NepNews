import React, { useEffect, useState } from 'react';
import './PendingReviewPage.css';

function PendingReviewPage() {
  const [pendingArticles, setPendingArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPendingArticles = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found. Please log in.');
        return;
      }

      try {
        const response = await fetch(
          'https://collabbackend-z0kd.onrender.com/accounts/author/pending-reviews/',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch pending reviews');
        }

        const data = await response.json();
        setPendingArticles(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPendingArticles();
  }, []);

  return (
    <div className="pending-review-page">
      <div className="pending-articles-container">
        <div className="pending-header">
          <h2>Articles Under Review</h2>
        </div>

        {error && <p className="error">{error}</p>}

        <div className="pending-articles">
          {pendingArticles.length === 0 && !error && (
            <p>No articles are currently under review.</p>
          )}

          {pendingArticles.map((article) => (
            <div
              key={article.id}
              className={`article-card ${article.status.toLowerCase().replace(' ', '-')}`}
            >
              <div className="article-header">
                <h3>{article.title}</h3>
                <span className={`status-badge ${article.status.toLowerCase()}`}>
                  {article.status}
                </span>
              </div>
              <div className="article-date">Submitted on {article.date}</div>
              {article.editorial_feedback && (
                <div className="article-feedback">
                  <h4>Editorial Feedback:</h4>
                  <p>{article.editorial_feedback}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PendingReviewPage;
