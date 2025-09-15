import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Nuvora_2 from '../../assets/Nuvora_2.png';
import axios from 'axios';
import socket from '../../socket';
import { MdMenu } from "react-icons/md";



const backendUrl = import.meta.env.VITE_BACKEND_URL;



export default function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const [unreadChatCount, setUnreadChatCount] = useState(0);


  const navigate = useNavigate();
  const token = localStorage.getItem('token');


  

  const decodeToken = (token) => {
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload);
      return JSON.parse(decoded);
    } catch (err) {
      console.error('Failed to decode token', err);
      return null;
    }
  };

  const decoded = token ? decodeToken(token) : null;
  const currentUserId = decoded?.userId;

  useEffect(() => {
    if (!token) return;

    socket.on("chatNotification", (message) => {
      if (message.receiverId === currentUserId) {
        setUnreadChatCount((prev) => prev + 1);
      }
    });

    return () => {
      socket.off("chatNotification");
    };
  }, [token]);






  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/notifications`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const notifications = Array.isArray(response.data?.notifications)
        ? response.data.notifications
        : [];

      const unread = notifications.filter((n) => !n.isRead);
      setNotifications(notifications);
      setUnreadCount(unread.length);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      setNotifications([]);
      setUnreadCount(0);
    }
  };

  useEffect(() => {
    if (!token) return;

    fetchNotifications(); // 🔥 Fetch notifications right away
  }, [token]);



  const markAsRead = async (id) => {
    try {
      await axios.patch(`${backendUrl}/api/notifications/${id}/read`, {}, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
      );
      setUnreadCount((prev) => Math.max(prev - 1, 0));
    } catch (err) {
      console.error("Error marking notification as read", err);
    }
  };

  const handleNotifClick = () => {
    setNotifOpen(!notifOpen);
    if (!notifOpen) {
      fetchNotifications();
    }
  };

  const handleClick = () => {
    if (!token) return;
    const decoded = decodeToken(token);
    const userId = decoded?.userId;
    if (userId) {
      navigate(`/dashboard/profile/${userId}`);
    } else {
      console.error("User ID not found in token");
    }
  };

  // 🔌 Listen for real-time notifications
  useEffect(() => {
    if (!token) return;

    // Connect if not already
    if (!socket.connected) {
      socket.connect();
    }

    // Handle new notifications
    socket.on("newNotification", (notif) => {
      console.log("📡 New real-time notification:", notif);
      setNotifications((prev) => [notif, ...prev]);
      setUnreadCount((prev) => prev + 1);
    });

    return () => {
      socket.off("newNotification");
    };
  }, [token]);


  const getRelativeTime = (date) => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  const now = new Date();
  const then = new Date(date);

  if (isNaN(then.getTime())) {
    return "Just now"; // fallback for invalid date
  }

  const diff = (now - then) / 1000; // in seconds

  if (diff < 60) return rtf.format(-Math.floor(diff), 'second');
  if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
  if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
  if (diff < 2592000) return rtf.format(-Math.floor(diff / 86400), 'day');
  if (diff < 31536000) return rtf.format(-Math.floor(diff / 2592000), 'month');

  console.log("Invalid date in notification:", notif);


  return rtf.format(-Math.floor(diff / 31536000), 'year');
};


const markAllAsRead = async () => {
  try {
    await axios.patch(`${backendUrl}/api/notifications/read-all`, {}, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });

    setNotifications((prev) =>
      prev.map((n) => ({ ...n, isRead: true }))
    );
    setUnreadCount(0);
  } catch (err) {
    console.error("Error marking all notifications as read", err);
  }
};



// #003344

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-black text-white px-2 py-3 sm:px-6 sm:py-3 ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto gap-3">
        {/* Logo */}

        <Link to="/dashboard/discovery" className="flex items-center gap-2 flex-shrink-0 no-underline">
          <h1 className="hidden sm:block text-white font-extrabold text-2xl tracking-wide font-mono">
            Nuvora
          </h1>
          <img
            src={Nuvora_2}
            alt="Nuvora"
            className="w-10 h-10 sm:w-8 sm:h-8 object-contain"
          />
        </Link>

        {/* #0DCEDA */}
        {/* Right Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-xl mt-2 sm:mt-0">
          {/* Chat */}
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setUnreadChatCount(0); // reset counter
              navigate('/dashboard/chatlayout')}
            }
              
          >
            <IoChatbubbleEllipsesOutline />
            {/* <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 py-0.5 rounded-full">3</span> */}
            {unreadChatCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 py-0.5 rounded-full">
                {unreadChatCount}
              </span>
            )}

          </div>

          {/* Notifications */}
          <div className="relative cursor-pointer" onClick={handleNotifClick}>
            <FaBell />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}

           

          {notifOpen && (
            <div className="
              absolute top-full mt-2
              w-[85vw] sm:w-80 
              left-1/5 sm:left-auto 
              transform -translate-x-1/2 sm:transform-none 
              bg-white border border-gray-200 rounded-lg shadow-lg 
              z-50 text-gray-800 max-h-96 overflow-y-auto
            ">
              {/* Header + Button */}
              <div className="p-3 border-b flex justify-between items-center">
                <span className="font-semibold text-gray-700">Notifications</span>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-xs text-blue-600 hover:underline pr-2"
                  >
                    Mark all as read
                  </button>
                )}
              </div>

              {/* Notification List */}
              {notifications.length === 0 ? (
                <div className="p-4 text-gray-500 text-sm">No notifications</div>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-3 text-sm border-b hover:bg-gray-100 cursor-pointer ${
                      notif.isRead ? 'text-gray-500' : 'text-gray-800 font-medium'
                    }`}
                    onClick={() => markAsRead(notif.id)}
                  >
                    {notif.content}
                    <div className="text-xs text-gray-400 mt-1">
                      {getRelativeTime(notif.createdAt)}
                    </div>
                  </div>
                ))
              )}
            </div>

          )}


          </div>

          {/* My Profile */}
          <div
            onClick={handleClick}
            className="flex items-center space-x-2 cursor-pointer text-gray-600 hover:text-[#0DCEDA] transition"
          >
            <FaUserCircle className="text-2xl sm:text-3xl" />
            <span className="hidden sm:inline text-sm sm:text-base">My Profile</span>
          </div>

          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="sm:hidden p-2 rounded-full bg-gray-200/20 text-gray-700 hover:bg-gray-300 hover:text-black focus:outline-none"
          >
            <MdMenu size={20} className='text-white'/>
          </button>


        </div>
      </div>
    </header>
  );
}

