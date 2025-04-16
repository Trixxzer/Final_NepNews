import React, { useState, useEffect } from 'react';
import './FeaturedNews.css';
import newsApi from '../services/api';

const FeaturedNews = () => {
  const [featuredArticle, setFeaturedArticle] = useState({
    title: "Preparations to unify parties led by Baburam, CK and Resham Chaudhary",
    image: "https://npcdn.ratopati.com/media/news/gyanendra-bibas_iRrnXEroxx.jpg",
    content: "Kathmandu. Former King Gyanendra Shah has said that he is very happy to be visiting his ancestral home in Gorkha. He said this while speaking to the media while visiting the Gorakhkali Temple in Gorkha on Saturday.."
  });

  useEffect(() => {
    const fetchFeaturedNews = async () => {
      try {
        const response = await newsApi.getFeaturedArticles();
        if (response.data.length > 0) {
          setFeaturedArticle(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching featured news:', error);
        // Keep the default content if API fails
      }
    };

    fetchFeaturedNews();
  }, []);

  return (
    <div className="featured-news">
      <h2>{featuredArticle.title}</h2>
      <img src={featuredArticle.image} alt={featuredArticle.title} className="featured-image" />
      <p>{featuredArticle.content}</p>
    </div>
  );
};

export default FeaturedNews;
