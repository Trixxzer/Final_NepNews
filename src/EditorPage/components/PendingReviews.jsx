import React, { useState, useEffect } from 'react';
import './PendingReviews.css';

const PendingReviews = ({ setActiveView, setSelectedArticle }) => {
  const [pendingArticles, setPendingArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setActiveView('article-details');
  };

  useEffect(() => {
    const fetchPendingArticles = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "https://collabbackend-z0kd.onrender.com/accounts/editor/pending-reviews/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch pending reviews");

        const data = await response.json();
        setPendingArticles(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingArticles();
  }, []);

  if (loading) return <div>Loading pending reviews...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="pending-reviews">
      <div className="pending-reviews-header">
        <h2>Pending Reviews ({pendingArticles.length})</h2>
        <p>Articles awaiting your review before publication</p>
      </div>
      <div className="pending-articles-list">
        {pendingArticles.map(article => (
          <div key={article.id} className="pending-article-card" onClick={() => handleArticleClick(article)}>
            <div className="pending-article-header">
              <h3 className="pending-article-title">{article.title}</h3>
              <span className="pending-article-date">
                {new Date(article.date || article.published_at).toDateString()}
              </span>
            </div>
            <div className="pending-article-author">By {article.author}</div>
            <div className="pending-article-category">
              <span className="category-badge">{article.category}</span>
            </div>
            <p className="pending-article-excerpt">{article.excerpt || article.description}</p>
            <div className="pending-article-actions">
              <button className="review-button">Review Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingReviews;
  