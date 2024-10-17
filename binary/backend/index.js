// index.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    clubs: { type: [String], default: [] }, // Array of club names
    about: { type: String, default: '' }, // New field for description
  });

const User = mongoose.model('User', userSchema);

// Registration route
app.post('/register', async (req, res) => {
  const { username, email, password, clubs } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    clubs,
  });

  await newUser.save();
  res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Check password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  // Generate token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token, user: { username: user.username, email: user.email, clubs: user.clubs } });
});

// Edit Profile route
app.put('/edit-profile', async (req, res) => {
    const { userId, about, clubs } = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { about, clubs },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({
        message: 'Profile updated successfully',
        user: {
          username: updatedUser.username,
          email: updatedUser.email,
          clubs: updatedUser.clubs,
          about: updatedUser.about,
        },
      });
    } catch (error) {
      res.status(500).json({ message: 'Error updating profile' });
    }
  });
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
