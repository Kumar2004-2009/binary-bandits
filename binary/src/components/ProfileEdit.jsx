// ProfileEdit.js
import { useState } from 'react';
import './ProfileEdit.css'; // Ensure this file is linked correctly

const ProfileEdit = ({ loggedInUser }) => {
  const [profile, setProfile] = useState({
    username: `${loggedInUser.username}`,
    email: `${loggedInUser.email}`,
    description: 'Software Developer',
    website: 'www.example.com',
    avatar: 'https://cdn-icons-png.flaticon.com/512/6858/6858504.png', // Placeholder for avatar
    coverImage: 'https://lh3.googleusercontent.com/proxy/Lj4cpDss_Mt-hb5IpW2Y3V8yb_Yiwof-LlvRwF5TvLStXlYjP-A8ifMoMwl-1yO2zQmrCeWsvZzumVpYQPIIB28skOKMC7bpZYt_bBB3-cU4SAS63VgnmcUdjLsfRp5qQB9I1Q', // Placeholder for cover image
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setProfile(formData);
    setModalOpen(false);
  };

  return (
    <div className="profile-edit-container">
      <h1>Profile Edit Page</h1>
      <div className="cover-photo-container">
        <img src={profile.coverImage} alt="Cover" className="cover-photo" />
      </div>
      <div className="profile-section">
        <div className="profile-picture-container">
          <img src={profile.avatar} alt="Avatar" className="profile-picture" />
        </div>
        <div className="profile-info">
          <h2>{profile.username}</h2>
          <p>{profile.description}</p>
          <p>{profile.email}</p>
          <p>{profile.website}</p>
          <button className="edit-button" onClick={() => setModalOpen(true)}>Edit Profile</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <h2>Edit Profile</h2>
            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <label>Website</label>
              <input type="text" name="website" value={formData.website} onChange={handleChange} />
            </div>
            <button className="save-button" onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileEdit;
