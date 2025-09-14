// import React from "react";
// import { FaCalendarAlt, FaClock, FaTimesCircle, FaStar } from "react-icons/fa";
// import { FaExchangeAlt } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;


// const statusStyles = {
//   Cancelled: "bg-red-50 text-red-700 ring-1 ring-red-100",
//   Pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
//   Confirmed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
// };

// const BookingCard = ({ booking, onCancel, onOpenReview }) => {

//   console.log("Booking data is : ", booking);
//   const receiverId = booking.receiverId;


//   const [receiver, setReceiver] = useState(null);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchReceiverData = async () => {
//       if (!receiverId || !token) return;

//       try {
//         const res = await axios.get(
//           `${backendUrl}/api/users/${receiverId}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         console.log("Reciever data is : ", res);
//         setReceiver(res.data);
//       } catch (err) {
//         console.error("Failed to fetch Receiver Data: ", err);
//       }
//     };

//     fetchReceiverData();
//   }, [receiverId, token]);


//   const formattedDate = booking.date
//     ? new Date(booking.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
//     : "-";
//   const formattedTime = booking.time
//     ? new Date(booking.time).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
//     : "-";

//   return (
//     <div className="bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-2xl p-6 flex flex-col justify-between transition">
//       <div className="flex justify-between items-start">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-800">{booking.skillOfferedName} → {booking.skillWantedName}</h3>
//           <p className="text-sm text-gray-500 mt-1">{booking.skill?.category || "Uncategorized"}</p>
//         </div>
//         <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[booking.status] || "bg-slate-50 text-slate-700 ring-1 ring-slate-100"}`}>
//           {booking.status}
//         </span>
//       </div>

//       <p className="mt-4 text-sm text-gray-700">{booking.message || "No message provided."}</p>

//       <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
//         <div className="flex items-center gap-2">
//           <FaCalendarAlt className="text-indigo-600" />
//           <span>{formattedDate}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaClock className="text-orange-500" />
//           <span>{formattedTime}</span>
//         </div>
//       </div>

//       <div className="mt-6 flex justify-between items-center">
//         <div className="flex gap-2">
//           {booking.status === "Pending" && (
//             <button
//               onClick={() => onCancel(booking.id)}
//               className="flex items-center gap-1 px-3 py-2 border border-gray-200 text-sm text-gray-700 rounded-md hover:bg-gray-50 transition"
//             >
//               <FaTimesCircle /> Cancel
//             </button>
//           )}
//           <button
//             onClick={() => onOpenReview(booking)}
//             className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
//           >
//             Give Review
//           </button>
//         </div>
//       </div>

//       <hr className="my-2" />

//       {receiver ? (
//       <div>
//         <h1 className="text-lg font-bold">Request Recipient</h1>
//         <div className="flex flex-row items-center">
//           <div className="">
//             <img
//               src={receiver.profilePicture || "/default-avatar.png"}
//               alt="User Avatar"
//               className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md"
//             />
//           </div>

//           <div className="mt-10 px-4 pb-4 text-left">
//             <h2 className="text-lg font-semibold text-black">{receiver.name}</h2>
//             <p className="text-sm text-gray-500">{receiver.location || "Unknown location"}</p>
//             <p className="text-sm text-gray-800 mt-2">{receiver.bio || "No bio provided."}</p>
//           </div>
//         </div>

//       </div>
//     ) : (
//       <p className="text-sm text-gray-500 mt-4">Loading recipient info...</p>
//     )}

//     </div>
//   );
// };

// export default BookingCard;





















import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaClock, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const statusStyles = {
  Cancelled: "bg-red-50 text-red-700 ring-1 ring-red-100",
  Pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
  Confirmed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
};

const BookingCard = ({ booking, onCancel, onOpenReview }) => {
  const receiverId = booking.receiverId;
  const [receiver, setReceiver] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReceiverData = async () => {
      if (!receiverId || !token) return;

      try {
        const res = await axios.get(
          `${backendUrl}/api/users/${receiverId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setReceiver(res.data);
      } catch (err) {
        console.error("Failed to fetch Receiver Data: ", err);
      }
    };

    fetchReceiverData();
  }, [receiverId, token]);

  // Decode JWT token to get current user ID
  const getUserIdFromToken = () => {
    try {
      if (!token) return null;
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload).userId;
    } catch {
      return null;
    }
  };

  const handleMessageClick = async () => {
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

      // Navigate to /chat with room info in state
      navigate("/dashboard/chatlayout", {
        state: {
          roomId: room.id,
          receiverId: receiver?.id,
          receiverName: receiver?.name,
          receiverProfilePicture: receiver?.profilePicture,
        },
      });
    } catch (err) {
      console.error("Failed to create/get chat room:", err);
      alert("Unable to open chat. Please try again.");
    }
  };

  const formattedDate = booking.date
    ? new Date(booking.date).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
    : "-";
  const formattedTime = booking.time
    ? new Date(booking.time).toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })
    : "-";

  return (
    <div className="bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-2xl p-6 flex flex-col justify-between transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{booking.skillOfferedName} → {booking.skillWantedName}</h3>
          <p className="text-sm text-gray-500 mt-1">{booking.skill?.category || "Uncategorized"}</p>
        </div>
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[booking.status] || "bg-slate-50 text-slate-700 ring-1 ring-slate-100"}`}>
          {booking.status}
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-700">{booking.message || "No message provided."}</p>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-indigo-600" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-orange-500" />
          <span>{formattedTime}</span>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="flex gap-2">
          {booking.status === "Pending" && (
            <button
              onClick={() => onCancel(booking.id)}
              className="flex items-center gap-1 px-3 py-2 border border-gray-200 text-sm text-gray-700 rounded-md hover:bg-gray-50 transition"
            >
              <FaTimesCircle /> Cancel
            </button>
          )}
          <button
            onClick={() => onOpenReview(booking)}
            className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
          >
            Give Review
          </button>

          {/* Message button */}
          <button
            onClick={handleMessageClick}
            className="px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
          >
            Message
          </button>
        </div>
      </div>

      <hr className="my-2" />

      {receiver ? (
        <div>
          <h1 className="text-lg font-bold">Request Recipient</h1>
          <div className="flex flex-row items-center">
            <div>
              <img
                src={receiver.profilePicture || "/default-avatar.png"}
                alt="User Avatar"
                className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md"
              />
            </div>

            <div className="mt-10 px-4 pb-4 text-left">
              <h2 className="text-lg font-semibold text-black">{receiver.name}</h2>
              <p className="text-sm text-gray-500">{receiver.location || "Unknown location"}</p>
              <p className="text-sm text-gray-800 mt-2">{receiver.bio || "No bio provided."}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-sm text-gray-500 mt-4">Loading recipient info...</p>
      )}
    </div>
  );
};

export default BookingCard;
