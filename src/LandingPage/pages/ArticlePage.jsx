import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ArticlePage.css';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    fetch('https://collabbackend-z0kd.onrender.com/api/fetchednews/fetched-news/')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        const found = data.find(article => String(article.id) === String(id));
        setCurrentArticle(found || null);
      })
      .catch(err => console.error("Failed to fetch article:", err));
  }, [id]);

  const relatedArticles = articles
    .filter(article => String(article.id) !== String(id))
    .slice(0, 3);

  const fallbackArticle = {
    title: 'Article not found',
    category: 'Unknown',
    date: 'Unknown',
    author: 'Unknown',
    image: 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
    content: '<p>The requested article could not be found.</p>'
  };

  const article = currentArticle || fallbackArticle;

  return (
    <div className="article-page">
      <div className="article-container">
        <div className="article-header">
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-date">{article.date || 'May 2025'}</span>
            <span className="article-author">By {article.author || 'NepNews Desk'}</span>
          </div>
          <h1 className="article-title">{article.title}</h1>
        </div>

        <div className="article-featured-image">
          <img src={article.image} alt={article.title} />
        </div>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{
            __html: article.summary
              ? `<p>${article.summary}</p>` // fallback since API lacks `content`
              : article.content || fallbackArticle.content
          }}
        ></div>

        <div className="article-share">
          <h3>Share this article</h3>
          <div className="share-buttons">
            <button className="share-button facebook">Facebook</button>
            <button className="share-button twitter">Twitter</button>
            <button className="share-button whatsapp">WhatsApp</button>
          </div>
        </div>
      </div>

      <div className="related-articles">
        <h2>Related Articles</h2>
        <div className="related-articles-grid">
          {relatedArticles.map(related => (
            <a
              key={related.id}
              href="#"
              className="related-article-card"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/article/${related.id}`);
              }}
            >
              <div className="related-article-image">
                <img src={related.image} alt={related.title} />
              </div>
              <div className="related-article-content">
                <h3>{related.title}</h3>
                <div className="related-article-meta">
                  <span>{related.date || 'May 2025'}</span> | <span>{related.category || 'General'}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
