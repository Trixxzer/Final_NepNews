import React, { useState } from 'react';
import './ArticleEditor.css';

const ArticleEditor = ({ setShowNewArticle, setActiveView, articleToEdit = null }) => {
  const isEditing = !!articleToEdit;
  
  const [article, setArticle] = useState({
    title: articleToEdit?.title || '',
    category: articleToEdit?.category || '',
    content: articleToEdit?.content || '',
    excerpt: articleToEdit?.excerpt || '',
    status: articleToEdit?.status || 'draft'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the article to your backend
    console.log('Saving article:', article);
    
    // Close the editor and return to dashboard
    setShowNewArticle(false);
    setActiveView('dashboard');
  };

  const handleCancel = () => {
    setShowNewArticle(false);
  };

  return (
    <div className="article-editor-overlay">
      <div className="article-editor-modal">
        <div className="article-editor-header">
          <h2>{isEditing ? 'Edit Article' : 'Create New Article'}</h2>
          <button className="close-button" onClick={handleCancel}>
            <i className="ti ti-x"></i>
          </button>
        </div>
        
        <form className="article-editor-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Article Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={article.title}
              onChange={handleChange}
              placeholder="Enter article title"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={article.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Technology">Technology</option>
              <option value="Politics">Politics</option>
              <option value="Environment">Environment</option>
              <option value="Business">Business</option>
              <option value="Science">Science</option>
              <option value="Health">Health</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="excerpt">Article Excerpt</label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={article.excerpt}
              onChange={handleChange}
              placeholder="Write a brief summary of the article"
              rows="3"
              required
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="content">Article Content</label>
            <textarea
              id="content"
              name="content"
              value={article.content}
              onChange={handleChange}
              placeholder="Write your article content here"
              rows="12"
              required
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={article.status}
              onChange={handleChange}
            >
              <option value="draft">Draft</option>
              <option value="pending">Submit for Review</option>
              {isEditing && article.status === 'published' && (
                <option value="published">Published</option>
              )}
            </select>
          </div>
          
          <div className="article-editor-actions">
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="save-button">
              {article.status === 'draft' ? 'Save Draft' : 'Submit for Review'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleEditor;