import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/Home/LandingPage'
import Register from './pages/Home/Register';
import Login from './pages/Home/Login';
import DashBoard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import SkillsList from './pages/SkillsList';
import SkillDetails from './pages/SkillDetails';
import Bookings from './pages/Bookings';
import Bookmarks from "./pages/Bookmarks";
import Reviews from "./pages/Reviews";
import ChatRoom from './pages/ChatRoom';
import Chat from "./pages/Chat";
import ChatPage from './pages/ChatPage';
import SkillCreate from './pages/Header/SkillCreate';
import MySkills from './pages/Header/MySkills';
import { FiSkipForward } from 'react-icons/fi';
import IncomingBookings from './pages/IncomingBookings';
import ChatLayout from './pages/ChatLayout';
import Layout from './Layouts/Layout';
import UserSkillProfile from './pages/UserSkillProfile';


import Profile from './pages/Profile';


function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Dashboard layout with nested routes */}
        <Route path="/dashboard"element={<ProtectedRoute><DashBoard /></ProtectedRoute>}>
        
          {/* render inside the Outlet in DashBoard.jsx */}
          <Route index element={<SkillsList />} />
          <Route path="discovery" element={<SkillsList />} />
          <Route path="skill/:id" element={<SkillDetails />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="incoming-request" element={<IncomingBookings />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="chatlayout" element={<ChatLayout />} />
          <Route path="profile/:id" element={<Profile/>} />
          <Route path="userskill" element={<UserSkillProfile />} />
        </Route>

      </Routes>

    </Router>
  );
}

export default App;


