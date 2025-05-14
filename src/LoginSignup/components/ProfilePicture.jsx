import { useRef } from 'react';

function ProfilePicture({ profilePreview, onProfilePictureChange }) {
  const profileInputRef = useRef(null);

  const handleProfileClick = () => {
    profileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onProfilePictureChange(e.target.files[0]);
    }
  };

  return (
    <div className="profile-picture-container">
      <div className="profile-picture" onClick={handleProfileClick}>
        {profilePreview ? (
          <img src={profilePreview} alt="Profile Preview" />
        ) : (
          <div className="profile-picture-placeholder">+</div>
        )}
      </div>
      <button 
        type="button" 
        className="profile-upload-btn"
        onClick={handleProfileClick}
      >
        Upload Profile Picture
      </button>
      <input
        type="file"
        ref={profileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="file-input"
      />
    </div>
  );
}

export default ProfilePicture;