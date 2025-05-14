import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserPage.css';
import Header from './Userheader';

const HomePage = () => {
  const navigate = useNavigate();

  const featuredNews = {
    id: 'featured1',
    title: 'This is what the flyover under construction in the balambu area looked like',
    summary: 'Kathmandu. The emergency and main tunnels of the Nagdhunga-Sisnekhola tunnel route have already been \'broken through\'. However, as other works are ongoing...',
    image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/62e0074312275e3ae366f9d0b53dba3df37a9729?placeholderIfAbsent=true',
    advert: 'https://assets-cdn.ekantipur.com/uploads/source/ads/berger-flexobanner-970120-17112024081630.gif'
  };

  const sidebarNews = [
    {
      id: 'sidebar1',
      title: 'Russia says sanctions must be lifted before Ukraine maritime ceasefire can start',
      summary: 'Moscow and Kyiv appear at odds over when and how the US-brokered deal will come into effect',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/29090ad227d60cd94c44087506fbd48d3a455c70?placeholderIfAbsent=true'
    },
    {
      id: 'sidebar2',
      title: 'Trump has blown up the world order - and left Europe\'s leaders scrabbling',
      summary: 'This is the gravest crisis for Western security since the end of World War Two. So which nations',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9bc236ff54fed341284eaaa4de933bd5963ea35a?placeholderIfAbsent=true'
    }
  ];

  const businessNews = [
    {
      id: 'business1',
      title: 'Prabhu Bank\'s \'Global Money Week 2025\' rally in Burtibang',
      variant: 'sidebar'
    },
    {
      id: 'business2',
      title: 'Premier International School restarts \'Hot Meals\' campaign',
      variant: 'sidebar'
    },
    {
      id: 'business3',
      title: '\'Colorful Exchange\' to exchange Tata vehicles for any brand of vehicle until Wednesday',
      variant: 'sidebar'
    },
    {
      id: 'business4',
      title: 'Prabhu Bank\'s \'Global Money Week 2025\' rally in Burtibang',
      variant: 'sidebar'
    },
    {
      id: 'business5',
      title: 'Premier International School restarts \'Hot Meals\' campaign',
      variant: 'sidebar'
    },
    {
      id: 'business6',
      title: '\'Colorful Exchange\' to exchange Tata vehicles for any brand of vehicle until Wednesday',
      variant: 'sidebar'
    }
  ];

  const sportsNews = [
    {
      id: 'sports1',
      title: 'APF enters semi-finals',
      summary: 'The departmental team Armed Police Force (APF) has entered the semi-finals of the first Lions Cup International Invitational Volleyball Tournament underway in Pokhara. APF defeated Gandaki Province 3-2 in the first match held at the Multi-Purpose Covered Hall at Pokhara Stadium on Saturday to reach the last four. APF, which lost the first set 19-25, won the second set 25-18.',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9b90e68c0cf53502663ef73dd99213d373315fe4?placeholderIfAbsent=true',
      variant: 'horizontal'
    },
    {
      id: 'sports2',
      title: 'Tournament continues',
      summary: 'The departmental team Armed Police Force (APF) has entered the semi-finals of the first Lions Cup International Invitational Volleyball Tournament underway in Pokhara. APF defeated Gandaki Province 3-2 in the first match held at the Multi-Purpose Covered Hall at Pokhara Stadium on Saturday to reach the last four. APF, which lost the first set 19-25, won the second set 25-18.',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/efac119d715aa9f888ef65423350989555fcb743?placeholderIfAbsent=true',
      variant: 'horizontal'
    }
  ];

  const politicalNews = [
    {
      id: 'political1',
      title: 'We have moved forward with the determination to become the first party: Chairman Dahal',
      summary: 'Kathmandu - Maoist Center Chairman Pushpa Kamal Dahal has said that the party\'s determination to become the first party in the upcoming elections is being strengthened by strengthening its relationship with the people.',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
      variant: 'small'
    },
    {
      id: 'political2',
      title: 'We have moved forward with the determination to become the first party: Chairman Dahal',
      summary: 'Kathmandu - Maoist Center Chairman Pushpa Kamal Dahal has said that the party\'s determination to become the first party in the upcoming elections is being strengthened by strengthening its relationship with the people.',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
      variant: 'small'
    },
    {
      id: 'political3',
      title: 'We have moved forward with the determination to become the first party: Chairman Dahal',
      summary: 'Kathmandu - Maoist Center Chairman Pushpa Kamal Dahal has said that the party\'s determination to become the first party in the upcoming elections is being strengthened by strengthening its relationship with the people.',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
      variant: 'small'
    },
    {
      id: 'political4',
      title: 'We have moved forward with the determination to become the first party: Chairman Dahal',
      summary: 'Kathmandu - Maoist Center Chairman Pushpa Kamal Dahal has said that the party\'s determination to become the first party in the upcoming elections is being strengthened by strengthening its relationship with the people.',
      image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
      variant: 'small'
    }
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

  const NewsCard = ({ id, title, summary, image, variant = 'standard' }) => {
    const getCardClass = () => {
      switch (variant) {
        case 'featured': return 'news-card-featured';
        case 'sidebar': return 'news-card-sidebar';
        case 'horizontal': return 'news-card-horizontal';
        case 'small': return 'news-card-small';
        default: return 'news-card-standard';
      }
    };

    return (
      <a
        href="#"
        className={`news-card ${getCardClass()}`}
        onClick={(e) => {
          e.preventDefault();
          navigate(`/article/${id}`);
        }}
      >
        {image && (
          <div className="news-card-image-container">
            <img src={image} alt={title} className="news-card-image" />
          </div>
        )}
        <div className="news-card-content">
          <h3 className="news-card-title">{title}</h3>
          {summary && <p className="news-card-summary">{summary}</p>}
        </div>
      </a>
    );
  };

  return (
    <div className="home-page">
        <Header
      username="John Doe"
      onLogout={() => {
        localStorage.clear();
        window.location.href = '/login';
      }}
    />
      <div className="user-main-content">

        {/* Top News Section */}
        <div className="top-news-section">
          <div className="top-news-grid">
            <div className="left-sidebar">
              <div className="sidebar-content">
                {sidebarNews.map(news => (
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

            <div className="center-content">

              <div
                className="featured-news"
                onClick={() => navigate(`/article/${featuredNews.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="featured-news-content">
                  <h2 className="featured-title font-semibold">{featuredNews.title}</h2>
                  <img src={featuredNews.image} alt={featuredNews.title} className="featured-image" />
                  <p className="featured-summary">{featuredNews.summary}</p>
                </div>
              </div>
            </div>

            <div className="right-sidebar">
              <div className="business-news">
                {businessNews.map((news, index) => (
                  <React.Fragment key={news.id}>
                    <a
                      href="#"
                      className="business-news-item"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/article/${news.id}`);
                      }}
                    >
                      {news.title}
                    </a>
                    {index < businessNews.length - 1 && <div className="business-divider"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sports Section */}
        <div className="sports-section">
          <div className="sports-grid">
            {sportsNews.map(news => (
              <div className="sports-card-container" key={news.id}>
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

        {/* Political Section */}
        <div className="political-section">
          <div className="political-grid">
            {politicalNews.map(news => (
              <div className="political-card-container" key={news.id}>
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
        {/* Repeated Sports Section */}
        <div className="sports-section">
          <div className="sports-grid">
            {sportsNews.map(news => (
              <div className="sports-card-container" key={`repeat-${news.id}`}>
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

        {/* More News Section */}
        <div className="more-news-section">
          <div className="more-news-divider"></div>
          <div className="more-news-header">
            <span>More News</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/c0ebeeb75260367b49e00a6a096e395ab7a67de3?placeholderIfAbsent=true" alt="Arrow" className="more-news-arrow" />
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
