// import React from 'react';
// import Sidebar from '../components/Dashboard/SideBar';
// import Header from '../components/Dashboard/Header';
// import { Outlet } from 'react-router-dom';

// function DashBoard() {
//   return (
//     <div className="h-screen flex flex-col">
//       {/* Top Bar - Full Width */}
//       <div className="w-full">
//         <Header />
//       </div>

//       {/* Bottom Section: Sidebar + Content */}
//       <div className="flex flex-1">
//         {/* Sidebar on the left */}
//         <div className="w-20 bg-white text-white">
//           <Sidebar />
//         </div>

//         {/* Main Content on the right */}
//         <div className="flex-1 p-0 mt-10 overflow-auto bg-gray-100">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashBoard;


// import React, { useEffect } from 'react';
// import Sidebar from '../components/Dashboard/SideBar';
// import Header from '../components/Dashboard/Header';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';
// import io from 'socket.io-client';
// import 'react-toastify/dist/ReactToastify.css';

// const socket = io("http://localhost:3000"); // ✅ Change this to your deployed URL in prod

// function DashBoard() {
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       try {
//         const { userId } = jwtDecode(token);
//         socket.emit("userOnline", userId);
//       } catch (err) {
//         console.error("Invalid token:", err);
//       }
//     }

//     // ✅ Listen for new booking requests
//     socket.on("newBookingRequest", (data) => {
//       toast.info(`📥 New booking from ${data.fromUser} for ${data.skillName}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     });

//     // ✅ Listen for booking status updates
//     socket.on("bookingStatusUpdated", (data) => {
//       toast.success(`✅ Booking for ${data.skillName} is now ${data.status}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     });

//     return () => {
//       socket.off("newBookingRequest");
//       socket.off("bookingStatusUpdated");
//     };
//   }, []);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Top Bar */}
//       <div className="w-full">
//         <Header />
//       </div>

//       {/* Bottom Section: Sidebar + Content */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <div className="w-20 bg-white text-white">
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 p-0 mt-10 overflow-auto bg-gray-100">
//           <Outlet />
//         </div>
//       </div>

//       {/* ✅ Global Toasts */}
//       <ToastContainer position="top-right" autoClose={4000} />
//     </div>
//   );
// }

// export default DashBoard;



// import React, { useEffect } from 'react';
// import Sidebar from '../components/Dashboard/SideBar';
// import Header from '../components/Dashboard/Header';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';
// import io from 'socket.io-client';
// import 'react-toastify/dist/ReactToastify.css';

// const socket = io("http://localhost:3000"); // ✅ Replace with your live URL if deploying

// function DashBoard() {
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       try {
//         const { userId } = jwtDecode(token);
//         socket.emit("userOnline", userId);
//       } catch (err) {
//         console.error("Invalid token:", err);
//       }
//     }

//     // ✅ Global new booking notification
//     socket.on("newBookingRequest", (data) => {
//       toast.info(`📥 New booking from ${data.fromUser} for ${data.skillName}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     });

//     // ✅ Global booking status update
//     socket.on("bookingStatusUpdated", (data) => {
//       toast.success(`✅ Booking for ${data.skillName} is now ${data.status}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });
//     });

//     return () => {
//       socket.off("newBookingRequest");
//       socket.off("bookingStatusUpdated");
//     };
//   }, []);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Top Header */}
//       <div className="w-full">
//         <Header />
//       </div>

//       {/* Sidebar + Content */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <div className="w-20 bg-white text-white">
//           <Sidebar />
//         </div>

//         {/* Outlet */}
//         <div className="flex-1 p-0 mt-10 overflow-auto bg-gray-100">
//           <Outlet />
//         </div>
//       </div>

//       {/* ✅ Global Toast Container */}
//       <ToastContainer position="top-right" autoClose={4000} />
//     </div>
//   );
// }

// export default DashBoard;


// import React, { useEffect } from 'react';
// import Sidebar from '../components/Dashboard/SideBar';
// import Header from '../components/Dashboard/Header';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';
// import io from 'socket.io-client';
// import 'react-toastify/dist/ReactToastify.css';
// import SkillModal from "./SkillModal";


// const socket = io("http://localhost:3000"); // Change to production URL in deployment

// function DashBoard() {
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       try {
//         const { userId } = jwtDecode(token);
//         socket.emit("userOnline", userId);
//       } catch (err) {
//         console.error("Invalid token:", err);
//       }
//     }

//     socket.on("newBookingRequest", (data) => {
//       toast.info(`📥 New booking from ${data.fromUser} for ${data.skillName}`, {
//         position: "top-right",
//         autoClose: 5000,
//         toastId: `newBooking-${data.bookingId}`,
//       });
//     });

//     socket.on("bookingStatusUpdated", (data) => {
//       toast.success(`✅ Booking for ${data.skillName} is now ${data.status}`, {
//         position: "top-right",
//         autoClose: 5000,
//         toastId: `statusUpdate-${data.id}`,
//       });
//     });

//     return () => {
//       socket.off("newBookingRequest");
//       socket.off("bookingStatusUpdated");
//     };
//   }, []);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Header */}
//       <div className="w-full">
//         <Header />
//       </div>

//       {/* Sidebar + Main Content */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <div className="w-20 bg-white text-white">
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 mt-10 overflow-auto bg-gray-100 relative">
//           {/* ✅ This button is for manual toast testing */}
//           {/* <div className="absolute top-4 right-4 z-50">
//             <button
//               onClick={() => toast("✅ Test Toast is working!", { position: "top-right" })}
//               className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
//             >
//               Test Toast
//             </button>
//           </div> */}

//           <Outlet />
//         </div>
//       </div>

//       {/* ✅ Global Toast Container */}
//       {/* Skill Setup Modal */}
//       <SkillModal isOpen={showSkillModal} onClose={() => setShowSkillModal(false)} />
//       <ToastContainer position="top-right" autoClose={4000} newestOnTop />
//     </div>
//   );
// }

// export default DashBoard;













// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Dashboard/SideBar';
// import Header from '../components/Dashboard/Header';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';
// import io from 'socket.io-client';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import SkillModal from './SkillModal';

// const socket = io("http://localhost:3000"); // ✅ Update for production

// function DashBoard() {
//   const [showSkillModal, setShowSkillModal] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) return;

//     try {
//       const { userId } = jwtDecode(token);

//       // Notify socket server
//       socket.emit("userOnline", userId);

//       // 🔍 Fetch user's skill profile
//       axios
//         .get("http://localhost:3000/api/skills/user", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((res) => {
//           // If skill profile exists, do nothing
//           if (!res?.data?.id) {
//             setShowSkillModal(true); // No skill profile, show modal
//           }
//         })
//         .catch((err) => {
//           if (err.response?.status === 404) {
//             setShowSkillModal(true); // No skill found
//           } else {
//             console.error("Failed to fetch skill:", err);
//           }
//         });
//     } catch (err) {
//       console.error("Invalid token:", err);
//     }

//     // 🔔 Socket notifications
//     socket.on("newBookingRequest", (data) => {
//       toast.info(`📥 New booking from ${data.fromUser} for ${data.skillName}`, {
//         position: "top-right",
//         autoClose: 5000,
//         toastId: `newBooking-${data.bookingId}`,
//       });
//     });

//     socket.on("bookingStatusUpdated", (data) => {
//       toast.success(`✅ Booking for ${data.skillName} is now ${data.status}`, {
//         position: "top-right",
//         autoClose: 5000,
//         toastId: `statusUpdate-${data.id}`,
//       });
//     });

//     // Clean up sockets
//     return () => {
//       socket.off("newBookingRequest");
//       socket.off("bookingStatusUpdated");
//     };
//   }, []);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Header */}
//       <div className="w-full">
//         <Header />
//       </div>

//       {/* Sidebar + Main Content */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <div className="w-20 bg-white text-white">
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 mt-10 overflow-auto bg-gray-100 relative">
//           <Outlet />
//         </div>
//       </div>

//       {/* Modal */}
//       <SkillModal isOpen={showSkillModal} onClose={() => setShowSkillModal(false)} />

//       {/* Toasts */}
//       <ToastContainer position="top-right" autoClose={4000} newestOnTop />
//     </div>
//   );
// }

// export default DashBoard;



// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Dashboard/SideBar';
// import Header from '../components/Dashboard/Header';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';
// import io from 'socket.io-client';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import SkillModal from './SkillModal';

// // Socket connection (global)
// const socket = io("http://localhost:3000"); // ✅ Change URL in production if needed

// function DashBoard() {
//   const [showSkillModal, setShowSkillModal] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const { userId } = jwtDecode(token);

//       // 👉 Notify server that user is online
//       socket.emit("userOnline", userId);

//       // 👉 Check if user has a skill profile
//       axios
//         .get("http://localhost:3000/api/skills/user", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((res) => {
//           if (!res?.data?.id) {
//             setShowSkillModal(true); // No skill profile
//           }
//         })
//         .catch((err) => {
//           if (err.response?.status === 404) {
//             setShowSkillModal(true);
//           } else {
//             console.error("Failed to fetch skill:", err);
//           }
//         });
//     } catch (err) {
//       console.error("Invalid token:", err);
//     }

//     // 🔔 Socket listeners (global, for toasts)
//     socket.on("newBookingRequest", (data) => {
//       toast.info(`📥 New booking from ${data.fromUser} for ${data.skillName}`, {
//         position: "top-right",
//         autoClose: 5000,
//         toastId: `newBooking-${data.bookingId}`,
//       });
//     });

//     socket.on("bookingStatusUpdated", (data) => {
//       toast.success(`✅ Booking for ${data.skill.name} is now ${data.status}`, {
//         position: "top-right",
//         autoClose: 5000,
//         toastId: `statusUpdate-${data.id}`,
//       });
//     });

//     // 👇 Clean up on unmount
//     return () => {
//       socket.off("newBookingRequest");
//       socket.off("bookingStatusUpdated");
//     };
//   }, []);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Header */}
//       <div className="w-full">
//         <Header />
//       </div>

//       {/* Sidebar + Main Content */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <div className="w-20 bg-white text-white">
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 mt-10 overflow-auto bg-gray-100 relative">
//           <Outlet />
//         </div>
//       </div>

//       {/* Skill Profile Modal */}
//       <SkillModal isOpen={showSkillModal} onClose={() => setShowSkillModal(false)} />

//       {/* Global Toasts */}
//       <ToastContainer position="top-right" autoClose={4000} newestOnTop />
//     </div>
//   );
// }

// export default DashBoard;



// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Dashboard/SideBar';
// import Header from '../components/Dashboard/Header';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';
// import 'react-toastify/dist/ReactToastify.css';
// import SkillModal from './SkillModal';
// import socket from '../socket'; // ✅ use shared instance

// function DashBoard() {
//   const [showSkillModal, setShowSkillModal] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const { userId } = jwtDecode(token);

//       // ✅ Connect only once and emit userOnline
//       if (!socket.connected) {
//         socket.connect();
//         socket.emit("userOnline", userId);
//       }

//       // ✅ Only set listeners once
//       const handleNewBooking = (data) => {
//         toast.info(`📥 New booking from ${data.fromUser} for ${data.skillName}`, {
//           position: "top-right",
//           autoClose: 5000,
//           toastId: `newBooking-${data.bookingId}`,
//         });
//       };

//       const handleBookingStatus = (data) => {
//         toast.success(`✅ Booking for ${data.skill.name} is now ${data.status}`, {
//           position: "top-right",
//           autoClose: 5000,
//           toastId: `statusUpdate-${data.id}`,
//         });
//       };

//       socket.on("newBookingRequest", handleNewBooking);
//       socket.on("bookingStatusUpdated", handleBookingStatus);

//       // ✅ Check for skill profile (unchanged)
//       axios
//         .get("http://localhost:3000/api/skills/user", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((res) => {
//           if (!res?.data?.id) setShowSkillModal(true);
//         })
//         .catch((err) => {
//           if (err.response?.status === 404) setShowSkillModal(true);
//         });

//       // ✅ Clean up listeners only (not socket disconnect)
//       return () => {
//         socket.off("newBookingRequest", handleNewBooking);
//         socket.off("bookingStatusUpdated", handleBookingStatus);
//       };
//     } catch (err) {
//       console.error("Invalid token:", err);
//     }
//   }, []);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Header */}
//       <div className="w-full">
//         <Header />
//       </div>

//       {/* Sidebar + Main Content */}
//       <div className="flex flex-1 overflow-hidden">
//         <div className="w-20 bg-white text-white">
//           <Sidebar />
//         </div>

//         <div className="flex-1 mt-10 overflow-auto bg-gray-100 relative">
//           <Outlet />
//         </div>
//       </div>

//       <SkillModal isOpen={showSkillModal} onClose={() => setShowSkillModal(false)} />

//       {/* Global Toast Container */}
//       <ToastContainer position="top-right" autoClose={4000} newestOnTop />
//     </div>
//   );
// }

// export default DashBoard;

















import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Dashboard/SideBar';
import Header from '../components/Dashboard/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import SkillModal from './SkillModal';
import socket from '../socket';

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
        .get("http://localhost:3000/api/skills/user", {
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
