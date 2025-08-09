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

















import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { jwtDecode } from "jwt-decode";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // adjust URL if deployed

const IncomingBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookings();

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
      // Optionally show toast or alert here
      // alert(`New booking from ${data.fromUser} for ${data.skillName}`);

      // Construct new booking object
      const newBooking = {
        id: data.bookingId,
        status: data.status || "Pending",
        date: new Date(data.date),
        time: new Date(`1970-01-01T${data.time}`), // adjust if `data.time` is string "HH:mm:ss"
        user: { name: data.fromUser, email: "N/A" },
        skill: { name: data.skillName, category: "Unknown" },
        message: data.message || "",
      };

      setBookings((prev) => [newBooking, ...prev]);
    });

    return () => {
      socket.off("newBookingRequest");
      // socket.disconnect(); // Usually avoid disconnecting if socket used app-wide
    };
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/bookings/received", {
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

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`http://localhost:3000/api/bookings/${id}/status`, {
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
        prev.map((booking) => (booking.id === id ? { ...booking, status: newStatus } : booking))
      );
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Incoming Booking Requests</h2>

        {loading ? (
          <p className="text-gray-600 text-lg">Loading bookings...</p>
        ) : error ? (
          <p className="text-red-600 font-semibold">{error}</p>
        ) : bookings.length === 0 ? (
          <p className="text-gray-600 text-lg">No one has requested your skills yet.</p>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {booking.skill.name}
                      <span className="ml-2 text-sm text-blue-600">
                        ({booking.skill.category})
                      </span>
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Requested by:{" "}
                      <span className="font-medium text-gray-800">{booking.user.name}</span>{" "}
                      ({booking.user.email || "N/A"})
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      <FiClock className="inline mr-1" />
                      {new Date(booking.date).toLocaleDateString()} at{" "}
                      {new Date(booking.time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    {booking.message && (
                      <p className="mt-2 italic text-gray-500">Message: {booking.message}</p>
                    )}
                  </div>

                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
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

                {booking.status === "Pending" && (
                  <div className="mt-4 flex gap-4">
                    <button
                      onClick={() => updateStatus(booking.id, "Confirmed")}
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                    >
                      <FaCheckCircle /> Confirm
                    </button>
                    <button
                      onClick={() => updateStatus(booking.id, "Cancelled")}
                      className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                    >
                      <FaTimesCircle /> Cancel
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomingBookings;
