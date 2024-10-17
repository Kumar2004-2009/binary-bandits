// Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clubs, setClubs] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleClubChange = (club) => {
    setClubs((prevClubs) =>
      prevClubs.includes(club)
        ? prevClubs.filter((c) => c !== club)
        : [...prevClubs, club]
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', {
        username,
        email,
        password,
        clubs,
      });
      setMessage(response.data.message);
      setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
    } catch (error) {
      setMessage(error.response?.data.message || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="club-selection">
          <h3>Select Clubs</h3>
          {['Club A', 'Club B', 'Club C', 'Club D'].map((club) => (
            <label key={club}>
              <input
                type="checkbox"
                checked={clubs.includes(club)}
                onChange={() => handleClubChange(club)}
              />
              {club}
            </label>
          ))}
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
