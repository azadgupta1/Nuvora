// import React, { useState } from 'react';
// import { FaSearch, FaUserCircle, FaBell, FaEnvelope } from 'react-icons/fa';
// import { FiMoreVertical } from 'react-icons/fi';
// import { useNavigate, Link } from 'react-router-dom';
// import Nuvora_2 from '../../assets/Nuvora_2.png';
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";


// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [search, setSearch] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (search.trim()) {
//       navigate(`/search?query=${search}`);
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#003344] text-white px-4 sm:px-6 py-3">
//       <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto gap-3">
//         {/* Logo */}
//         <div className="flex items-center gap-2 flex-shrink-0">
//           <h1 className="text-[#0DCEDA] font-extrabold text-2xl tracking-wide font-mono">Nuvora</h1>
//           <img src={Nuvora_2} alt="Nuvora" className="w-8 h-8 object-contain" />
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4 sm:space-x-6 text-xl mt-2 sm:mt-0">
//           {/* Chat */}
//           <div
//             className="relative cursor-pointer"
//             onClick={() => navigate('/dashboard/chatlayout')}
//           >
//             <IoChatbubbleEllipsesOutline />
//             <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 py-0.5 rounded-full">3</span>
//           </div>

//           {/* Notifications */}
//           <div className="relative cursor-pointer">
//             <FaBell />
//             <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 py-0.5 rounded-full">1</span>
//           </div>

//           {/* Profile */}
//           <div className="relative">
//             <button onClick={() => setProfileOpen(!profileOpen)}>
//               <FaUserCircle className="text-2xl sm:text-3xl text-white hover:text-[#0DCEDA] transition" />
//             </button>
//             {profileOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20 text-gray-800">
//                 <Link to="/edit-profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setProfileOpen(false)}>
//                   Edit Profile
//                 </Link>
//                 <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setProfileOpen(false)}>
//                   Settings
//                 </Link>
//                 <Link to="/logout" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setProfileOpen(false)}>
//                   Logout
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* More */}
//           <div className="relative">
//             <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-200 hover:text-white">
//               <FiMoreVertical size={22} />
//             </button>
//             {menuOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20 text-gray-800">
//                 <Link to="/create-skill" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
//                   Create Skill
//                 </Link>
//                 <Link to="/my-skills" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
//                   My Skills
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { FaUserCircle, FaBell } from 'react-icons/fa';
// import { FiMoreVertical } from 'react-icons/fi';
// import { useNavigate, Link } from 'react-router-dom';
// import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
// import Nuvora_2 from '../../assets/Nuvora_2.png';
// import axios from 'axios';

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);

//   const navigate = useNavigate();

//   const token = localStorage.getItem('token');


//   const decodeToken = (token) => {
//     try {
//       const payload = token.split('.')[1];
//       const decoded = atob(payload);
//       return JSON.parse(decoded);
//     } catch (err) {
//       console.error('Failed to decode token', err);
//       return null;
//     }
//   };



//   // Get token from localStorage
//   const getAuthConfig = () => {
    
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`
//       },
//       withCredentials: true
//     };
//   };

//   // Fetch notifications
// const fetchNotifications = async () => {
//   try {
//     const response = await axios.get("http://localhost:3000/api/notifications", {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     console.log("Full Axios Response:", response);
//     // Ensure notifications is an array before filtering
//     const notifications = Array.isArray(response.data?.notifications)
//       ? response.data.notifications
//       : [];

//     console.log("Notification is : ", notifications);

//     const unread = notifications.filter((n) => !n.isRead);

//     console.log("Unread is : ", unread);
//     setNotifications(unread);
//   } catch (error) {
//     console.error("Error fetching notifications:", error);
//     setNotifications([]); // fallback to empty array
//   }
// };


//   // Mark notification as read
//   const markAsRead = async (id) => {
//     try {
//       await axios.patch(`http://localhost:3000/api/notifications/${id}/read`, {}, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           },
//           withCredentials: true
//         });
        
//       setNotifications(prev =>
//         prev.map(n => (n.id === id ? { ...n, isRead: true } : n))
//       );
//       setUnreadCount(prev => Math.max(prev - 1, 0));
//     } catch (err) {
//       console.error('Error marking notification as read', err);
//     }
//   };

//   // Toggle notifications dropdown
//   const handleNotifClick = () => {
//     setNotifOpen(!notifOpen);
//     if (!notifOpen) {
//       fetchNotifications();
//     }
//   };



//   const handleClick = () => {
//     if (!token) return;

//     const decoded = decodeToken(token);
//     const userId = decoded?.userId; // <- FIXED here

//     console.log("User ID is : ", userId);

//     if (userId) {
//       navigate(`/dashboard/profile/${userId}`);
//     } else {
//       console.error('User ID not found in token');
//     }
//   };


