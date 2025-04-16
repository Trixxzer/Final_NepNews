import React, { useState } from "react";
import newsApi from '../services/api';
import "./forgotPassword.css";
import { FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      await newsApi.resetPassword(email);
      setStep(2);
    } catch (err) {
      setError('Error sending reset email');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await newsApi.resetPasswordConfirm({
        token: otp,
        password: newPassword
      });
      alert("Password has been successfully reset!");
      navigate("/login");
    } catch (err) {
      setError('Error resetting password');
    }
  };

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-left">
        <h1>Reset Your Password</h1>
        <p>
          Enter your email address to receive a One-Time Password (OTP) for
          resetting your password.
        </p>
      </div>

      <div className="forgot-password-right">
        <button className="back-btn" onClick={handleBack}>
          <FaArrowLeft /> Back to Login
        </button>

        <img src="NepnewsLogo.png" alt="NepNews Logo" className="logo" />
        <h2>FORGOT PASSWORD</h2>

        {step === 1 && (
          <form onSubmit={handleOtpSubmit}>
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-btn">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handlePasswordSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter OTP"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="New Password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="submit-btn">
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
