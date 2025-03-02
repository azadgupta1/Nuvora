import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./MentorDashboard.css";

const MentorDashboard = () => {
  return (
    <div className="mentor-dashboard">
      <Sidebar role="mentor" />

      <div className="dashboard-content">
        {/* Welcome Section */}
        <div className="welcome-section">
          <h2>Welcome, Mentor!</h2>
          <p>Provide skills to those seeking your guidance.</p>
          <Link to="/profile" className="profile-link">Go to Profile</Link>
        </div>

        {/* Dashboard Widgets */}
        <div className="dashboard-widgets">
          <div className="widget">
            <h3>Bookings</h3>
            <p>Manage your 1:1 calls and webinars</p>
            <Link to="/mentor/bookings">View Bookings</Link>
          </div>

          <div className="widget">
            <h3>Messages</h3>
            <p>Respond to student queries</p>
            <Link to="/mentor/messages">Go to Messages</Link>
          </div>

          <div className="widget">
            <h3>Testimonials</h3>
            <p>View your ratings & testimonials</p>
            <Link to="/mentor/testimonials">Check Reviews</Link>
          </div>

          <div className="widget">
            <h3>Calendar</h3>
            <p>Set your availability</p>
            <Link to="/mentor/calendar">Manage Calendar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;
