import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState([]);

  // Hardcoded sections to remain unchanged
  const RightSidebarNews = [
    { id: 'business1', title: "Prabhu Bank's 'Global Money Week 2025' rally in Burtibang" },
    { id: 'business2', title: "Premier International School restarts 'Hot Meals' campaign" },
    { id: 'business3', title: "'Colorful Exchange' to exchange Tata vehicles..." },
    { id: 'business4', title: "Prabhu Bank's 'Global Money Week 2025' rally in Burtibang" },
    { id: 'business5', title: "Premier International School restarts 'Hot Meals' campaign" },
    { id: 'business6', title: "'Colorful Exchange' to exchange Tata vehicles..." }
  ];

  const moreNews = [
    {
      id: 'more1',
      title: '200 people graduated from herald this year with AAA scholarship',
      date: '1 day ago',
      location: 'Nepal'
    },
    {
      id: 'more2',
      title: '200 people graduated from herald this year with AAA scholarship',
      date: '1 day ago',
      location: 'Nepal'
    },
    {
      id: 'more3',
      title: '200 people graduated from herald this year with AAA scholarship',
      date: '1 day ago',
      location: 'Nepal'
    },
    {
      id: 'more4',
      title: '200 people graduated from herald this year with AAA scholarship',
      date: '1 day ago',
      location: 'Nepal'
    },
    {
      id: 'more5',
      title: '200 people graduated from herald this year with AAA scholarship',
      date: '1 day ago',
      location: 'Nepal'
    }
  ];

  useEffect(() => {
    fetch('https://collabbackend-z0kd.onrender.com/api/fetchednews/fetched-news/')
      .then(res => res.json())
      .then(data => setNewsData(data))
      .catch(err => console.error("Error fetching news:", err));
  }, []);

  return (
    <div className="home-page">
      <div className="main-content">

        {/* Top News Section */}
        <div className="top-news-section">
          <div className="top-news-grid">
            {/* Left Sidebar */}
            <div className="left-sidebar">
              <div className="sidebar-content">
                {newsData.slice(0, 2).map(news => (
                  <div
                    key={news.id}
                    className="sidebar-news-item"
                    onClick={() => navigate(`/article/${news.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={news.image} alt={news.title} className="sidebar-news-image" />
                    <h3 className="sidebar-news-title">{news.title}</h3>
                    <p className="sidebar-news-summary">{news.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured News (Center) */}
            <div className="center-content">
              <img
                src="https://assets-cdn.ekantipur.com/uploads/source/ads/berger-flexobanner-970120-17112024081630.gif"
                alt="Banner"
                className="banner-image"
              />
              {newsData[2] && (
                <div
                  className="featured-news"
                  onClick={() => navigate(`/article/${newsData[2].id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="featured-news-content">
                    <h2 className="featured-title font-semibold">{newsData[2].title}</h2>
                    <img src={newsData[2].image} alt={newsData[2].title} className="featured-image" />
                    <p className="featured-summary">{newsData[2].summary}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar (Unchanged) */}
            <div className="right-sidebar">
              <div className="right-sidebar-news">
                {RightSidebarNews.map((news, index) => (
                  <React.Fragment key={news.id}>
                    <a
                      href="#"
                      className="right-sidebar-news-item"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/article/${news.id}`);
                      }}
                    >
                      {news.title}
                    </a>
                    {index < RightSidebarNews.length - 1 && <div className="business-divider"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal News Section */}
        <div className="horizontal-section">
          <div className="horizontal-grid">
            {newsData.slice(3, 5).map(news => (
              <div className="horizontal-card-container" key={news.id}>
                <a
                  href="#"
                  className="news-card news-card-horizontal"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/article/${news.id}`);
                  }}
                >
                  <div className="news-card-image-container">
                    <img src={news.image} alt={news.title} className="news-card-image" />
                  </div>
                  <div className="news-card-content">
                    <h3 className="news-card-title font-bold mb-2 text-2xl">{news.title}</h3>
                    <p className="news-card-summary text-justify">{news.summary}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Small News Cards Section */}
        <div className="FourNews-section">
          <div className="FourNews-grid">
            {newsData.slice(5, 9).map(news => (
              <div className="FourNews-card-container" key={news.id}>
                <a
                  href="#"
                  className="news-card news-card-small"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/article/${news.id}`);
                  }}
                >
                  <div className="news-card-image-container">
                    <img src={news.image} alt={news.title} className="news-card-image" />
                  </div>
                  <div className="news-card-content">
                    <h3 className="news-card-title font-bold mb-2">{news.title}</h3>
                    <p className="news-card-summary p-20">{news.summary}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Advertisement */}
        <div className="advertisement">
          <img
            src="https://assets-cdn.ekantipur.com/uploads/source/ads/970x120px-2-1942025052318.jpg"
            alt="Advertisement"
            className="ad-banner"
          />
        </div>

        {/* Repeated Horizontal Section */}
        <div className="horizontal-section">
          <div className="horizontal-grid">
            {newsData.slice(9, 11).map(news => (
              <div className="horizontal-card-container" key={news.id}>
                <a
                  href="#"
                  className="news-card news-card-horizontal"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/article/${news.id}`);
                  }}
                >
                  <div className="news-card-image-container">
                    <img src={news.image} alt={news.title} className="news-card-image" />
                  </div>
                  <div className="news-card-content">
                    <h3 className="news-card-title font-bold mb-2 text-2xl">{news.title}</h3>
                    <p className="news-card-summary text-justify">{news.summary}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* More News Section (Unchanged) */}
        <div className="more-news-section">
          <div className="more-news-divider"></div>
          <div className="more-news-header">
            <span>More News</span>
          </div>
          <div className="more-news-grid">
            {moreNews.map(news => (
              <a
                href="#"
                key={news.id}
                className="more-news-item"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/article/${news.id}`);
                }}
              >
                <h3 className="more-news-title">{news.title}</h3>
                <div className="more-news-meta">
                  {news.date} | {news.location}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
