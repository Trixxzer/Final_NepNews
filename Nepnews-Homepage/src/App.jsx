// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Logo from "./components/Logo.jsx";
import Navbar from "./components/navbar.jsx";
import Advertisement from "./components/Advertisement.jsx";
import FeaturedNews from "./components/FeaturedNews.jsx";
import Sidebar from "./components/Sidebar.jsx";
import NewsCard from "./components/NewsCard.jsx";
import Footer from "./components/Footer.jsx";

// Import login system pages
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx"; // Import Signup component
import ForgotPassword from "./components/Forgotpassword.jsx";

import "./App.css";

import TestConnection from './components/TestConnection';

const HomePage = () => {
  return (
    <div className="app">
      <Logo />
      <Navbar />
      <div className="main-content">
        <div className="add">
          <Advertisement />
          <FeaturedNews />
        </div>
        <Sidebar />
      </div>
      <div className="news-grid">
        {[...Array(4)].map((_, index) => (
          <NewsCard key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Add this route */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

// Add this in your render method
<TestConnection />

export default App;
