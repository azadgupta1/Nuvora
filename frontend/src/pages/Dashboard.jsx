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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // NEW STATE

  useEffect(() => {
  // ✅ 1. Check if token is in URL
  const params = new URLSearchParams(window.location.search);
  const tokenFromURL = params.get("token");

  if (tokenFromURL) {
    localStorage.setItem("token", tokenFromURL);

    // ✅ 2. Clean the URL (remove ?token=...)
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }

  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const { userId } = jwtDecode(token);

    if (!socket.connected) {
      socket.connect();
      socket.emit("userOnline", userId);
    }

    // const handleNewBooking = (data) => {
    //   toast.info(`📥 New booking from ${data.fromUser} for ${data.skillName}`, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     toastId: `newBooking-${data.bookingId}`,
    //   });
    // };

    const handleNewBooking = (data) => {
      console.log("DATA IS : ", data);

      toast.info(`New booking from ${data.fromUser.name} for ${data.skillOfferedName}`, {
        position: "top-right",
        autoClose: 5000,
        toastId: `newBooking-${data.bookingId}`,
      });
    };


    // const handleBookingStatus = (data) => {
    //   toast.success(`Booking for ${data.skill.name} is now ${data.status}`, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     toastId: `statusUpdate-${data.id}`,
    //   });
    // };

    const handleBookingStatus = (data) => {
      const isNegativeStatus = ["Cancelled", "Rejected", "Failed"].includes(data.status);

      const toastFn = isNegativeStatus ? toast.error : toast.success;

      toastFn(`Booking for ${data.skill.name} is now ${data.status}`, {
        position: "top-right",
        autoClose: 5000,
        toastId: `statusUpdate-${data.id}`,
      });
    };


    // console.log("DATA IS : ", data);

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
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Sidebar + Content */}
      <div className="flex flex-1 pt-[56px] overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <main className="flex-1 overflow-auto bg-gray-100 p-0">
          <Outlet />
        </main>
      </div>


      <SkillModal 
        isOpen={showSkillModal} 
        onClose={() => {
            setShowSkillModal(false);
            setTimeout(() => {
                window.location.reload();
            }, 1);
        }} 
    />

      <ToastContainer
        position="bottom-center" // 👈 move to bottom
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark" // 👈 optional, for dark look to match black background
        className="custom-toast" // 👈 optional, for extra styling
      />




    </div>
  );
}

export default DashBoard;