//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-[#003344] text-white px-4 sm:px-6 py-3">
//       <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto gap-3">
//         {/* Logo */}
//         <div className="flex items-center gap-2 flex-shrink-0">
//           <h1 className="text-[#0DCEDA] font-extrabold text-2xl tracking-wide font-mono">Nuvora</h1>
//           <img src={Nuvora_2} alt="Nuvora" className="w-8 h-8 object-contain" />
//         </div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4 sm:space-x-6 text-xl mt-2 sm:mt-0">
//           {/* Chat */}
//           <div
//             className="relative cursor-pointer"
//             onClick={() => navigate('/dashboard/chatlayout')}
//           >
//             <IoChatbubbleEllipsesOutline />
//             <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 py-0.5 rounded-full">3</span>
//           </div>

//           {/* Notifications */}
//           <div className="relative cursor-pointer" onClick={handleNotifClick}>
//             <FaBell />
//             {unreadCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white px-1.5 py-0.5 rounded-full">
//                 {unreadCount}
//               </span>
//             )}

//             {/* Dropdown modal */}
//             {notifOpen && (
//               <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-30 text-gray-800 max-h-96 overflow-y-auto">
//                 <div className="p-3 border-b font-semibold text-gray-700">
//                   Notifications
//                 </div>
//                 {notifications.length === 0 ? (
//                   <div className="p-4 text-gray-500 text-sm">No notifications</div>
//                 ) : (
//                   notifications.map((notif) => (
//                     <div
//                       key={notif.id}
//                       className={`p-3 text-sm border-b hover:bg-gray-100 cursor-pointer ${
//                         notif.isRead ? 'text-gray-500' : 'text-gray-800 font-medium'
//                       }`}
//                       onClick={() => markAsRead(notif.id)}
//                     >
//                       {notif.content}
//                       <div className="text-xs text-gray-400 mt-1">
//                         {new Date(notif.createdAt).toLocaleString()}
//                       </div>
//                     </div>
//                   ))
//                 )}
//               </div>
//             )}
//           </div>


//           <div
//             onClick={handleClick}
//             className="flex items-center space-x-2 cursor-pointer text-gray-600 hover:text-[#0DCEDA] transition"
//           >
//             <FaUserCircle className="text-2xl sm:text-3xl" />
//             <span className="text-sm sm:text-base">My Profile</span>
//           </div>

//           {/* More */}
//           <div className="relative">
//             <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-200 hover:text-white">
//               <FiMoreVertical size={22} />
//             </button>
//             {menuOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20 text-gray-800">
//                 <Link to="/create-skill" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
//                   Create Skill
//                 </Link>
//                 <Link to="/my-skills" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
//                   My Skills
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }





import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import Nuvora_2 from '../../assets/Nuvora_2.png';
import axios from 'axios';
import socket from '../../socket';


export default function Header() {
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
      const response = await axios.get("http://localhost:3000/api/notifications", {
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

  const markAsRead = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/api/notifications/${id}/read`, {}, {
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


  // const getRelativeTime = (date) => {
  //   const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  //   const now = new Date();
  //   const then = new Date(date);
  //   const diff = (now - then) / 1000; // in seconds

  //   if (diff < 60) return rtf.format(-Math.floor(diff), 'second');
  //   if (diff < 3600) return rtf.format(-Math.floor(diff / 60), 'minute');
  //   if (diff < 86400) return rtf.format(-Math.floor(diff / 3600), 'hour');
  //   if (diff < 2592000) return rtf.format(-Math.floor(diff / 86400), 'day');
  //   if (diff < 31536000) return rtf.format(-Math.floor(diff / 2592000), 'month');

  //   return rtf.format(-Math.floor(diff / 31536000), 'year');
  // };

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


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#003344] text-white px-4 sm:px-6 py-3">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <h1 className="text-[#0DCEDA] font-extrabold text-2xl tracking-wide font-mono">LearnMate</h1>
          <img src={Nuvora_2} alt="Nuvora" className="w-8 h-8 object-contain" />
        </div>

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
              w-[95vw] sm:w-80 
              left-1/2 sm:left-auto 
              transform -translate-x-1/2 sm:transform-none 
              bg-white border border-gray-200 rounded-lg shadow-lg 
              z-50 text-gray-800 max-h-96 overflow-y-auto
            ">
              <div className="p-3 border-b font-semibold text-gray-700">
                Notifications
              </div>
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
            <span className="text-sm sm:text-base">My Profile</span>
          </div>

        </div>
      </div>
    </header>
  );
}









 {/* Dropdown modal */}
            {/* {notifOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-30 text-gray-800 max-h-96 overflow-y-auto">
                <div className="p-3 border-b font-semibold text-gray-700">
                  Notifications
                </div>
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
            )} */}

            {/* {notifOpen && (
  <div className="absolute top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 text-gray-800 max-h-96 overflow-y-auto
                  w-[95vw] sm:w-80 right-2 sm:right-0 sm:left-auto">
    <div className="p-3 border-b font-semibold text-gray-700">
      Notifications
    </div>
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
)} */}    











{/* More */}
          {/* <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-200 hover:text-white">
              <FiMoreVertical size={22} />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-20 text-gray-800">
                <Link to="/create-skill" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  Create Skill
                </Link>
                <Link to="/my-skills" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  My Skills
                </Link>
              </div>
            )}
          </div> */}