// import React, { useEffect, useState } from "react";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
// import { FiClock } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import socket from "../../socket";
// import Spinner1 from "../../components/ui/Spinner1";


// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const IncomingBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [selectedTab, setSelectedTab] = useState("Received");

//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   // Decode JWT token to get current user ID
//   const getUserIdFromToken = () => {
//     try {
//       if (!token) return null;
//       const base64Url = token.split(".")[1];
//       const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//       const jsonPayload = decodeURIComponent(
//         atob(base64)
//           .split("")
//           .map(function (c) {
//             return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//           })
//           .join("")
//       );
//       return JSON.parse(jsonPayload).userId;
//     } catch {
//       return null;
//     }
//   };

//   // Fetch initial bookings
//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch(`${backendUrl}/api/bookings/received`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
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
//   }, [token]);

//   // Listen for new booking updates from socket
//   useEffect(() => {
//     const handleNewBooking = (data) => {
//       const newBooking = {
//         id: data.bookingId,
//         status: data.status || "Pending",
//         date: new Date(data.date),
//         time: new Date(data.time),
//         user: {
//           id: data.fromUser.id, // <-- Add id for messaging
//           name: data.fromUser.name,
//           email: data.fromUser.email,
//           profilePicture: data.fromUser.profilePicture,
//           bio: "",
//         },
//         skill: { name: data.skillOfferedName, category: "Unknown" },
//         skillOfferedName: data.skillOfferedName,
//         skillWantedName: data.skillWantedName,
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
//           Authorization: `Bearer ${token}`,
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

//   // Message button handler
//   const handleMessageClick = async (receiverId, receiverName, receiverProfilePicture) => {
//     const user1Id = getUserIdFromToken();
//     if (!user1Id || !receiverId) {
//       alert("User information missing");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         `${backendUrl}/api/chatrooms`,
//         { user1Id, user2Id: receiverId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const room = res.data;

//       navigate("/dashboard/chatlayout", {
//         state: {
//           roomId: room.id,
//           receiverId,
//           receiverName,
//           receiverProfilePicture,
//         },
//       });
//     } catch (err) {
//       console.error("Failed to create/get chat room:", err);
//       alert("Unable to open chat. Please try again.");
//     }
//   };

//   const filteredBookings =
//     selectedTab === "Received"
//       ? bookings.filter((b) => b.status !== "Cancelled")
//       : bookings.filter((b) => b.status === "Cancelled");

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-8">
//       <div className="max-w-3xl mx-auto">
//         <header className="flex flex-col items-center mb-8">
//           <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
//             Incoming Booking Requests
//           </h1>

//           {/* Tab Switcher */}
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
//           // <p className="text-gray-600 text-lg">Loading bookings...</p>
//           <div className="flex justify-center py-10">
//             <Spinner1 />
//           </div>
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
//                 className="bg-white rounded-xl p-4 sm:p-6 border-2 border-gray-200 flex flex-col sm:flex-row gap-4 sm:gap-6"
//               >
//                 {/* Profile Section */}
//                 <div className="flex-shrink-0 flex justify-center sm:justify-start">
//                   <img
//                     src={booking.user.profilePicture || "/default-avatar.png"}
//                     alt={booking.user.name}
//                     className="w-16 h-16 rounded-full object-cover border"
//                   />
//                 </div>

//                 {/* Main Info */}
//                 <div className="flex-1">
//                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
//                     <div>
//                       <h3 className="text-base sm:text-lg font-semibold text-gray-800">
//                         {booking.user.name}
//                       </h3>
//                       <p className="text-xs sm:text-sm text-gray-500">
//                         {booking.user.email}
//                       </p>
//                       {booking.user.bio && (
//                         <p className="text-xs sm:text-sm text-gray-600 mt-1">
//                           {booking.user.bio}
//                         </p>
//                       )}
//                     </div>

//                     {/* Status pill */}
//                     <span
//                       className={`mt-2 sm:mt-0 text-xs font-semibold px-3 py-1 rounded-full self-start sm:self-auto ${
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
//                       <span className="font-bold text-black">
//                         {booking.skillOfferedName || booking.skill.name}
//                       </span>{" "}
//                     </p>
//                     <p className="text-gray-700 text-sm">
//                       Offers in return:{" "}
//                       <span className="font-bold text-black">
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
//                       <p className="mt-2 italic bg-gray-200 text-gray-500 text-sm inline-block rounded-md p-1">
//                         “{booking.message}”
//                       </p>
//                     )}
//                   </div>

//                   {/* Actions */}
//                   <div className="mt-4 flex flex-col sm:flex-row gap-3">
//                     {booking.status === "Pending" && (
//                       <>
//                         <button
//                           onClick={() => updateStatus(booking.id, "Confirmed")}
//                           className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                         >
//                           <FaCheckCircle /> Confirm
//                         </button>
//                         <button
//                           onClick={() => updateStatus(booking.id, "Cancelled")}
//                           className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                         >
//                           <FaTimesCircle /> Cancel
//                         </button>
//                       </>
//                     )}

