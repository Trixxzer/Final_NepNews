import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/SidebarEditor";
import Header from "../components/HeaderEditor";
import StatCard from "../components/StatCard";
import ArticlesTable from "../components/ArticlesTable";
import UserProfile from "../components/UserProfile";
import PendingReviews from "../components/PendingReviews";
import PublishedArticles from "../components/PublishedArticles";
import ArticleDetails from "../components/ArticleDetails";
import { Newspaper, Check, Clock } from "lucide-react";
import "./EditorDashboard.css";

const EditorDashboard = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    pending: 0,
    recent: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true }); // ✅ Protects back button too
      return;
    }

    const fetchEditorStats = async () => {
      try {
        const response = await fetch(
          "https://collabbackend-z0kd.onrender.com/accounts/editor/dashboard/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch editor dashboard data");
        }

        const data = await response.json();

        setStats({
          total: data.total_articles ?? 0,
          published: data.published_articles ?? 0,
          pending: data.pending_reviews ?? 0,
          recent: data.recent_articles ?? [],
        });
      } catch (error) {
        console.error("Dashboard error:", error);
      }
    };

    fetchEditorStats();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true }); // ✅ Secure logout
  };

  const renderContent = () => {
    switch (activeView) {
      case "pending":
        return (
          <PendingReviews
            setActiveView={setActiveView}
            setSelectedArticle={setSelectedArticle}
          />
        );
      case "published":
        return (
          <PublishedArticles
            setActiveView={setActiveView}
            setSelectedArticle={setSelectedArticle}
          />
        );
      case "article-details":
        return (
          <ArticleDetails
            article={selectedArticle}
            setActiveView={setActiveView}
          />
        );
      case "dashboard":
      default:
        return (
          <>
            <Header
              title="Editor Dashboard"
              username={
                JSON.parse(localStorage.getItem("user"))?.username || "Editor"
              }
              onLogout={handleLogout}
            />

            <div className="editor-stats-container">
              <StatCard
                title="Total Articles"
                value={(stats.total ?? 0).toString()}
                changeValue="12%"
                changeDirection="up"
                icon={Newspaper}
                iconBgColor="#DBEAFE"
                iconColor="#2563EB"
              />
              <StatCard
                title="Published Articles"
                value={(stats.published ?? 0).toString()}
                changeValue="8%"
                changeDirection="up"
                icon={Check}
                iconBgColor="#DBEAFE"
                iconColor="#059669"
              />
              <StatCard
                title="Pending Reviews"
                value={(stats.pending ?? 0).toString()}
                changeValue="24%"
                changeDirection="up"
                icon={Clock}
                iconBgColor="#DBEAFE"
                iconColor="#D97706"
              />
            </div>

            <ArticlesTable
              articles={stats.recent ?? []}
              onArticleClick={(article) => {
                setSelectedArticle(article);
                setActiveView("article-details");
              }}
            />
          </>
        );
    }
  };

  return (
    <div className="editor-dashboard-container">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <div className="editor-dashboard-content">{renderContent()}</div>
      {showProfile && <UserProfile setShowProfile={setShowProfile} />}
    </div>
  );
};

export default EditorDashboard;
