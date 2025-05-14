import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserIcon,
  LockIcon,
  GoogleIcon,
  FacebookIcon
} from "../components/Icons";
import "../styles/auth.css";
import newsImage from "../../assets/image.png";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch(
        "https://collabbackend-z0kd.onrender.com/accounts/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login success:", data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      const role = data.role?.toLowerCase();
      if (role === "editor") {
      navigate("/editor-dashboard");
    } else if (role === "author") {
      navigate("/author-dashboard");
    } else if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "user") {
      navigate("/user-dashboard"); 
    }
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      <div
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          cursor: "pointer",
          fontSize: "14px",
          color: "#1f2937",
          fontWeight: "500",
          background: "#f9fafb",
          padding: "6px 12px",
          borderRadius: "6px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        ← Back
      </div>

      <div className="auth-columns">
        <div className="left-column">
          <div className="welcome-text">Welcome Back.</div>
          <div className="welcome-description text-left">
            Welcome to NepNews, your gateway to real-time updates, in-depth
            analysis, and breaking news from around the world.
          </div>
          <img src={newsImage} alt="News Illustration" className="illustration" />
        </div>

        <div className="right-column">
          <div className="form-container">
            <h2 className="form-title">LOGIN</h2>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <div className="input-with-icon">
                  <UserIcon className="input-icon" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className={errors.username ? "input-error" : ""}
                  />
                </div>
                {errors.username && <div className="error-message">{errors.username}</div>}
              </div>

              <div className="form-group">
                <div className="input-with-icon">
                  <LockIcon className="input-icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={errors.password ? "input-error" : ""}
                  />
                </div>
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>

              <div className="forgot-password" onClick={() => navigate("/forgot-password")}>
                Forgot Password?
              </div>

              <button type="submit" className="auth-button">Login</button>

              <div className="social-login">
                <div className="social-text">Or Login with:</div>
                <div className="social-icons">
                  <GoogleIcon className="social-icon" />
                  <FacebookIcon className="social-icon" />
                </div>
              </div>

              <div className="switch-auth">
                Don't have an account?{" "}
                <span className="auth-link" onClick={() => navigate("/signup")}>
                  Sign Up
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
