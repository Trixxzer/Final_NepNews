import React from 'react';
import './ArticlesTable.css';

const ArticlesTable = ({ articles = [], onArticleClick }) => {
  const getStatusClass = (status) => {
    return status === 'published' ? 'status-published' : 'status-pending';
  };

  const handleActionClick = (article, e) => {
    e.stopPropagation();
    onArticleClick(article);
  };

  return (
    <div className="articles-table-container">
      <div className="articles-table-title">Recent Articles</div>
      <div className="articles-table">
        <div className="articles-table-header">
          <div className="articles-table-cell">Title</div>
          <div className="articles-table-cell">Author</div>
          <div className="articles-table-cell">Category</div>
          <div className="articles-table-cell">Date</div>
          <div className="articles-table-cell">Actions</div>
        </div>

        {articles.map((article) => (
          <div
            key={article.id}
            className="articles-table-row"
            onClick={() => onArticleClick(article)}
          >
            <div className="articles-table-cell">{article.title}</div>
            <div className="articles-table-cell">{article.author}</div>
            <div className="articles-table-cell category-cell">
              <span className={getStatusClass(article.status)}>
                {article.category}
              </span>
            </div>
            <div className="articles-table-cell">{article.date}</div>
            <div className="articles-table-cell action-cell">
              <button
                className={`action-button ${article.status === 'published' ? 'view' : 'review'}`}
                onClick={(e) => handleActionClick(article, e)}
              >
                {article.status === 'published' ? 'View' : 'Review'}
              </button>
            </div>
          </div>
        ))}

        {articles.length === 0 && (
          <div className="articles-table-empty">No articles available.</div>
        )}
      </div>
    </div>
  );
};

export default ArticlesTable;
