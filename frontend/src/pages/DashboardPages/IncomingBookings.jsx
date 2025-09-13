// import React, { useEffect, useState } from 'react';

// function IncomingBookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch incoming bookings on component mount
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/api/bookings/received', {
//           headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         });

//         const data = await response.json();

//         if (!response.ok) throw new Error(data.message || "Failed to fetch");

//         setBookings(data.bookings);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   if (loading) return <div>Loading bookings...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h2>Skill Booking Requests</h2>

//       {bookings.length === 0 ? (
//         <p>No one has requested your skills yet.</p>
//       ) : (
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {bookings.map(booking => (
//             <li key={booking.id} style={{
//               border: '1px solid #ddd',
//               borderRadius: '8px',
//               padding: '12px',
//               marginBottom: '10px',
//               backgroundColor: '#f9f9f9'
//             }}>
//               <div><strong>Skill:</strong> {booking.skill.name} ({booking.skill.category})</div>
//               <div><strong>Requested By:</strong> {booking.user.name} ({booking.user.email})</div>
//               <div><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</div>
//               <div><strong>Time:</strong> {new Date(booking.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
//               <div><strong>Status:</strong> {booking.status}</div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default IncomingBookings;


// import React, { useEffect, useState } from 'react';

// function IncomingBookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await fetch('http://localhost:3000/api/bookings/received', {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Failed to fetch");

//       setBookings(data.bookings);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStatus = async (id, newStatus) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/bookings/${id}/status`, {
//         method: 'PATCH',
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to update");

//       // Update the status locally
//       setBookings(prev =>
//         prev.map(booking =>
//           booking.id === id ? { ...booking, status: newStatus } : booking
//         )
//       );
//     } catch (err) {
//       alert(`Error: ${err.message}`);
//     }
//   };

//   if (loading) return <div>Loading bookings...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h2>Skill Booking Requests</h2>

//       {bookings.length === 0 ? (
//         <p>No one has requested your skills yet.</p>
//       ) : (
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           {bookings.map(booking => (
//             <li key={booking.id} style={{
//               border: '1px solid #ddd',
//               borderRadius: '8px',
//               padding: '12px',
//               marginBottom: '10px',
//               backgroundColor: '#f9f9f9'
//             }}>
//               <div><strong>Skill:</strong> {booking.skill.name} ({booking.skill.category})</div>
//               <div><strong>Requested By:</strong> {booking.user.name} ({booking.user.email})</div>
//               <div><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</div>
//               <div><strong>Time:</strong> {new Date(booking.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
//               <div><strong>Status:</strong> {booking.status}</div>

//               {booking.status === 'Pending' && (
//                 <div style={{ marginTop: '10px' }}>
//                   <button onClick={() => updateStatus(booking.id, 'Confirmed')} style={{ marginRight: '8px' }}>
//                     Confirm
//                   </button>
//                   <button onClick={() => updateStatus(booking.id, 'Cancelled')} style={{ color: 'red' }}>
//                     Cancel
//                   </button>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default IncomingBookings;





// import React, { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";

// const IncomingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/bookings/received", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Failed to fetch");

//       setBookings(data.bookings);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStatus = async (id, newStatus) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/bookings/${id}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to update");

//       setBookings((prev) =>
//         prev.map((booking) =>
//           booking.id === id ? { ...booking, status: newStatus } : booking
//         )
//       );
//     } catch (err) {
//       alert(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Incoming Booking Requests</h2>

//         {loading ? (
//           <p className="text-gray-600 text-lg">Loading bookings...</p>
//         ) : error ? (
//           <p className="text-red-600 font-semibold">{error}</p>
//         ) : bookings.length === 0 ? (
//           <p className="text-gray-600 text-lg">No one has requested your skills yet.</p>
//         ) : (
//           <div className="space-y-6">
//             {bookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {booking.skill.name}
//                       <span className="ml-2 text-sm text-blue-600">
//                         ({booking.skill.category})
//                       </span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-1">
//                       Requested by:{" "}
//                       <span className="font-medium text-gray-800">
//                         {booking.user.name}
//                       </span>{" "}
//                       ({booking.user.email})
//                     </p>
//                     <p className="text-gray-600 text-sm mt-1">
//                       <FiClock className="inline mr-1" />
//                       {new Date(booking.date).toLocaleDateString()} at{" "}
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                   </div>

//                   <span
//                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
//                       booking.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : booking.status === "Confirmed"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {booking.status}
//                   </span>
//                 </div>

//                 {booking.status === "Pending" && (
//                   <div className="mt-4 flex gap-4">
//                     <button
//                       onClick={() => updateStatus(booking.id, "Confirmed")}
//                       className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaCheckCircle /> Confirm
//                     </button>
//                     <button
//                       onClick={() => updateStatus(booking.id, "Cancelled")}
//                       className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaTimesCircle /> Cancel
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncomingBookings;















// import React, { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
// import { jwtDecode } from "jwt-decode";
// import io from "socket.io-client";

// const socket = io("http://localhost:3000"); // adjust if deployed

// const IncomingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchBookings();

//     const token = localStorage.getItem("token");
//     if (token) {
//       const { userId } = jwtDecode(token);
//       socket.emit("userOnline", userId);
//     }

//     socket.on("newBookingRequest", (data) => {
//       // Optionally show a toast or alert here
//       // alert(`New booking from ${data.fromUser} for ${data.skillName}`);

//       // Update the bookings state to include the new one
//       setBookings((prev) => [
//         {
//           id: data.bookingId,
//           status: "Pending",
//           date: new Date(data.date),
//           time: new Date(`1970-01-01T${data.time}`), // adjust time parsing
//           user: { name: data.fromUser, email: "N/A" }, // email not sent? use placeholder
//           skill: { name: data.skillName, category: "Unknown" }, // placeholder
//         },
//         ...prev,
//       ]);
//     });

//     return () => {
//       socket.off("newBookingRequest");
//       // socket.disconnect();
//     };
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/bookings/received", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Failed to fetch");

//       setBookings(data.bookings);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStatus = async (id, newStatus) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/bookings/${id}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to update");

//       setBookings((prev) =>
//         prev.map((booking) =>
//           booking.id === id ? { ...booking, status: newStatus } : booking
//         )
//       );
//     } catch (err) {
//       alert(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Incoming Booking Requests</h2>

//         {loading ? (
//           <p className="text-gray-600 text-lg">Loading bookings...</p>
//         ) : error ? (
//           <p className="text-red-600 font-semibold">{error}</p>
//         ) : bookings.length === 0 ? (
//           <p className="text-gray-600 text-lg">No one has requested your skills yet.</p>
//         ) : (
//           <div className="space-y-6">
//             {bookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {booking.skill.name}
//                       <span className="ml-2 text-sm text-blue-600">
//                         ({booking.skill.category})
//                       </span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-1">
//                       Requested by:{" "}
//                       <span className="font-medium text-gray-800">
//                         {booking.user.name}
//                       </span>{" "}
//                       ({booking.user.email || "N/A"})
//                     </p>
//                     <p className="text-gray-600 text-sm mt-1">
//                       <FiClock className="inline mr-1" />
//                       {new Date(booking.date).toLocaleDateString()} at{" "}
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                   </div>

//                   <span
//                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
//                       booking.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : booking.status === "Confirmed"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {booking.status}
//                   </span>
//                 </div>

//                 {booking.status === "Pending" && (
//                   <div className="mt-4 flex gap-4">
//                     <button
//                       onClick={() => updateStatus(booking.id, "Confirmed")}
//                       className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaCheckCircle /> Confirm
//                     </button>
//                     <button
//                       onClick={() => updateStatus(booking.id, "Cancelled")}
//                       className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaTimesCircle /> Cancel
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncomingBookings;

















// import React, { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
// import { jwtDecode } from "jwt-decode";
// import io from "socket.io-client";

// const socket = io("http://localhost:3000"); // adjust URL if deployed

// const IncomingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetchBookings();

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
//       // Optionally show toast or alert here
//       // alert(`New booking from ${data.fromUser} for ${data.skillName}`);

//       // Construct new booking object
//       const newBooking = {
//         id: data.bookingId,
//         status: data.status || "Pending",
//         date: new Date(data.date),
//         time: new Date(`1970-01-01T${data.time}`), // adjust if `data.time` is string "HH:mm:ss"
//         user: { name: data.fromUser, email: "N/A" },
//         skill: { name: data.skillName, category: "Unknown" },
//         message: data.message || "",
//       };

//       setBookings((prev) => [newBooking, ...prev]);
//     });

//     return () => {
//       socket.off("newBookingRequest");
//       // socket.disconnect(); // Usually avoid disconnecting if socket used app-wide
//     };
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/bookings/received", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || "Failed to fetch");

//       setBookings(data.bookings);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateStatus = async (id, newStatus) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/bookings/${id}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to update");

//       setBookings((prev) =>
//         prev.map((booking) => (booking.id === id ? { ...booking, status: newStatus } : booking))
//       );
//     } catch (err) {
//       alert(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Incoming Booking Requests</h2>

//         {loading ? (
//           <p className="text-gray-600 text-lg">Loading bookings...</p>
//         ) : error ? (
//           <p className="text-red-600 font-semibold">{error}</p>
//         ) : bookings.length === 0 ? (
//           <p className="text-gray-600 text-lg">No one has requested your skills yet.</p>
//         ) : (
//           <div className="space-y-6">
//             {bookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {booking.skill.name}
//                       <span className="ml-2 text-sm text-blue-600">
//                         ({booking.skill.category})
//                       </span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-1">
//                       Requested by:{" "}
//                       <span className="font-medium text-gray-800">{booking.user.name}</span>{" "}
//                       ({booking.user.email || "N/A"})
//                     </p>
//                     <p className="text-gray-600 text-sm mt-1">
//                       <FiClock className="inline mr-1" />
//                       {new Date(booking.date).toLocaleDateString()} at{" "}
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                     {booking.message && (
//                       <p className="mt-2 italic text-gray-500">Message: {booking.message}</p>
//                     )}
//                   </div>

//                   <span
//                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
//                       booking.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : booking.status === "Confirmed"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {booking.status}
//                   </span>
//                 </div>

//                 {booking.status === "Pending" && (
//                   <div className="mt-4 flex gap-4">
//                     <button
//                       onClick={() => updateStatus(booking.id, "Confirmed")}
//                       className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaCheckCircle /> Confirm
//                     </button>
//                     <button
//                       onClick={() => updateStatus(booking.id, "Cancelled")}
//                       className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaTimesCircle /> Cancel
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncomingBookings;














// import React, { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
// import { jwtDecode } from "jwt-decode";
// import io from "socket.io-client";
// import { toast } from 'react-toastify';
// import socket from "../socket";


// // Socket setup outside component to avoid multiple connections
// // const socket = io("http://localhost:3000");

// const IncomingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch initial bookings from API
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/bookings/received", {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();

//         if (!response.ok) throw new Error(data.message || "Failed to fetch");

//         setBookings(data.bookings);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // Socket listeners and userOnline emit
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

//     // Listen for new booking requests
//     socket.on("newBookingRequest", (data) => {
//       toast.info(`New booking from ${data.fromUser} for ${data.skillName}`, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });

//       const newBooking = {
//         id: data.bookingId,
//         status: data.status || "Pending",
//         date: new Date(data.date),
//         time: new Date(`1970-01-01T${data.time}`),
//         user: { name: data.fromUser, email: "N/A" },
//         skill: { name: data.skillName, category: "Unknown" },
//         message: data.message || "",
//       };

//       // Add new booking to state so UI updates in real-time
//       setBookings((prev) => [newBooking, ...prev]);
//     });

//     return () => {
//       socket.off("newBookingRequest");
//     };
//   }, []);

//   // Function to update booking status
//   const updateStatus = async (id, newStatus) => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/bookings/${id}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to update");

//       setBookings((prev) =>
//         prev.map((booking) => (booking.id === id ? { ...booking, status: newStatus } : booking))
//       );
//     } catch (err) {
//       alert(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Incoming Booking Requests</h2>

//         {loading ? (
//           <p className="text-gray-600 text-lg">Loading bookings...</p>
//         ) : error ? (
//           <p className="text-red-600 font-semibold">{error}</p>
//         ) : bookings.length === 0 ? (
//           <p className="text-gray-600 text-lg">No one has requested your skills yet.</p>
//         ) : (
//           <div className="space-y-6">
//             {bookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {booking.skill.name}
//                       <span className="ml-2 text-sm text-blue-600">({booking.skill.category})</span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-1">
//                       Requested by:{" "}
//                       <span className="font-medium text-gray-800">{booking.user.name}</span>{" "}
//                       ({booking.user.email || "N/A"})
//                     </p>
//                     <p className="text-gray-600 text-sm mt-1">
//                       <FiClock className="inline mr-1" />
//                       {new Date(booking.date).toLocaleDateString()} at{" "}
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                     {booking.message && (
//                       <p className="mt-2 italic text-gray-500">Message: {booking.message}</p>
//                     )}
//                   </div>

//                   <span
//                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
//                       booking.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : booking.status === "Confirmed"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {booking.status}
//                   </span>
//                 </div>

//                 {booking.status === "Pending" && (
//                   <div className="mt-4 flex gap-4">
//                     <button
//                       onClick={() => updateStatus(booking.id, "Confirmed")}
//                       className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaCheckCircle /> Confirm
//                     </button>
//                     <button
//                       onClick={() => updateStatus(booking.id, "Cancelled")}
//                       className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaTimesCircle /> Cancel
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncomingBookings;




// import React, { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
// import socket from "../../socket"; // ✅ shared socket instance

// const backendUrl = import.meta.env.VITE_BACKEND_URL;


// const IncomingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch initial bookings
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/bookings/received`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();


//         console.log("Bookings Received: ", data);

//         if (!response.ok) throw new Error(data.message || "Failed to fetch");

//         setBookings(data.bookings);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // Listen for new booking updates from socket
//   useEffect(() => {
//     const handleNewBooking = (data) => {
//       const newBooking = {
//         id: data.bookingId,
//         status: data.status || "Pending",
//         date: new Date(data.date),
//         time: new Date(`1970-01-01T${data.time}`),
//         user: { name: data.fromUser, email: "N/A" },
//         skill: { name: data.skillName, category: "Unknown" },
//         message: data.message || "",
//       };

//       setBookings((prev) => [newBooking, ...prev]);
//     };

//     socket.on("newBookingRequest", handleNewBooking);

//     return () => {
//       socket.off("newBookingRequest", handleNewBooking);
//     };
//   }, []);

//   // Handle confirmation / cancellation
//   const updateStatus = async (id, newStatus) => {
//     try {
//       const response = await fetch(`${backendUrl}/api/bookings/${id}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to update");

//       setBookings((prev) =>
//         prev.map((booking) =>
//           booking.id === id ? { ...booking, status: newStatus } : booking
//         )
//       );
//     } catch (err) {
//       alert(`Error: ${err.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Incoming Booking Requests</h2>

//         {loading ? (
//           <p className="text-gray-600 text-lg">Loading bookings...</p>
//         ) : error ? (
//           <p className="text-red-600 font-semibold">{error}</p>
//         ) : bookings.length === 0 ? (
//           <p className="text-gray-600 text-lg">No one has requested your skills yet.</p>
//         ) : (
//           <div className="space-y-6">
//             {bookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {booking.skill.name}
//                       <span className="ml-2 text-sm text-blue-600">
//                         ({booking.skill.category})
//                       </span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-1">
//                       Requested by:{" "}
//                       <span className="font-medium text-gray-800">
//                         {booking.user.name}
//                       </span>{" "}
//                       ({booking.user.email || "N/A"})
//                     </p>
//                     <p className="text-gray-600 text-sm mt-1">
//                       <FiClock className="inline mr-1" />
//                       {new Date(booking.date).toLocaleDateString()} at{" "}
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                     {booking.message && (
//                       <p className="mt-2 italic text-gray-500">
//                         Message: {booking.message}
//                       </p>
//                     )}
//                   </div>

//                   <span
//                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
//                       booking.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : booking.status === "Confirmed"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {booking.status}
//                   </span>
//                 </div>

//                 {booking.status === "Pending" && (
//                   <div className="mt-4 flex gap-4">
//                     <button
//                       onClick={() => updateStatus(booking.id, "Confirmed")}
//                       className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaCheckCircle /> Confirm
//                     </button>
//                     <button
//                       onClick={() => updateStatus(booking.id, "Cancelled")}
//                       className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaTimesCircle /> Cancel
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncomingBookings;




















// import React, { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
// import socket from "../../socket";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const IncomingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedTab, setSelectedTab] = useState("Received"); // ✅ Tabs: Received / Ignored

//   // Fetch initial bookings
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/bookings/received`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();
//         console.log("DATA received: ", data);
//         if (!response.ok) throw new Error(data.message || "Failed to fetch");

//         setBookings(data.bookings);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // Listen for new booking updates from socket
//   useEffect(() => {
//     const handleNewBooking = (data) => {
//       const newBooking = {
//         id: data.bookingId,
//         status: data.status || "Pending",
//         date: new Date(data.date),
//         time: new Date(`1970-01-01T${data.time}`),
//         user: { name: data.fromUser, email: "N/A" },
//         skill: { name: data.skillOfferedName, category: "Unknown" },
//         message: data.message || "",
//       };

//       setBookings((prev) => [newBooking, ...prev]);
//     };

//     socket.on("newBookingRequest", handleNewBooking);
//     return () => socket.off("newBookingRequest", handleNewBooking);
//   }, []);

//   // Handle confirmation / cancellation
//   const updateStatus = async (id, newStatus) => {
//     try {
//       const response = await fetch(`${backendUrl}/api/bookings/${id}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to update");

//       setBookings((prev) =>
//         prev.map((booking) =>
//           booking.id === id ? { ...booking, status: newStatus } : booking
//         )
//       );
//     } catch (err) {
//       alert(`Error: ${err.message}`);
//     }
//   };

//   // ✅ Filter based on selected tab
//   const filteredBookings =
//     selectedTab === "Received"
//       ? bookings.filter((b) => b.status !== "Cancelled")
//       : bookings.filter((b) => b.status === "Cancelled");

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10">
//       <div className="max-w-5xl mx-auto">
//         <header className="flex flex-col items-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Incoming Booking Requests
//           </h1>

//           {/* ✅ Tab Switcher */}
//           <div className="relative flex border-b border-gray-200 w-full max-w-xs justify-center">
//             {["Received", "Ignored"].map((tab) => {
//               const isActive = selectedTab === tab;
//               return (
//                 <button
//                   key={tab}
//                   onClick={() => setSelectedTab(tab)}
//                   className={`relative flex-1 text-center px-4 py-2 text-sm font-medium transition-colors duration-300 ${
//                     isActive ? "text-black" : "text-gray-400 hover:text-black"
//                   }`}
//                 >
//                   {tab}
//                   {isActive && (
//                     <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-all duration-300" />
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </header>

//         {loading ? (
//           <p className="text-gray-600 text-lg">Loading bookings...</p>
//         ) : error ? (
//           <p className="text-red-600 font-semibold">{error}</p>
//         ) : filteredBookings.length === 0 ? (
//           <p className="text-gray-600 text-lg">
//             {selectedTab === "Received"
//               ? "No active booking requests."
//               : "No ignored requests."}
//           </p>
//         ) : (
//           <div className="space-y-6">
//             {filteredBookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
//               >
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {booking.skill.name}
//                       <span className="ml-2 text-sm text-blue-600">
//                         ({booking.skill.category})
//                       </span>
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-1">
//                       Requested by:{" "}
//                       <span className="font-medium text-gray-800">
//                         {booking.user.name}
//                       </span>{" "}
//                       ({booking.user.email || "N/A"})
//                     </p>
//                     <p className="text-gray-600 text-sm mt-1">
//                       <FiClock className="inline mr-1" />
//                       {new Date(booking.date).toLocaleDateString()} at{" "}
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                     {booking.message && (
//                       <p className="mt-2 italic text-gray-500">
//                         Message: {booking.message}
//                       </p>
//                     )}
//                   </div>

//                   <span
//                     className={`text-sm font-semibold px-3 py-1 rounded-full ${
//                       booking.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-800"
//                         : booking.status === "Confirmed"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {booking.status}
//                   </span>
//                 </div>

//                 {/* ✅ Only show actions for Pending */}
//                 {booking.status === "Pending" && (
//                   <div className="mt-4 flex gap-4">
//                     <button
//                       onClick={() => updateStatus(booking.id, "Confirmed")}
//                       className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaCheckCircle /> Confirm
//                     </button>
//                     <button
//                       onClick={() => updateStatus(booking.id, "Cancelled")}
//                       className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       <FaTimesCircle /> Cancel
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncomingBookings;









// import React, { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
// import socket from "../../socket";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const IncomingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedTab, setSelectedTab] = useState("Received"); // ✅ Tabs: Received / Ignored

//   // Fetch initial bookings
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/bookings/received`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();
//         console.log("DATA received: ", data);
//         if (!response.ok) throw new Error(data.message || "Failed to fetch");

//         setBookings(data.bookings);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // Listen for new booking updates from socket
//   useEffect(() => {
//     // const handleNewBooking = (data) => {
//     //   const newBooking = {
//     //     id: data.bookingId,
//     //     status: data.status || "Pending",
//     //     date: new Date(data.date),
//     //     time: new Date(`1970-01-01T${data.time}`),
//     //     user: {
//     //       name: data.fromUser,
//     //       email: data.user.email,
//     //       profilePicture: data.user.profilePicture,
//     //       bio: "",
//     //     },
//     //     skill: { name: data.skillOfferedName, category: "Unknown" },
//     //     message: data.message || "",
//     //   };

//     //   setBookings((prev) => [newBooking, ...prev]);
//     // };

//     const handleNewBooking = (data) => {
//         const newBooking = {
//           id: data.bookingId,
//           status: data.status || "Pending",
//           date: new Date(data.date),
//           time: new Date(data.time), // already ISO, don’t re-wrap in 1970 hack
//           user: {
//             name: data.fromUser.name,
//             email: data.fromUser.email,
//             profilePicture: data.fromUser.profilePicture,
//             bio: "",
//           },
//           skill: { name: data.skillOfferedName, category: "Unknown" },
//           skillOfferedName: data.skillOfferedName,
//           skillWantedName: data.skillWantedName,
//           message: data.message || "",
//         };

//         setBookings((prev) => [newBooking, ...prev]);
//       };


//     socket.on("newBookingRequest", handleNewBooking);
//     return () => socket.off("newBookingRequest", handleNewBooking);
//   }, []);

//   // Handle confirmation / cancellation
//   const updateStatus = async (id, newStatus) => {
//     try {
//       const response = await fetch(`${backendUrl}/api/bookings/${id}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to update");

//       setBookings((prev) =>
//         prev.map((booking) =>
//           booking.id === id ? { ...booking, status: newStatus } : booking
//         )
//       );
//     } catch (err) {
//       alert(`Error: ${err.message}`);
//     }
//   };

//   // ✅ Filter based on selected tab
//   const filteredBookings =
//     selectedTab === "Received"
//       ? bookings.filter((b) => b.status !== "Cancelled")
//       : bookings.filter((b) => b.status === "Cancelled");

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10">
//       <div className="max-w-5xl mx-auto">
//         <header className="flex flex-col items-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Incoming Booking Requests
//           </h1>

//           {/* ✅ Tab Switcher */}
//           <div className="relative flex border-b border-gray-200 w-full max-w-xs justify-center">
//             {["Received", "Ignored"].map((tab) => {
//               const isActive = selectedTab === tab;
//               return (
//                 <button
//                   key={tab}
//                   onClick={() => setSelectedTab(tab)}
//                   className={`relative flex-1 text-center px-4 py-2 text-sm font-medium transition-colors duration-300 ${
//                     isActive ? "text-black" : "text-gray-400 hover:text-black"
//                   }`}
//                 >
//                   {tab}
//                   {isActive && (
//                     <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-all duration-300" />
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </header>

//         {loading ? (
//           <p className="text-gray-600 text-lg">Loading bookings...</p>
//         ) : error ? (
//           <p className="text-red-600 font-semibold">{error}</p>
//         ) : filteredBookings.length === 0 ? (
//           <p className="text-gray-600 text-lg">
//             {selectedTab === "Received"
//               ? "No active booking requests."
//               : "No ignored requests."}
//           </p>
//         ) : (
//           <div className="space-y-6">
//             {filteredBookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white shadow-md rounded-xl p-6 border border-gray-100 flex gap-6"
//               >
//                 {/* ✅ Profile Section */}
//                 <div className="flex-shrink-0">
//                   <img
//                     src={
//                       booking.user.profilePicture ||
//                       "/default-avatar.png"
//                     }
//                     alt={booking.user.name}
//                     className="w-16 h-16 rounded-full object-cover border"
//                   />
//                 </div>

//                 {/* ✅ Main Info */}
//                 <div className="flex-1">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">
//                         {booking.user.name}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         {booking.user.email}
//                       </p>
//                       {booking.user.bio && (
//                         <p className="text-sm text-gray-600 mt-1">
//                           {booking.user.bio}
//                         </p>
//                       )}
//                     </div>

//                     {/* Status pill */}
//                     <span
//                       className={`text-xs font-semibold px-3 py-1 rounded-full ${
//                         booking.status === "Pending"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : booking.status === "Confirmed"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>
//                   </div>

//                   {/* Skill + Details */}
//                   <div className="mt-4 space-y-2">
//                     <p className="text-gray-700 text-sm">
//                       Wants help with:{" "}
//                       <span className="font-medium text-blue-600">
//                         {booking.skillOfferedName || booking.skill.name}
//                       </span>{" "}
//                       <span className="text-gray-400">
//                         ({booking.skill.category})
//                       </span>
//                     </p>
//                     <p className="text-gray-700 text-sm">
//                       Offers in return:{" "}
//                       <span className="font-medium text-green-600">
//                         {booking.skillWantedName || "—"}
//                       </span>
//                     </p>
//                     <p className="text-gray-600 text-sm flex items-center">
//                       <FiClock className="mr-1" />
//                       {new Date(booking.date).toLocaleDateString()} at{" "}
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                     {booking.message && (
//                       <p className="mt-2 italic text-gray-500 text-sm">
//                         “{booking.message}”
//                       </p>
//                     )}
//                   </div>

//                   {/* ✅ Actions (only if Pending) */}
//                   {booking.status === "Pending" && (
//                     <div className="mt-4 flex gap-3">
//                       <button
//                         onClick={() => updateStatus(booking.id, "Confirmed")}
//                         className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                       >
//                         <FaCheckCircle /> Confirm
//                       </button>
//                       <button
//                         onClick={() => updateStatus(booking.id, "Cancelled")}
//                         className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                       >
//                         <FaTimesCircle /> Cancel
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncomingBookings;



































































import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import socket from "../../socket";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const IncomingBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedTab, setSelectedTab] = useState("Received");

  // Fetch initial bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/bookings/received`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Failed to fetch");

        setBookings(data.bookings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Listen for new booking updates from socket
  useEffect(() => {
    const handleNewBooking = (data) => {
      const newBooking = {
        id: data.bookingId,
        status: data.status || "Pending",
        date: new Date(data.date),
        time: new Date(data.time),
        user: {
          name: data.fromUser.name,
          email: data.fromUser.email,
          profilePicture: data.fromUser.profilePicture,
          bio: "",
        },
        skill: { name: data.skillOfferedName, category: "Unknown" },
        skillOfferedName: data.skillOfferedName,
        skillWantedName: data.skillWantedName,
        message: data.message || "",
      };

      setBookings((prev) => [newBooking, ...prev]);
    };

    socket.on("newBookingRequest", handleNewBooking);
    return () => socket.off("newBookingRequest", handleNewBooking);
  }, []);

  // Handle confirmation / cancellation
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${backendUrl}/api/bookings/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to update");

      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === id ? { ...booking, status: newStatus } : booking
        )
      );
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const filteredBookings =
    selectedTab === "Received"
      ? bookings.filter((b) => b.status !== "Cancelled")
      : bookings.filter((b) => b.status === "Cancelled");

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="flex flex-col items-center mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
            Incoming Booking Requests
          </h1>

          {/* ✅ Tab Switcher */}
          <div className="relative flex border-b border-gray-200 w-full max-w-xs justify-center">
            {["Received", "Ignored"].map((tab) => {
              const isActive = selectedTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`relative flex-1 text-center px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-black" : "text-gray-400 hover:text-black"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>
        </header>

        {loading ? (
          <p className="text-gray-600 text-lg">Loading bookings...</p>
        ) : error ? (
          <p className="text-red-600 font-semibold">{error}</p>
        ) : filteredBookings.length === 0 ? (
          <p className="text-gray-600 text-lg">
            {selectedTab === "Received"
              ? "No active booking requests."
              : "No ignored requests."}
          </p>
        ) : (
          <div className="space-y-6">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white  rounded-xl p-4 sm:p-6 border-2 border-gray-200 flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                {/* ✅ Profile Section */}
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <img
                    src={booking.user.profilePicture || "/default-avatar.png"}
                    alt={booking.user.name}
                    className="w-16 h-16 rounded-full object-cover border"
                  />
                </div>

                {/* ✅ Main Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                        {booking.user.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {booking.user.email}
                      </p>
                      {booking.user.bio && (
                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                          {booking.user.bio}
                        </p>
                      )}
                    </div>

                    {/* Status pill */}
                    <span
                      className={`mt-2 sm:mt-0 text-xs font-semibold px-3 py-1 rounded-full self-start sm:self-auto ${
                        booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : booking.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  {/* Skill + Details */}
                  <div className="mt-4 space-y-2">
                    <p className="text-gray-700 text-sm">
                      Wants help with:{" "}
                      <span className="font-medium text-blue-600">
                        {booking.skillOfferedName || booking.skill.name}
                      </span>{" "}
                      <span className="text-gray-400">
                        ({booking.skill.category})
                      </span>
                    </p>
                    <p className="text-gray-700 text-sm">
                      Offers in return:{" "}
                      <span className="font-medium text-green-600">
                        {booking.skillWantedName || "—"}
                      </span>
                    </p>
                    <p className="text-gray-600 text-sm flex items-center">
                      <FiClock className="mr-1" />
                      {new Date(booking.date).toLocaleDateString()} at{" "}
                      {new Date(booking.time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    {booking.message && (
                      <p className="mt-2 italic text-gray-500 text-sm">
                        “{booking.message}”
                      </p>
                    )}
                  </div>

                  {/* ✅ Actions (only if Pending) */}
                  {booking.status === "Pending" && (
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => updateStatus(booking.id, "Confirmed")}
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                      >
                        <FaCheckCircle /> Confirm
                      </button>
                      <button
                        onClick={() => updateStatus(booking.id, "Cancelled")}
                        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                      >
                        <FaTimesCircle /> Cancel
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomingBookings;




































































// import React, { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
// import socket from "../../socket";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const IncomingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedTab, setSelectedTab] = useState("Received"); // ✅ Tabs: Received / Ignored

//   // Fetch initial bookings
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/bookings/received`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();
//         console.log("DATA received: ", data);
//         if (!response.ok) throw new Error(data.message || "Failed to fetch");

//         setBookings(data.bookings);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   // Listen for new booking updates from socket
//   useEffect(() => {
//     const handleNewBooking = (data) => {
//       const newBooking = {
//         id: data.bookingId,
//         status: data.status || "Pending",
//         date: new Date(data.date),
//         time: new Date(data.time),
//         user: {
//           name: data.fromUser,
//           email: data.user.email,
//           profilePicture: data.user.profilePicture,
//           bio: "",
//         },
//         skillOfferedName: data.skillOfferedName,
//         skillWantedName: data.skillWantedName,
//         skill: { name: data.skillOfferedName, category: "Unknown" },
//         message: data.message || "",
//       };

//       setBookings((prev) => [newBooking, ...prev]);
//     };

//     socket.on("newBookingRequest", handleNewBooking);
//     return () => socket.off("newBookingRequest", handleNewBooking);
//   }, []);

//   // Handle confirmation / cancellation
//   const updateStatus = async (id, newStatus) => {
//     try {
//       const response = await fetch(`${backendUrl}/api/bookings/${id}/status`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.message || "Failed to update");

//       setBookings((prev) =>
//         prev.map((booking) =>
//           booking.id === id ? { ...booking, status: newStatus } : booking
//         )
//       );
//     } catch (err) {
//       alert(`Error: ${err.message}`);
//     }
//   };

//   // ✅ Filter based on selected tab
//   const filteredBookings =
//     selectedTab === "Received"
//       ? bookings.filter((b) => b.status !== "Cancelled")
//       : bookings.filter((b) => b.status === "Cancelled");

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-10">
//       <div className="max-w-3xl mx-auto"> {/* ✅ Shrunk container width */}
//         <header className="flex flex-col items-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//             Incoming Booking Requests
//           </h1>

//           {/* ✅ Tab Switcher */}
//           <div className="relative flex border-b border-gray-200 w-full max-w-xs justify-center">
//             {["Received", "Ignored"].map((tab) => {
//               const isActive = selectedTab === tab;
//               return (
//                 <button
//                   key={tab}
//                   onClick={() => setSelectedTab(tab)}
//                   className={`relative flex-1 text-center px-4 py-2 text-sm font-medium transition-colors duration-300 ${
//                     isActive ? "text-black" : "text-gray-400 hover:text-black"
//                   }`}
//                 >
//                   {tab}
//                   {isActive && (
//                     <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transition-all duration-300" />
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </header>

//         {loading ? (
//           <p className="text-gray-600 text-lg">Loading bookings...</p>
//         ) : error ? (
//           <p className="text-red-600 font-semibold">{error}</p>
//         ) : filteredBookings.length === 0 ? (
//           <p className="text-gray-600 text-lg">
//             {selectedTab === "Received"
//               ? "No active booking requests."
//               : "No ignored requests."}
//           </p>
//         ) : (
//           <div className="space-y-6">
//             {filteredBookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white shadow-md rounded-xl p-4 sm:p-6 border border-gray-100 flex flex-col sm:flex-row gap-4 sm:gap-6"
//               >
//                 {/* ✅ Profile Section */}
//                 <div className="flex-shrink-0 flex justify-center sm:block">
//                   <img
//                     src={booking.user.profilePicture || "/default-avatar.png"}
//                     alt={booking.user.name}
//                     className="w-16 h-16 rounded-full object-cover border"
//                   />
//                 </div>

//                 {/* ✅ Main Info */}
//                 <div className="flex-1">
//                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-800">
//                         {booking.user.name}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         {booking.user.email}
//                       </p>
//                       {booking.user.bio && (
//                         <p className="text-sm text-gray-600 mt-1">
//                           {booking.user.bio}
//                         </p>
//                       )}
//                     </div>

//                     {/* Status pill */}
//                     <span
//                       className={`self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full ${
//                         booking.status === "Pending"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : booking.status === "Confirmed"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {booking.status}
//                     </span>
//                   </div>

//                   {/* Skill + Details */}
//                   <div className="mt-4 space-y-2">
//                     <p className="text-gray-700 text-sm">
//                       Wants help with:{" "}
//                       <span className="font-medium text-blue-600">
//                         {booking.skillOfferedName || booking.skill.name}
//                       </span>{" "}
//                       <span className="text-gray-400">
//                         ({booking.skill.category})
//                       </span>
//                     </p>
//                     <p className="text-gray-700 text-sm">
//                       Offers in return:{" "}
//                       <span className="font-medium text-green-600">
//                         {booking.skillWantedName || "—"}
//                       </span>
//                     </p>
//                     <p className="text-gray-600 text-sm flex items-center">
//                       <FiClock className="mr-1" />
//                       {new Date(booking.date).toLocaleDateString()} at{" "}
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </p>
//                     {booking.message && (
//                       <p className="mt-2 italic text-gray-500 text-sm">
//                         “{booking.message}”
//                       </p>
//                     )}
//                   </div>

//                   {/* ✅ Actions (only if Pending) */}
//                   {booking.status === "Pending" && (
//                     <div className="mt-4 flex flex-col sm:flex-row gap-3">
//                       <button
//                         onClick={() => updateStatus(booking.id, "Confirmed")}
//                         className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                       >
//                         <FaCheckCircle /> Confirm
//                       </button>
//                       <button
//                         onClick={() => updateStatus(booking.id, "Cancelled")}
//                         className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                       >
//                         <FaTimesCircle /> Cancel
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IncomingBookings;
