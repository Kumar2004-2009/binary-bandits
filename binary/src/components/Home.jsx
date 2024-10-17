// Home.jsx
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = ({ loggedInUser }) => {
  return (
    <div className="home-container">
      <h1>Welcome, {loggedInUser.username}!</h1>
      <p>Email: {loggedInUser.email}</p>
      <h3>Joined Clubs:</h3>
      <ul>
        {loggedInUser.clubs.map((club, index) => (
          <li key={index}>{club}</li>
        ))}
      </ul>
      <Link to="/edit" className='edit'>Edit</Link>
    </div>
  );
};

export default Home;
