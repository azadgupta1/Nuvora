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


import React, { useEffect } from 'react';
import Sidebar from '../components/Dashboard/SideBar';
import Header from '../components/Dashboard/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import io from 'socket.io-client';
import 'react-toastify/dist/ReactToastify.css';

const socket = io("http://localhost:3000"); // Change to production URL in deployment

function DashBoard() {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const { userId } = jwtDecode(token);
        socket.emit("userOnline", userId);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }

    socket.on("newBookingRequest", (data) => {
      toast.info(`📥 New booking from ${data.fromUser} for ${data.skillName}`, {
        position: "top-right",
        autoClose: 5000,
        toastId: `newBooking-${data.bookingId}`,
      });
    });

    socket.on("bookingStatusUpdated", (data) => {
      toast.success(`✅ Booking for ${data.skillName} is now ${data.status}`, {
        position: "top-right",
        autoClose: 5000,
        toastId: `statusUpdate-${data.id}`,
      });
    });

    return () => {
      socket.off("newBookingRequest");
      socket.off("bookingStatusUpdated");
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="w-full">
        <Header />
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-20 bg-white text-white">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 mt-10 overflow-auto bg-gray-100 relative">
          {/* ✅ This button is for manual toast testing */}
          {/* <div className="absolute top-4 right-4 z-50">
            <button
              onClick={() => toast("✅ Test Toast is working!", { position: "top-right" })}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            >
              Test Toast
            </button>
          </div> */}

          <Outlet />
        </div>
      </div>

      {/* ✅ Global Toast Container */}
      <ToastContainer position="top-right" autoClose={4000} newestOnTop />
    </div>
  );
}

export default DashBoard;












// import React, { useEffect } from 'react';
// import Sidebar from '../components/Dashboard/SideBar';
// import Header from '../components/Dashboard/Header';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import { jwtDecode } from 'jwt-decode';
// import io from 'socket.io-client';
// import 'react-toastify/dist/ReactToastify.css';

// const socket = io("http://localhost:3000"); // adjust URL for deployment

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
//       toast.info(`New booking from ${data.fromUser} for ${data.skillName}`, {
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
//     };
//   }, []);

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

//       {/* Toast notifications */}
//       <ToastContainer />
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

// const socket = io("http://localhost:3000"); // ✅ Change this when deploying

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

//     // ✅ Listen for new bookings
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

//       {/* Global toast notifications */}
//       <ToastContainer />
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

// const socket = io("http://localhost:3000"); // ✅ Change this when deploying

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

//     // ✅ Listen for new bookings
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
//       // Fix skillName access here as well
//       toast.success(`✅ Booking for ${data.skill.name} is now ${data.status}`, {
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

//       {/* Global toast notifications */}
//       <ToastContainer />
//     </div>
//   );
// }

// export default DashBoard;
