import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailIcon, LockIcon } from '../components/Icons';
import RoleSelector from '../components/RoleSelector';
import ProfilePicture from '../components/ProfilePicture';
import '../styles/auth.css';

function ForgotPassword({
  profilePicture,
  profilePreview,
  selectedRole,
  onProfilePictureChange,
  onRoleChange
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateOtp = () => {
    const newErrors = {};
    if (!otp) newErrors.otp = 'OTP is required';
    else if (otp.length !== 6 || !/^\d+$/.test(otp)) newErrors.otp = 'OTP must be 6 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};
    if (!newPassword) newErrors.newPassword = 'Password is required';
    else if (newPassword.length < 6) newErrors.newPassword = 'Password must be at least 6 characters';
    if (newPassword !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      console.log('Sending OTP to email:', email);
      setStep(2);
    }
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    if (validateOtp()) {
      console.log('Verifying OTP:', otp);
      setStep(3);
    }
  };

  const handleSubmitNewPassword = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      console.log('Resetting password to:', newPassword);
      alert('Password has been reset successfully!');
      navigate('/login'); // ✅ direct routing
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-columns">
        <div className="left-column">
          <img src="/logo.png" alt="Logo" className="logo" />
          <div className="welcome-text">Reset Password.</div>
          <div className="welcome-description">
            Forgot your password? Don't worry. Follow the simple steps to reset your password and regain access to your NepNews account.
          </div>
          <img src="/news-illustration.png" alt="News Illustration" className="illustration" />
        </div>

        <div className="right-column">
          <div className="form-container">
            {step === 1 && (
              <>
                <h2 className="form-title">FORGOT PASSWORD</h2>
                <form onSubmit={handleSubmitEmail} className="auth-form">

                  <div className="form-group">
                    <RoleSelector
                      selectedRole={selectedRole}
                      onRoleSelect={onRoleChange}
                      isOpen={dropdownOpen}
                      toggleDropdown={() => setDropdownOpen(!dropdownOpen)}
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <EmailIcon className="input-icon" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={errors.email ? 'input-error' : ''}
                      />
                    </div>
                    {errors.email && <div className="error-message">{errors.email}</div>}
                  </div>

                  <button type="submit" className="auth-button">Send OTP</button>
                  <div className="switch-auth">
                    Remember your password?{' '}
                    <span className="auth-link" onClick={() => navigate('/login')}>
                      Login
                    </span>
                  </div>
                </form>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="form-title">VERIFY OTP</h2>
                <form onSubmit={handleSubmitOtp} className="auth-form">
                  <ProfilePicture
                    profilePreview={profilePreview}
                    onProfilePictureChange={onProfilePictureChange}
                  />

                  <div className="form-group">
                    <RoleSelector
                      selectedRole={selectedRole}
                      onRoleSelect={(role) => {
                        onRoleChange(role);
                        setDropdownOpen(false); // Close dropdown on selection
                      }}
                      isOpen={dropdownOpen}
                      toggleDropdown={() => setDropdownOpen(!dropdownOpen)}
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <input
                        type="text"
                        placeholder="Enter 6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className={errors.otp ? 'input-error' : ''}
                        maxLength={6}
                      />
                    </div>
                    {errors.otp && <div className="error-message">{errors.otp}</div>}
                  </div>

                  <div className="otp-message">
                    We've sent a 6-digit OTP to your email address. Please check your inbox and enter the code above.
                  </div>

                  <button type="submit" className="auth-button">Verify OTP</button>
                  <div className="resend-otp">
                    Didn't receive the code? <span className="auth-link">Resend OTP</span>
                  </div>
                  <div className="switch-auth">
                    <span className="auth-link" onClick={() => setStep(1)}>Back to Email</span>
                  </div>
                </form>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="form-title">RESET PASSWORD</h2>
                <form onSubmit={handleSubmitNewPassword} className="auth-form">
                  <ProfilePicture
                    profilePreview={profilePreview}
                    onProfilePictureChange={onProfilePictureChange}
                  />

                  <div className="form-group">
                    <RoleSelector
                      selectedRole={selectedRole}
                      onRoleSelect={onRoleChange}
                      isOpen={false}
                      toggleDropdown={() => {}}
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <LockIcon className="input-icon" />
                      <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className={errors.newPassword ? 'input-error' : ''}
                      />
                    </div>
                    {errors.newPassword && <div className="error-message">{errors.newPassword}</div>}
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <LockIcon className="input-icon" />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={errors.confirmPassword ? 'input-error' : ''}
                      />
                    </div>
                    {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                  </div>

                  <button type="submit" className="auth-button">Reset Password</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
