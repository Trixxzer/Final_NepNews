import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase"; 
import newsApi from '../services/api';
import './signup.css';

const Signup = () => {
  const [role, setRole] = useState(""); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); 
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/"); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!role) {
      setError("Please select a role!");
      return;
    }

    if (password !== password2) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Register with Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      
      // Register with backend
      const response = await newsApi.register({
        username,
        email,
        password,
        password2,
        role
      });

      setSuccessMessage("Successfully signed up! Redirecting to homepage...");
      setTimeout(() => {
        navigate("/");
      }, 2000); 
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    if (!role) {
      alert("Please select a role!");
      return;
    }

    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed up with Google:", user);
      setSuccessMessage("Successfully signed up with Google! Redirecting to homepage...");

      setTimeout(() => {
        navigate("/");  // Changed from "/login" to "/"
      }, 2000); 
    } catch (error) {
      console.error("Google signup error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Join NepNews</h1>
        <p>
          Become a part of our community by signing up to access real-time
          news, in-depth articles, and exclusive content.
        </p>
      </div>

      <div className="signup-right">
        <button className="back-btn" onClick={handleBack}>
          <FaArrowLeft /> Back to Home
        </button>

        <img src="NepnewsLogo.png" alt="NepNews Logo" className="logo" />
        <h2>SIGN UP</h2>

        {successMessage && <div className="success-message">{successMessage}</div>} 

        <form onSubmit={handleSubmit}>
          <div className="role-select">
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">Select your role</option>
              <option value="editor">Editor</option>
              <option value="author">Author</option>
              <option value="reader">Reader</option>
            </select>
          </div>

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
            <FaEnvelope className="icon" />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <div className="input-box">
            <FaLock className="icon" />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required 
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <div className="google-signup">
          <span>Or Sign Up with:</span>
          <div className="google-icon-container">
            <FcGoogle className="social-icon" onClick={handleGoogleSignup} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
