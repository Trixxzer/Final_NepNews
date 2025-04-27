import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaArrowLeft } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import newsApi from '../services/api';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // First try Django backend authentication
      const response = await newsApi.login({ username, password });
      localStorage.setItem('token', response.data.token);
      
      // Only attempt Firebase auth if we have an email
      if (response.data.email) {
        try {
          await signInWithEmailAndPassword(auth, response.data.email, password);
        } catch (firebaseError) {
          console.log("Firebase auth failed:", firebaseError.message);
          // Don't block login if Firebase fails
        }
      }
      
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.detail || 'Invalid username or password');
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // After Google auth success, authenticate with your backend
      try {
        const response = await newsApi.login({
          username: result.user.email,
          password: result.user.uid // or some other identifier
        });
        localStorage.setItem('token', response.data.token);
        navigate("/");
      } catch (backendError) {
        setError("Backend authentication failed after Google sign-in");
      }
    } catch (error) {
      setError("Google sign-in failed: " + error.message);
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Welcome Back!</h1>
        <p>Welcome to NepNews, your gateway to real-time updates, in-depth
          analysis, and breaking news from around the world. Stay informed with
          trusted journalism, curated stories, and exclusive reports tailored to
          your interests.</p>
      </div>

      <div className="login-right">
        <button className="back-btn" onClick={handleBack}>
          <FaArrowLeft /> Back to Home
        </button>

        <img src="NepnewsLogo.png" alt="NepNews Logo" className="logo" />
        <h2>LOGIN</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="forgot">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>

        <div className="google-login">
          <span>Or Login with:</span>
          <div className="google-icon-container">
            <FcGoogle className="social-icon" onClick={handleGoogleSignup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