//                     {/* Message button (always visible) */}
//                     <button
//                       onClick={() =>
//                         handleMessageClick(
//                           booking.user.id,
//                           booking.user.name,
//                           booking.user.profilePicture
//                         )
//                       }
//                       className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                     >
//                       Message
//                     </button>
//                   </div>
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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import socket from "../../socket";
import Spinner1 from "../../components/ui/Spinner1";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const IncomingBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedTab, setSelectedTab] = useState("Received");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Decode JWT token to get current user ID
  const getUserIdFromToken = () => {
    try {
      if (!token) return null;
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload).userId;
    } catch {
      return null;
    }
  };

  // Fetch initial bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/bookings/received`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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
  }, [token]);

  // Listen for new booking updates from socket
  useEffect(() => {
    const handleNewBooking = (data) => {
      const newBooking = {
        id: data.bookingId,
        status: data.status || "Pending",
        date: new Date(data.date),
        time: new Date(data.time),
        user: {
          id: data.fromUser.id,
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
          Authorization: `Bearer ${token}`,
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

  // Message button handler
  const handleMessageClick = async (receiverId, receiverName, receiverProfilePicture) => {
    const user1Id = getUserIdFromToken();
    if (!user1Id || !receiverId) {
      alert("User information missing");
      return;
    }

    try {
      const res = await axios.post(
        `${backendUrl}/api/chatrooms`,
        { user1Id, user2Id: receiverId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const room = res.data;

      navigate("/dashboard/chatlayout", {
        state: {
          roomId: room.id,
          receiverId,
          receiverName,
          receiverProfilePicture,
        },
      });
    } catch (err) {
      console.error("Failed to create/get chat room:", err);
      alert("Unable to open chat. Please try again.");
    }
  };

  const filteredBookings =
    selectedTab === "Received"
      ? bookings.filter((b) => b.status !== "Cancelled")
      : bookings.filter((b) => b.status === "Cancelled");

  // 📌 Helper: Format date as "14th September 2025"
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">
      <div className="max-w-2xl mx-auto">
        <header className="flex flex-col items-center mb-6">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
            Incoming Booking Requests
          </h1>

          {/* Tab Switcher */}
          <div className="relative flex border-b border-gray-200 w-full max-w-xs justify-center">
            {["Received", "Ignored"].map((tab) => {
              const isActive = selectedTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`relative flex-1 text-center px-3 py-2 text-sm font-medium transition-colors duration-300 ${
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
          <div className="flex justify-center py-10">
            <Spinner1 />
          </div>
        ) : error ? (
          <p className="text-red-600 font-semibold">{error}</p>
        ) : filteredBookings.length === 0 ? (
          <p className="text-gray-600 text-sm text-center">
            {selectedTab === "Received"
              ? "No active booking requests."
              : "No ignored requests."}
          </p>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-sm p-4 border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                {/* Left: User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={booking.user.profilePicture || "/default-avatar.png"}
                    alt={booking.user.name}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                      {booking.user.name}
                    </h3>
                    <p className="text-xs text-gray-500">{booking.user.email}</p>
                    <p className="text-xs text-gray-700 mt-1">
                      Wants:{" "}
                      <span className="font-medium text-black text-sm">
                        {booking.skillOfferedName || booking.skill.name}
                      </span>
                    </p>
                    <p className="text-xs text-gray-700">
                      Offers:{" "}
                      <span className="font-medium text-black text-sm">
                        {booking.skillWantedName || "—"}
                      </span>
                    </p>
                    {booking.message && (
                      <p className="mt-1 italic bg-gray-100 text-gray-500 text-xs inline-block rounded px-2 py-1">
                        “{booking.message}”
                      </p>
                    )}
                  </div>
                </div>

                {/* Right: Date + Actions */}
                <div className="flex flex-col sm:items-end gap-2 min-w-[140px]">
                  {/* Date & Time */}
                  <p className="text-xs text-gray-600 flex items-center gap-1">
                    <FiClock className="text-gray-500" />
                    {`${formatDate(booking.date)}, ${new Date(
                      booking.time
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}`}
                  </p>

                  {/* Status */}
                  <span
                    className={`w-fit text-xs font-semibold px-2 py-1 rounded-full ${
                      booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : booking.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {booking.status}
                  </span>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {booking.status === "Pending" && (
                      <>
                        <button
                          onClick={() => updateStatus(booking.id, "Confirmed")}
                          className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
                        >
                          <FaCheckCircle /> Accept
                        </button>
                        <button
                          onClick={() => updateStatus(booking.id, "Cancelled")}
                          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                        >
                          <FaTimesCircle /> Decline
                        </button>
                      </>
                    )}
                    <button
                      onClick={() =>
                        handleMessageClick(
                          booking.user.id,
                          booking.user.name,
                          booking.user.profilePicture
                        )
                      }
                      className="flex items-center gap-2 px-3 py-1 m-1  bg-blue-50 text-blue-700 ring-1 ring-blue-100"

                    >
                      Message
                    </button>
                  </div>
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
