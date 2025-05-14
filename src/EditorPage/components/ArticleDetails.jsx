import React, { useState } from "react";
import "./ArticleDetails.css";

const ArticleDetails = ({ article, setActiveView }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: article.title,
    category: article.category,
    content: article.content || ""
  });

  const token = localStorage.getItem("token");

  const goBack = () => {
    setActiveView(article.status === "published" ? "published" : "pending");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const approveArticle = async () => {
    try {
      const res = await fetch(
        `https://collabbackend-z0kd.onrender.com/accounts/editor/article/${article.id}/approve/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          }
        }
      );
      if (!res.ok) throw new Error("Failed to approve article");
      alert("Article approved and published!");
      goBack();
    } catch (err) {
      alert(err.message);
    }
  };

  const requestRevision = async () => {
    try {
      const res = await fetch(
        `https://collabbackend-z0kd.onrender.com/accounts/editor/article/${article.id}/request-revision/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          }
        }
      );
      if (!res.ok) throw new Error("Failed to request revision");
      alert("Revision requested.");
      goBack();
    } catch (err) {
      alert(err.message);
    }
  };

  const unpublishArticle = async () => {
    try {
      const res = await fetch(
        `https://collabbackend-z0kd.onrender.com/accounts/editor/article/${article.id}/unpublish/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`
          }
        }
      );
      if (!res.ok) throw new Error("Failed to unpublish article");
      alert("Article unpublished.");
      goBack();
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Saving edited article... (backend integration pending)");
    setIsEditing(false);
  };

  return (
    <div className="article-details">
      <div className="article-details-header">
        <button className="back-button" onClick={goBack}>
          <i className="ti ti-arrow-left"></i> Back
        </button>
        <div className="article-status">
          <span
            className={`status-badge ${
              article.status === "published" ? "published" : "pending"
            }`}
          >
            {article.status === "published" ? "Published" : "Pending Review"}
          </span>
        </div>
      </div>

      <div className="article-details-content">
        {!isEditing ? (
          <>
            <h1 className="article-title">{form.title}</h1>
            <div className="article-meta">
              <div className="article-author">By {article.author}</div>
              <div className="article-date">{article.date}</div>
              <div className="article-category">
                <span className="category-badge">{form.category}</span>
              </div>
            </div>
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: form.content }}
            />
          </>
        ) : (
          <form className="edit-article-form" onSubmit={handleFormSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
            </label>
            <label>
              Category:
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleChange}
              />
            </label>
            <label>
              Content:
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                rows={10}
              />
            </label>
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>

      <div className="article-actions">
        {article.status === "pending" ? (
          <>
            <button className="approve-button" onClick={approveArticle}>
              Approve & Publish
            </button>
            <button className="reject-button" onClick={requestRevision}>
              Request Revisions
            </button>
          </>
        ) : (
          <>
            <button className="edit-button" onClick={handleEditToggle}>
              {isEditing ? "Cancel Edit" : "Edit Article"}
            </button>
            <button className="unpublish-button" onClick={unpublishArticle}>
              Unpublish
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ArticleDetails;
