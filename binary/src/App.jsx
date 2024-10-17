import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import EventManager from './components/EventManager'
import LandingTeacher from './components/LandingTeacher'
import MainCommunity from './components/CommunityBoard/MainCommunity'
import Home from './components/Home'
import ProfileEdit from './components/ProfileEdit'
import LandingPage from './components/LandingPage'
import Navbar from './Navbar';
import Footer from './Footer';
import EventCalendar from './components/Calender';
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
        <Route path="/" element={<LandingPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        <Route path="/home" element={<Home loggedInUser={loggedInUser} />} />
        <Route path ="/event" element={<>
          <EventCalendar/>
          <EventManager/>
        </>} />
        <Route path="/teacher/home" element={<LandingTeacher/>} />
        <Route path="/community" element={<MainCommunity/>} />
        <Route path="/edit" element={<ProfileEdit loggedInUser={loggedInUser}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
