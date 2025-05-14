import React from 'react';
import './CategoryPage.css';

const CategoryPage = ({ category, onArticleClick }) => {
  // Mock data for different categories
  const categoryData = {
    news: {
      title: 'Latest News',
      featuredNews: {
        id: 'news-featured',
        title: 'Breaking: Major international summit to address climate change',
        summary: 'World leaders are set to meet next month to discuss urgent measures to combat global warming and reduce carbon emissions.',
        image: 'https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/6037/live/b41eb1e0-2e2a-11f0-8f57-b7237f6a66e6.jpg',
        advert:'https://assets-cdn.ekantipur.com/uploads/source/ads/berger-flexobanner-970120-17112024081630.gif'
      },
      sidebarNews: [
        {
          id: 'news1',
          title: 'Russia says sanctions must be lifted before Ukraine maritime ceasefire can start',
          summary: 'Moscow and Kyiv appear at odds over when and how the US-brokered deal will come into effect',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/29090ad227d60cd94c44087506fbd48d3a455c70?placeholderIfAbsent=true'
        },
        {
          id: 'news2',
          title: 'Trump has blown up the world order - and left Europe\'s leaders scrabbling',
          summary: 'This is the gravest crisis for Western security since the end of World War Two. So which nations',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9bc236ff54fed341284eaaa4de933bd5963ea35a?placeholderIfAbsent=true'
        }
      ],
      businessNews: [
        { id: 'news-biz1', title: 'Stock markets reach new highs amid economic recovery' },
        { id: 'news-biz2', title: 'Central bank announces new interest rate policy' },
        { id: 'news-biz3', title: 'Tech companies report record quarterly profits' },
        { id: 'news-biz4', title: 'Oil prices stabilize after recent fluctuations' },
        { id: 'news-biz5', title: 'New trade agreement signed between major economies' },
        { id: 'news-biz6', title: 'Startup funding reaches unprecedented levels' }
      ],
      sportsNews: [
        {
          id: 'news-sports1',
          title: 'National team prepares for upcoming tournament',
          summary: 'The squad has been training intensively under their new coach ahead of next month\'s competition.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9b90e68c0cf53502663ef73dd99213d373315fe4?placeholderIfAbsent=true',
          variant: 'horizontal'
        },
        {
          id: 'news-sports2',
          title: 'Record-breaking performance at athletics championship',
          summary: 'Multiple national records were broken during the weekend\'s championship events.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/efac119d715aa9f888ef65423350989555fcb743?placeholderIfAbsent=true',
          variant: 'horizontal'
        }
      ],
      politicalNews: [
        {
          id: 'news-pol1',
          title: 'Parliament debates new legislation on healthcare reform',
          summary: 'The proposed bill aims to improve access to medical services across the country.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'news-pol2',
          title: 'Opposition party announces new leadership team',
          summary: 'Following recent elections, the party has restructured its top positions.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'news-pol3',
          title: 'Government unveils infrastructure development plan',
          summary: 'The five-year plan includes major investments in transportation and energy sectors.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'news-pol4',
          title: 'International relations committee to visit neighboring countries',
          summary: 'The diplomatic mission aims to strengthen regional cooperation on security issues.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        }
      ]
    },
    business: {
      title: 'Business News',
      featuredNews: {
        id: 'biz-featured',
        title: 'Major merger creates new industry giant',
        summary: 'The $50 billion deal combines two of the sector\'s leading companies, reshaping the competitive landscape.',
        image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/0de5/live/1e3db950-2e48-11f0-b26b-ab62c890638b.jpg.webp',
        advert:'https://assets-cdn.ekantipur.com/uploads/source/ads/berger-flexobanner-970120-17112024081630.gif'
      },
      sidebarNews: [
        {
          id: 'biz1',
          title: 'Tech startup secures record funding round',
          summary: 'The AI-focused company has attracted significant investor interest with its innovative technology.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/29090ad227d60cd94c44087506fbd48d3a455c70?placeholderIfAbsent=true'
        },
        {
          id: 'biz2',
          title: 'National economy shows signs of strong recovery',
          summary: 'Latest economic indicators suggest growth is accelerating faster than analysts predicted.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9bc236ff54fed341284eaaa4de933bd5963ea35a?placeholderIfAbsent=true'
        }
      ],
      businessNews: [
        { id: 'biz-side1', title: 'Prabhu Bank\'s \'Global Money Week 2025\' rally in Burtibang' },
        { id: 'biz-side2', title: 'Premier International School restarts \'Hot Meals\' campaign' },
        { id: 'biz-side3', title: '\'Colorful Exchange\' to exchange Tata vehicles for any brand of vehicle until Wednesday' },
        { id: 'biz-side4', title: 'New cryptocurrency regulations announced by central bank' },
        { id: 'biz-side5', title: 'Major retailer expands into international markets' },
        { id: 'biz-side6', title: 'Supply chain innovations reduce costs for manufacturing sector' }
      ],
      sportsNews: [
        {
          id: 'biz-sports1',
          title: 'Sports marketing deals reach new heights',
          summary: 'Companies are investing record amounts in sports sponsorships and athlete endorsements.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9b90e68c0cf53502663ef73dd99213d373315fe4?placeholderIfAbsent=true',
          variant: 'horizontal'
        },
        {
          id: 'biz-sports2',
          title: 'Stadium renovation project secures funding',
          summary: 'The $200 million project will modernize facilities and increase capacity for major events.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/efac119d715aa9f888ef65423350989555fcb743?placeholderIfAbsent=true',
          variant: 'horizontal'
        }
      ],
      politicalNews: [
        {
          id: 'biz-pol1',
          title: 'New tax incentives for small businesses announced',
          summary: 'The government program aims to stimulate entrepreneurship and job creation.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'biz-pol2',
          title: 'Trade association lobbies for regulatory changes',
          summary: 'Industry leaders are seeking modifications to recently implemented regulations.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'biz-pol3',
          title: 'Economic forum brings together business and political leaders',
          summary: 'The annual event focuses on collaboration between public and private sectors.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'biz-pol4',
          title: 'Foreign investment regulations updated',
          summary: 'New policies aim to attract international capital while protecting strategic industries.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        }
      ]
    },
    sports: {
      title: 'Sports News',
      featuredNews: {
        id: 'sports-featured',
        title: 'National team wins international championship',
        summary: 'In a thrilling final match, the team secured victory with a last-minute goal against the defending champions.',
        image: 'https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/vivo/live/images/2025/5/11/5f6fe527-feeb-4d73-bbf5-3ba989964ea0.jpg.webp',
        advert:'https://assets-cdn.ekantipur.com/uploads/source/ads/berger-flexobanner-970120-17112024081630.gif'
      },
      sidebarNews: [
        {
          id: 'sports1',
          title: 'Star player signs record-breaking contract',
          summary: 'The five-year deal makes them the highest-paid athlete in the league\'s history.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/29090ad227d60cd94c44087506fbd48d3a455c70?placeholderIfAbsent=true'
        },
        {
          id: 'sports2',
          title: 'Olympic committee announces host city for 2036 Games',
          summary: 'After a competitive bidding process, the prestigious event will be held in a developing nation for the first time.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9bc236ff54fed341284eaaa4de933bd5963ea35a?placeholderIfAbsent=true'
        }
      ],
      businessNews: [
        { id: 'sports-biz1', title: 'Major sponsorship deal for national league' },
        { id: 'sports-biz2', title: 'Sports equipment manufacturer reports record sales' },
        { id: 'sports-biz3', title: 'New streaming service acquires broadcasting rights' },
        { id: 'sports-biz4', title: 'Athletes launch investment fund for sports startups' },
        { id: 'sports-biz5', title: 'Stadium naming rights sold in multi-year agreement' },
        { id: 'sports-biz6', title: 'Sports tourism boosts local economies nationwide' }
      ],
      sportsNews: [
        {
          id: 'sports-main1',
          title: 'APF enters semi-finals',
          summary: 'The departmental team Armed Police Force (APF) has entered the semi-finals of the first Lions Cup International Invitational Volleyball Tournament underway in Pokhara.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9b90e68c0cf53502663ef73dd99213d373315fe4?placeholderIfAbsent=true',
          variant: 'horizontal'
        },
        {
          id: 'sports-main2',
          title: 'Tournament continues',
          summary: 'APF defeated Gandaki Province 3-2 in the first match held at the Multi-Purpose Covered Hall at Pokhara Stadium on Saturday to reach the last four.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/efac119d715aa9f888ef65423350989555fcb743?placeholderIfAbsent=true',
          variant: 'horizontal'
        }
      ],
      politicalNews: [
        {
          id: 'sports-pol1',
          title: 'Government increases funding for sports development',
          summary: 'The new budget allocates significant resources to grassroots programs and elite athlete training.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'sports-pol2',
          title: 'International sporting event to be hosted next year',
          summary: 'Preparations are underway for the major competition that will bring athletes from over 100 countries.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'sports-pol3',
          title: 'Sports minister announces new anti-doping measures',
          summary: 'The comprehensive program aims to ensure fair competition at all levels of sport.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'sports-pol4',
          title: 'National sports policy updated after public consultation',
          summary: 'The revised framework emphasizes inclusivity and accessibility for all citizens.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        }
      ]
    },
    entertainment: {
      title: 'Entertainment News',
      featuredNews: {
        id: 'ent-featured',
        title: 'Blockbuster movie breaks box office records',
        summary: 'The highly anticipated film has surpassed all expectations, becoming the highest-grossing release of the year.',
        image: 'https://ichef.bbci.co.uk/images/ic/1024xn/p0l99h3z.jpg.webpe',
        advert:'https://assets-cdn.ekantipur.com/uploads/source/ads/berger-flexobanner-970120-17112024081630.gif'
      },
      sidebarNews: [
        {
          id: 'ent1',
          title: 'Award-winning actor announces retirement',
          summary: 'After a distinguished career spanning four decades, the beloved star plans to focus on philanthropy.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/29090ad227d60cd94c44087506fbd48d3a455c70?placeholderIfAbsent=true'
        },
        {
          id: 'ent2',
          title: 'Music festival lineup revealed for summer event',
          summary: 'The annual celebration will feature an impressive roster of international and local artists.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9bc236ff54fed341284eaaa4de933bd5963ea35a?placeholderIfAbsent=true'
        }
      ],
      businessNews: [
        { id: 'ent-biz1', title: 'Streaming platform acquires major studio' },
        { id: 'ent-biz2', title: 'Celebrity launches new lifestyle brand' },
        { id: 'ent-biz3', title: 'Music industry reports growth in digital revenue' },
        { id: 'ent-biz4', title: 'Gaming company announces innovative new console' },
        { id: 'ent-biz5', title: 'Virtual reality entertainment center opens nationwide' },
        { id: 'ent-biz6', title: 'Book publishing sees unexpected surge in print sales' }
      ],
      sportsNews: [
        {
          id: 'ent-sports1',
          title: 'Celebrity charity sports event raises millions',
          summary: 'The star-studded tournament attracted widespread attention and generous donations for worthy causes.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9b90e68c0cf53502663ef73dd99213d373315fe4?placeholderIfAbsent=true',
          variant: 'horizontal'
        },
        {
          id: 'ent-sports2',
          title: 'Documentary series on legendary team premieres',
          summary: 'The critically acclaimed production offers unprecedented behind-the-scenes access to the championship season.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/efac119d715aa9f888ef65423350989555fcb743?placeholderIfAbsent=true',
          variant: 'horizontal'
        }
      ],
      politicalNews: [
        {
          id: 'ent-pol1',
          title: 'New movie explores historical political events',
          summary: 'The film has generated discussion for its portrayal of controversial moments in national history.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'ent-pol2',
          title: 'Celebrities campaign for environmental legislation',
          summary: 'High-profile entertainers are using their platforms to advocate for climate action.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'ent-pol3',
          title: 'Arts funding increased in new government budget',
          summary: 'The cultural sector will benefit from expanded support for diverse creative initiatives.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'ent-pol4',
          title: 'Television series on political drama wins multiple awards',
          summary: 'Critics and audiences have praised the show for its nuanced portrayal of governance challenges.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        }
      ]
    },
    others: {
      title: 'Articles from our Authors',
      featuredNews: {
        id: 'other-featured',
        title: 'Scientific breakthrough promises medical revolution',
        summary: 'Researchers have developed a new technology that could transform treatment options for multiple conditions.',
        image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/62e0074312275e3ae366f9d0b53dba3df37a9729?placeholderIfAbsent=true'
      },
      sidebarNews: [
        {
          id: 'other1',
          title: 'Archaeological discovery reveals ancient civilization',
          summary: 'The findings are challenging previous understanding of historical development in the region.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/29090ad227d60cd94c44087506fbd48d3a455c70?placeholderIfAbsent=true'
        },
        {
          id: 'other2',
          title: 'Space exploration mission returns with valuable data',
          summary: 'Scientists are analyzing the information that could provide insights into planetary formation.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9bc236ff54fed341284eaaa4de933bd5963ea35a?placeholderIfAbsent=true'
        }
      ],
      businessNews: [
        { id: 'other-biz1', title: 'Innovative agricultural techniques boost crop yields' },
        { id: 'other-biz2', title: 'Educational technology startup transforms learning' },
        { id: 'other-biz3', title: 'Healthcare innovations reduce treatment costs' },
        { id: 'other-biz4', title: 'Renewable energy investments reach record levels' },
        { id: 'other-biz5', title: 'Transportation revolution promises greener cities' },
        { id: 'other-biz6', title: 'Artificial intelligence applications expand across industries' }
      ],
      sportsNews: [
        {
          id: 'other-sports1',
          title: 'Adaptive sports program celebrates anniversary',
          summary: 'The initiative has helped thousands of people with disabilities participate in competitive athletics.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/9b90e68c0cf53502663ef73dd99213d373315fe4?placeholderIfAbsent=true',
          variant: 'horizontal'
        },
        {
          id: 'other-sports2',
          title: 'Traditional games festival preserves cultural heritage',
          summary: 'Communities gathered to celebrate and compete in sports that have been practiced for centuries.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/efac119d715aa9f888ef65423350989555fcb743?placeholderIfAbsent=true',
          variant: 'horizontal'
        }
      ],
      politicalNews: [
        {
          id: 'other-pol1',
          title: 'Educational reform bill passes after lengthy debate',
          summary: 'The comprehensive legislation aims to modernize curriculum and improve teacher support.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'other-pol2',
          title: 'Healthcare access program expands to rural areas',
          summary: 'The initiative will bring medical services to previously underserved communities.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'other-pol3',
          title: 'Environmental protection measures strengthened',
          summary: 'New regulations aim to preserve natural resources and reduce pollution nationwide.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        },
        {
          id: 'other-pol4',
          title: 'Digital infrastructure investment announced',
          summary: 'The program will improve internet connectivity and technological resources across the country.',
          image: 'https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/96e6c388499b49009442d5e9fe3f0bff01ec7dd3?placeholderIfAbsent=true',
          variant: 'small'
        }
      ]
    }
  };

  // Default to news if category doesn't exist in our data
  const currentCategory = categoryData[category] || categoryData.news;
  
  return (
    <div className="home-page">
      <div className="category-header">
        <h1 className="category-title">{currentCategory.title}</h1>
      </div>
      
      <div className="main-content">
        <div className="top-news-section">
          <div className="top-news-grid">
            <div className="left-sidebar">
              <div className="sidebar-content">
                {currentCategory.sidebarNews.map(news => (
                  <div 
                    className="sidebar-news-item" 
                    key={news.id}
                    onClick={() => onArticleClick(news.id)}
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
                onClick={() => onArticleClick(currentCategory.featuredNews.id)}
                style={{ cursor: 'pointer' }}
              >
                <img src={currentCategory.featuredNews.advert} alt="Banner" className="banner-image" />
                <div className="featured-news-content">
                  <h2 className="featured-title">{currentCategory.featuredNews.title}</h2>
                  <img src={currentCategory.featuredNews.image} alt={currentCategory.featuredNews.title} className="featured-image" />
                  <p className="featured-summary">{currentCategory.featuredNews.summary}</p>
                </div>
              </div>
            </div>
            
            <div className="right-sidebar">
              <div className="business-news">
                {currentCategory.businessNews.map((news, index) => (
                  <React.Fragment key={news.id}>
                    <a 
                      href="#" 
                      className="business-news-item"
                      onClick={(e) => {
                        e.preventDefault();
                        onArticleClick(news.id);
                      }}
                    >
                      {news.title}
                    </a>
                    {index < currentCategory.businessNews.length - 1 && <div className="business-divider"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="sports-section">
          <div className="sports-grid">
            {currentCategory.sportsNews.map(news => (
              <div className="sports-card-container" key={news.id}>
                <a 
                  href="#" 
                  className="news-card news-card-horizontal"
                  onClick={(e) => {
                    e.preventDefault();
                    onArticleClick(news.id);
                  }}
                >
                  <div className="news-card-image-container">
                    <img src={news.image} alt={news.title} className="news-card-image" />
                  </div>
                  <div className="news-card-content">
                    <h3 className="news-card-title">{news.title}</h3>
                    <p className="news-card-summary">{news.summary}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="political-section">
          <div className="political-grid">
            {currentCategory.politicalNews.map(news => (
              <div className="political-card-container" key={news.id}>
                <a 
                  href="#" 
                  className="news-card news-card-small"
                  onClick={(e) => {
                    e.preventDefault();
                    onArticleClick(news.id);
                  }}
                >
                  <div className="news-card-image-container">
                    <img src={news.image} alt={news.title} className="news-card-image" />
                  </div>
                  <div className="news-card-content">
                    <h3 className="news-card-title">{news.title}</h3>
                    <p className="news-card-summary">{news.summary}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <div className="advertisement">
          <img src="https://cdn.builder.io/api/v1/image/assets/0cd8f8442cb540f2ac86cc4fd1eefba2/60d1307bd5485d1e7dc14a87aa49c78302787045?placeholderIfAbsent=true" alt="Advertisement" className="ad-banner" />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;