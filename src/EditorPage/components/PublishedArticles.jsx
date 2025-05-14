import React, { useEffect, useState } from 'react';
import './PublishedArticles.css';

const PublishedArticles = ({ setActiveView, setSelectedArticle }) => {
  const [publishedArticles, setPublishedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setActiveView('article-details');
  };

  useEffect(() => {
    const fetchPublishedArticles = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(
          'https://collabbackend-z0kd.onrender.com/accounts/editor/published-articles/',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error('Failed to fetch published articles');

        const data = await response.json();
        setPublishedArticles(data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPublishedArticles();
  }, []);

  if (loading) return <div>Loading published articles...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="published-articles">
      <div className="published-articles-header">
        <h2>Published Articles ({publishedArticles.length})</h2>
        <p>Articles that have been reviewed and published</p>
      </div>
      <div className="published-articles-list">
        {publishedArticles.map((article) => (
          <div
            key={article.id}
            className="published-article-card"
            onClick={() => handleArticleClick(article)}
          >
            <div className="published-article-header">
              <h3 className="published-article-title">{article.title}</h3>
              <span className="published-article-date">
                {new Date(article.published_at || article.date).toDateString()}
              </span>
            </div>
            <div className="published-article-author">By {article.author}</div>
            <div className="published-article-category">
              <span className="category-badge published">{article.category}</span>
            </div>
            <p className="published-article-excerpt">{article.excerpt || article.description}</p>
            <div className="published-article-stats">
              <div className="stat">
                <i className="ti ti-eye"></i>
                <span>{article.views || 0} views</span>
              </div>
              <div className="stat">
                <i className="ti ti-message"></i>
                <span>{article.comments || 0} comments</span>
              </div>
            </div>
            <div className="published-article-actions">
              <button className="view-button">View Article</button>
              <button className="edit-button">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublishedArticles;
