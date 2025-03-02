import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar">
      <h2>LearnMate</h2>
      <p>{role === "mentor" ? "Mentor Dashboard" : "Seeker Dashboard"}</p>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mentor/bookings">Bookings</Link></li>
          <li><Link to="/mentor/messages">Messages</Link></li>
          <li><Link to="/mentor/testimonials">Testimonials</Link></li>
          <li><Link to="/mentor/calendar">Calendar</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
