import React, { useState } from 'react';
import './DraftsPage.css';

function AuthorDraftsPage() {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage('');

  const token = localStorage.getItem('token');
  if (!token) {
    setMessage('You are not logged in.');
    setLoading(false);
    return;
  }

  const categoryMap = {
    technology: 1,
    politics: 2,
    health: 3,
    business: 4,
    science: 5
  };

  const categoryId = categoryMap[category.toLowerCase()];
  if (!categoryId) {
    setMessage("Please select a valid category.");
    setLoading(false);
    return;
  }

  try {
    const response = await fetch('https://collabbackend-z0kd.onrender.com/api/author/articles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({
        title: articleTitle,
        content: articleContent,
        category_id: categoryId
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Server error:", data);
      throw new Error(data?.detail || 'Failed to submit article');
    }

    setMessage('✅ Article submitted for review!');
    setArticleTitle('');
    setArticleContent('');
    setCategory('');
  } catch (err) {
    console.error(err);
    setMessage('❌ Error submitting article.');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="author-drafts-page">
      <div className="author-editor-container">
        <div className="author-editor-header">
          <h2>Create New Article</h2>
        </div>
        <form className="author-article-form" onSubmit={handleSubmit}>
          <div className="author-form-group">
            <label htmlFor="article-title">Article Title</label>
            <input 
              type="text" 
              id="article-title" 
              value={articleTitle}
              onChange={(e) => setArticleTitle(e.target.value)}
              required
              placeholder="Enter a compelling title"
            />
          </div>

          <div className="author-form-group">
            <label htmlFor="article-category">Category</label>
            <select 
              id="article-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="politics">Politics</option>
              <option value="health">Health</option>
              <option value="business">Business</option>
              <option value="science">Science</option>
            </select>
          </div>

          <div className="author-form-group">
            <label htmlFor="article-content">Article Content</label>
            <textarea 
              id="article-content" 
              value={articleContent}
              onChange={(e) => setArticleContent(e.target.value)}
              placeholder="Write your article here..."
              rows="12"
              required
            ></textarea>
          </div>

          <div className="author-form-actions">
            <button type="submit" className="author-submit-review-btn" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit for Review'}
            </button>
          </div>

          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default AuthorDraftsPage;
