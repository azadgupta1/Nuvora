import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Dashboard/SideBar';
import Header from '../components/Dashboard/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import SkillModal from './Home/SkillModal';
import socket from '../socket';

const backendUrl = import.meta.env.VITE_BACKEND_URL;



function DashBoard() {
  const [showSkillModal, setShowSkillModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const { userId } = jwtDecode(token);

      if (!socket.connected) {
        socket.connect();
        socket.emit("userOnline", userId);
      }

      const handleNewBooking = (data) => {
        toast.info(`📥 New booking from ${data.fromUser} for ${data.skillName}`, {
          position: "top-right",
          autoClose: 5000,
          toastId: `newBooking-${data.bookingId}`,
        });
      };

      const handleBookingStatus = (data) => {
        toast.success(`✅ Booking for ${data.skill.name} is now ${data.status}`, {
          position: "top-right",
          autoClose: 5000,
          toastId: `statusUpdate-${data.id}`,
        });
      };

      socket.on("newBookingRequest", handleNewBooking);
      socket.on("bookingStatusUpdated", handleBookingStatus);

      axios
        .get(`${backendUrl}/api/skills/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (!res?.data?.id) setShowSkillModal(true);
        })
        .catch((err) => {
          if (err.response?.status === 404) setShowSkillModal(true);
        });

      return () => {
        socket.off("newBookingRequest", handleNewBooking);
        socket.off("bookingStatusUpdated", handleBookingStatus);
      };
    } catch (err) {
      console.error("Invalid token:", err);
    }
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Fixed Header */}
      <div className="w-full fixed top-0 left-0 z-40">
        <Header />
      </div>

      {/* Sidebar + Content */}
      <div className="flex flex-1 pt-[57px] overflow-hidden">
        {/* pt-[68px] gives space below fixed header */}
        <Sidebar />

        <main className="flex-1 overflow-auto bg-gray-100 p-0">
          <Outlet />
        </main>
      </div>

      <SkillModal isOpen={showSkillModal} onClose={() => setShowSkillModal(false)} />

      <ToastContainer position="top-right" autoClose={4000} newestOnTop />
    </div>
  );
}

export default DashBoard;
