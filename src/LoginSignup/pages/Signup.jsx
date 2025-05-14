import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserIcon, EmailIcon, LockIcon, GoogleIcon, FacebookIcon } from '../components/Icons';
import RoleSelector from '../components/RoleSelector';
import ProfilePicture from '../components/ProfilePicture';
import '../styles/auth.css';
import newsImage from '../../assets/image.png';


function Signup({
  onNavigateToLogin,
  onNavigateToTerms,
  agreedToTerms,
  formData,
  onFormDataChange,
  profilePicture,
  profilePreview,
  selectedRole,
  onProfilePictureChange,
  onRoleChange
}) {
  const navigate = useNavigate();
  const [localFormData, setLocalFormData] = useState(formData || {
    role: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    profilePicture: null,
    // Author fields
    bio: '',
    expertise: '',
    certificates: null,
    // Editor fields
    editorialOversight: '',
    emailVerification: false,
    userManagement: false,
    articleManagement: false,
    analytics: false,
    // Admin fields
    adminDocument: null
  });

  const [errors, setErrors] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAuthor, setIsAuthor] = useState(localFormData.role === 'Author');
  const [isEditor, setIsEditor] = useState(localFormData.role === 'Editor');

  // Update agreeToTerms when the prop changes
  useEffect(() => {
    if (agreedToTerms) {
      setLocalFormData(prev => ({
        ...prev,
        agreeToTerms: true
      }));
    }
  }, [agreedToTerms]);

  // Update parent component's formData when localFormData changes
  useEffect(() => {
    if (onFormDataChange) {
      onFormDataChange(localFormData);
    }
  }, [localFormData, onFormDataChange]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'file') {
      setLocalFormData({
        ...localFormData,
        [name]: files[0]
      });
    } else {
      setLocalFormData({
        ...localFormData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  const handleRoleSelect = (role) => {
    onRoleChange(role);
    setIsAuthor(role === 'Author');
    setIsEditor(role === 'Editor');
    setDropdownOpen(false);

    setLocalFormData({
      ...localFormData,
      role,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!localFormData.role) {
      newErrors.role = 'Role is required';
    }
    if (!localFormData.username) {
      newErrors.username = 'Username is required';
    }
    if (!localFormData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(localFormData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!localFormData.password) {
      newErrors.password = 'Password is required';
    } else if (localFormData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (localFormData.password !== localFormData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!localFormData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    // Author-specific validations
    if (isAuthor) {
      if (!localFormData.bio || localFormData.bio.trim() === '') {
        newErrors.bio = 'Bio is required for authors';
      }
      if (!localFormData.expertise || localFormData.expertise.trim() === '') {
        newErrors.expertise = 'Expertise category is required for authors';
      }
    }

    // Editor-specific validations
    if (isEditor) {
      if (!localFormData.editorialOversight || localFormData.editorialOversight.trim() === '') {
        newErrors.editorialOversight = 'Areas of Editorial Oversight is required for editors';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const formDataToSend = new FormData();

  // Append all fields
formDataToSend.append('username', localFormData.username);
formDataToSend.append('email', localFormData.email);
formDataToSend.append('password', localFormData.password);
formDataToSend.append('password2', localFormData.confirmPassword);
formDataToSend.append('role', localFormData.role.toLowerCase());

  if (localFormData.profilePicture) {
    formDataToSend.append('profile_picture', localFormData.profilePicture);
  }

  // Role-specific fields
  if (isAuthor) {
    formDataToSend.append('bio', localFormData.bio);
    formDataToSend.append('expertise', localFormData.expertise);
    if (localFormData.certificates) {
      formDataToSend.append('certificates', localFormData.certificates);
    }
  }

  if (isEditor) {
    formDataToSend.append('editorial_oversight', localFormData.editorialOversight);
    formDataToSend.append('email_verification', localFormData.emailVerification);
    formDataToSend.append('user_management', localFormData.userManagement);
    formDataToSend.append('article_management', localFormData.articleManagement);
    formDataToSend.append('analytics', localFormData.analytics);
  }

  if (localFormData.role === 'Admin' && localFormData.adminDocument) {
    formDataToSend.append('admin_document', localFormData.adminDocument);
  }

  try {
    const response = await fetch('https://collabbackend-z0kd.onrender.com/accounts/register/', {
      method: 'POST',
      body: formDataToSend,
    });

    if (response.ok) {
      const data = await response.json();
      alert('Signup successful!');
      console.log(data);
      navigate('/login');
    } else {
      const errorData = await response.json();
      console.error('Registration error:', errorData);
      alert('Signup failed: ' + (errorData.detail || 'Please check your inputs.'));
    }
  } catch (error) {
    console.error('Network error:', error);
    alert('An error occurred. Please try again later.');
  }
};


  return (
    <div className="auth-container">
      <div className="auth-columns">
        <div className="left-column">
          <div className="welcome-text">Welcome Back.</div>
          <div className="welcome-description text-left ">
            Welcome to NepNews, your gateway to real-time updates, in-depth
            analysis, and breaking news from around the world. Stay informed
            with trusted journalism, curated stories, and exclusive reports
            tailored to your interests. Log in now to personalize your news
            feed, bookmark articles, and never miss an important update. Your
            news, your way—delivered seamlessly.
          </div>
          <img src={newsImage} 
          alt="News Illustration"
          className="illustration"/>
        </div>
        <div className="right-column">
          <div className="form-container">
            <h2 className="form-title">SIGN UP AS:</h2>
            <form onSubmit={handleSubmit} className="auth-form">
              {/* Always show profile picture at the top */}
              <div className={`profile-picture-wrapper ${isEditor || selectedRole === 'Admin' ? 'role-specific' : ''}`}>
                <ProfilePicture
                  profilePreview={profilePreview}
                  onProfilePictureChange={(file) => {
                    onProfilePictureChange(file);
                    setLocalFormData({
                      ...localFormData,
                      profilePicture: file
                    });
                  }}
                />
              </div>

              <div className="form-group">
                <RoleSelector
                  selectedRole={selectedRole}
                  onRoleSelect={handleRoleSelect}
                  isOpen={dropdownOpen}
                  toggleDropdown={() => setDropdownOpen(!dropdownOpen)}
                />
                {errors.role && <div className="error-message">{errors.role}</div>}
              </div>
              <div className="form-group">
              <div className="input-with-icon">
                  <UserIcon className="input-icon" />
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={localFormData.username}
                    onChange={handleChange}
                    className={errors.username ? 'input-error' : ''}
                  />
                </div>
                {errors.username && <div className="error-message">{errors.username}</div>}
              </div>
              <div className="form-group">
              <div className="input-with-icon">
                  <EmailIcon className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={localFormData.email}
                    onChange={handleChange}
                    className={errors.email ? 'input-error' : ''}
                  />
                </div>
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              <div className="form-group">
              <div className="input-with-icon">
                  <LockIcon className="input-icon" />
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={localFormData.password}
                    onChange={handleChange}
                    className={errors.password ? 'input-error' : ''}
                  />
                </div>
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              <div className="form-group">
              <div className="input-with-icon">
                  <LockIcon className="input-icon" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm password"
                    value={localFormData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? 'input-error' : ''}
                  />
                </div>

              {isAuthor && (
                <div className="role-fields">
                  <div className="role-fields-title">Author Information</div>

                  <div className="role-field">
                    <label className="role-field-label">Bio / Short Description</label>
                    <textarea
                      name="bio"
                      placeholder="Tell us about yourself and your writing experience"
                      value={localFormData.bio}
                      onChange={handleChange}
                      className={`role-input ${errors.bio ? 'input-error' : ''}`}
                      rows={3}
                    />
                    {errors.bio && <div className="error-message">{errors.bio}</div>}
                  </div>

                  <div className="role-field">
                    <label className="role-field-label">Category Expertise</label>
                    <select
                      name="expertise"
                      value={localFormData.expertise}
                      onChange={handleChange}
                      className={`role-input ${errors.expertise ? 'input-error' : ''}`}
                    >
                      <option value="">Select Expertise</option>
                      <option value="News">News</option>
                      <option value="Politics">Politics</option>
                      <option value="Sports">Sports</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Technology">Technology</option>
                      <option value="Health">Health</option>
                      <option value="Science">Science</option>
                      <option value="Business">Business</option>
                    </select>
                    {errors.expertise && <div className="error-message">{errors.expertise}</div>}
                  </div>

                  <div className="role-field">
                    <label className="role-field-label">Certificates (Optional)</label>
                    <div className="file-upload">
                      <label htmlFor="certificates" className="file-upload-label">
                        Upload Certificates
                      </label>
                      <input
                        type="file"
                        id="certificates"
                        name="certificates"
                        onChange={handleChange}
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="file-input"
                      />
                      {localFormData.certificates && (
                        <div className="file-name">
                          Selected: {localFormData.certificates.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {isEditor && (
                <div className="role-fields">
                  <div className="role-fields-title">Editor Information</div>

                  <div className="role-field">
                    <label className="role-field-label">Areas of Editorial Oversight</label>
                    <textarea
                      name="editorialOversight"
                      placeholder="Describe your areas of editorial expertise and oversight"
                      value={localFormData.editorialOversight}
                      onChange={handleChange}
                      className={`role-input ${errors.editorialOversight ? 'input-error' : ''}`}
                      rows={3}
                    />
                    {errors.editorialOversight && <div className="error-message">{errors.editorialOversight}</div>}
                  </div>

                  <div className="role-field">
                    <label className="role-field-label">Management Responsibilities</label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          id="emailVerification"
                          name="emailVerification"
                          checked={localFormData.emailVerification}
                          onChange={handleChange}
                        />
                        <label htmlFor="emailVerification" className="checkbox-label">
                          Email Verification & Admin Approval
                        </label>
                      </div>

                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          id="userManagement"
                          name="userManagement"
                          checked={localFormData.userManagement}
                          onChange={handleChange}
                        />
                        <label htmlFor="userManagement" className="checkbox-label">
                          User Management: List of registered users
                        </label>
                      </div>

                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          id="articleManagement"
                          name="articleManagement"
                          checked={localFormData.articleManagement}
                          onChange={handleChange}
                        />
                        <label htmlFor="articleManagement" className="checkbox-label">
                          Article Management: Approve, edit, or delete news stories
                        </label>
                      </div>

                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          id="analytics"
                          name="analytics"
                          checked={localFormData.analytics}
                          onChange={handleChange}
                        />
                        <label htmlFor="analytics" className="checkbox-label">
                          Analytics: Visitor stats, engagement metrics
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
              </div>

              {/* Add document upload for Admin role */}
              {selectedRole === 'Admin' && (
                <div className="role-profile-section">
                  <div className="role-fields">
                    <div className="role-fields-title">Admin Verification</div>
                    <div className="role-field">
                      <label className="role-field-label">Official Approval Document</label>
                      <div className="file-upload admin-document-upload">
                        <label htmlFor="adminDocument" className="file-upload-label">
                          Upload Document Approved by NepNews Officials
                        </label>
                        <input
                          type="file"
                          id="adminDocument"
                          name="adminDocument"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                          className="file-input"
                        />
                        {localFormData.adminDocument && (
                          <div className="file-name">
                            Selected: {localFormData.adminDocument.name}
                          </div>
                        )}
                        <div className="file-upload-note">
                          Please upload an official approval document from NepNews to verify your admin status.
                          Accepted formats: PDF, JPG, PNG, DOC, DOCX.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="terms-container">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={localFormData.agreeToTerms}
                    onChange={handleChange}
                    className="terms-checkbox"
                  />
                </div>
                <div className="terms-text">
                  I read and agree to <span className="terms-link" onClick={() => navigate('/terms')}>Terms and Conditions</span>
                </div>
              </div>
              {errors.agreeToTerms && <div className="error-message terms-error">{errors.agreeToTerms}</div>}
              <button type="submit" className="auth-button">Sign Up</button>
              <div className="social-login">
                <div className="social-text">Or Login in with: </div>
                <div className="social-icons">
                  <GoogleIcon className="social-icon" />
                  <FacebookIcon className="social-icon" />
                </div>
              </div>
              <div className="switch-auth">
                Already have an account? <span className="auth-link" onClick={() => navigate('/login')}>Login</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;