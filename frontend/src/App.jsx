import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/Home/LandingPage'
import Register from './pages/Home/Register';
import Login from './pages/Home/Login';
import DashBoard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Discovery from './pages/DashboardPages/Discovery';
import Bookings from './pages/DashboardPages/Bookings';
import Bookmarks from "./pages/DashboardPages/Bookmarks";
import Reviews from "./pages/DashboardPages/Reviews";
import ChatPage from './pages/Chat/ChatPage';
import IncomingBookings from './pages/DashboardPages/IncomingBookings';
import ChatLayout from './pages/Chat/ChatLayout';
import Layout from './Layouts/Layout';
import UserSkillProfile from './pages/Profile/UserSkillProfile';
import Profile from './pages/Profile/Profile';
import Settings from './pages/DashboardPages/Settings';
import Saved from './components/Dashboard/Discovery/Saved';
import NotFound from './components/ui/NotFound';



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
          <Route index element={<Discovery />} />
          <Route path="discovery" element={<Discovery />} />

          <Route path="bookings" element={<Bookings />} />
          <Route path="bookmarks" element={<Saved />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="incoming-request" element={<IncomingBookings />} />
          <Route path="settings" element={<Settings />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="chatlayout" element={<ChatLayout />} />
          <Route path="profile/:id" element={<Profile/>} />
          <Route path="userskill" element={<UserSkillProfile />} />
          <Route path="saved" element={<Saved />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;