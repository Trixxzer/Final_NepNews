import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/terms.css';

function TermsAndConditions() {
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 10) {
      setHasScrolledToBottom(true);
    }
  };

  const handleAgree = () => {
    // Optional: Set agreement in state, localStorage, or context
    // localStorage.setItem("agreedToTerms", "true");
    navigate('/signup');
  };

  const handleBack = () => {
    navigate('/signup');
  };

  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1 className="terms-title">Terms and Conditions</h1>

        <div className="terms-content" onScroll={handleScroll}>
          <h2>1. Introduction</h2>
          <p>Welcome to NepNews. These Terms and Conditions govern your use of our website and services. By accessing or using NepNews, you agree to be bound by these Terms.</p>

          <h2>2. Definitions</h2>
          <p>"Service" refers to the NepNews website and all content, services, and products available at or through the website.</p>
          <p>"User", "You", and "Your" refers to the individual accessing the Service.</p>
          <p>"Company", "We", "Us", and "Our" refers to NepNews.</p>

          <h2>3. Account Registration</h2>
          <p>To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process.</p>

          <h2>4. User Content</h2>
          <p>You are responsible for the content you post, link, store, or share. Content should comply with NepNews standards and local laws.</p>

          <h2>5. Acceptable Use</h2>
          <p>You agree not to use the Service for any unlawful purpose or any purpose prohibited by these Terms. Misuse may result in account suspension.</p>

          <h2>6. Privacy Policy</h2>
          <p>Please refer to our Privacy Policy for information about how we collect, use, and disclose information about you.</p>

          <h2>7. Intellectual Property</h2>
          <p>The Service and its content remain the exclusive property of NepNews and its licensors.</p>

          <h2>8. Termination</h2>
          <p>We may suspend or terminate your access without notice if you violate these Terms.</p>

          <h2>9. Limitation of Liability</h2>
          <p>NepNews is not liable for any indirect or consequential damages arising from your use of the service.</p>

          <h2>10. Changes to Terms</h2>
          <p>We may revise these Terms at any time. Continued use means you accept the changes.</p>

          <h2>11. Contact Us</h2>
          <p>If you have questions about these Terms, email us at support@nepnews.com.</p>
        </div>

        <div className="terms-actions">
          <button
            className="terms-agree-btn"
            onClick={handleAgree}
            disabled={!hasScrolledToBottom}
          >
            {hasScrolledToBottom ? 'I Agree to the Terms' : 'Please read all terms before agreeing'}
          </button>

          <button className="terms-back-btn" onClick={handleBack}>
            Back to Signup
          </button>

          <p className="terms-note">
            {hasScrolledToBottom
              ? 'By clicking "I Agree", you confirm that you have read and agree to our Terms and Conditions.'
              : 'Please scroll to the bottom to read all terms before agreeing.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
