// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = ({ setLoggedInUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      setLoggedInUser(response.data.user); // Set the logged-in user
      navigate("/home");
    } catch (error) {
      setMessage(error.response?.data.message || "Login failed");
    }
  };

  return (
    <div className="formContainer">
      <div className="loginContainer">
        <h1 className="formHeading">Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="formInput"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="formInput"
          />
          <button className="formButton" type="submit">
            Login
          </button>
        </form>
        {message && <p className="error">{message}</p>}

        <p className="formHeadingP">
          Dont have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
