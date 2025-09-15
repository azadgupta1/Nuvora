// import React, { useState, useEffect } from "react";
// import { FaCalendarAlt, FaClock, FaTimesCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const statusStyles = {
//   Cancelled: "bg-red-50 text-red-700 ring-1 ring-red-100",
//   Pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
//   Confirmed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
// };

// const BookingCard = ({ booking, onCancel, onOpenReview }) => {
//   const receiverId = booking.receiverId;
//   const [receiver, setReceiver] = useState(null);
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchReceiverData = async () => {
//       if (!receiverId || !token) return;

//       try {
//         const res = await axios.get(`${backendUrl}/api/users/${receiverId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setReceiver(res.data);
//       } catch (err) {
//         console.error("Failed to fetch Receiver Data: ", err);
//       }
//     };

//     fetchReceiverData();
//   }, [receiverId, token]);

//   const getUserIdFromToken = () => {
//     try {
//       if (!token) return null;
//       const base64Url = token.split(".")[1];
//       const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//       const jsonPayload = decodeURIComponent(
//         atob(base64)
//           .split("")
//           .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//           .join("")
//       );
//       return JSON.parse(jsonPayload).userId;
//     } catch {
//       return null;
//     }
//   };

//   const handleMessageClick = async () => {
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
//           receiverId: receiver?.id,
//           receiverName: receiver?.name,
//           receiverProfilePicture: receiver?.profilePicture,
//         },
//       });
//     } catch (err) {
//       console.error("Failed to create/get chat room:", err);
//       alert("Unable to open chat. Please try again.");
//     }
//   };

//   const formattedDate = booking.date
//     ? new Date(booking.date).toLocaleDateString(undefined, {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       })
//     : "-";

//   const formattedTime = booking.time
//     ? new Date(booking.time).toLocaleTimeString(undefined, {
//         hour: "2-digit",
//         minute: "2-digit",
//       })
//     : "-";

//   return (
//     <div className="bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-2xl p-6 flex flex-col transition w-full">
//       {/* Top Heading Section */}
//       <div className="mb-4">
//         <h3 className="text-sm font-medium text-gray-500">
//           You want to learn: <span className="text-black font-bold">{booking.skillWantedName}</span>
//         </h3>
//         <h3 className="text-sm font-medium text-gray-500 mt-1">
//           You offer to teach: <span className="text-black font-bold">{booking.skillOfferedName}</span>
//         </h3>
//       </div>

//       {/* Booking Status */}
//       <div className="mb-4">
//         <span
//           className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[booking.status] || "bg-slate-50 text-slate-700 ring-1 ring-slate-100"}`}
//         >
//           {booking.status}
//         </span>
//       </div>

//       {/* Message */}
//       <div className="text-sm text-gray-700 mb-4">
//         <p className="inline-block rounded px-2 py-1 italic p-1 bg-gray-100 ">{booking.message || "No message provided."}</p>
//       </div>

//       {/* Date and Time */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
//         <div className="flex items-center gap-2">
//           <FaCalendarAlt className="text-indigo-600" />
//           <span>{formattedDate}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaClock className="text-orange-500" />
//           <span>{formattedTime}</span>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {booking.status === "Pending" && (
//           <button
//             onClick={() => onCancel(booking.id)}
//             className="flex items-center gap-1 px-3 py-2 border border-gray-200 text-sm text-gray-700 rounded-md hover:bg-gray-50 transition"
//           >
//             <FaTimesCircle /> Cancel
//           </button>
//         )}
//         <button
//           onClick={() => onOpenReview(booking)}
//           className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
//         >
//           Give Review
//         </button>
//         <button
//           onClick={handleMessageClick}
//           className="px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
//         >
//           Message
//         </button>
//       </div>

//       <hr className="my-2 text-gray-300" />

//       {/* Receiver Details */}
//       {receiver ? (
//         <div>
//           <h1 className="text-sm font-medium mb-1 text-gray-500">Request Recipient</h1>
//           <div className="flex flex-row sm:flex-row items-center gap-4">
//             <img
//               src={receiver.profilePicture || "/default-avatar.png"}
//               alt="User Avatar"
//               className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md"
//             />
//             <div className="text-left">
//               <h2 className="text-md font-semibold text-black">{receiver.name}</h2>
//               <p className="text-sm text-gray-500">{receiver.location || "Unknown location"}</p>
//               {/* <p className="text-sm font-bold text-gray-800 mt-2">{receiver.bio || "No bio provided."}</p> */}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-sm text-gray-500 mt-4">Loading recipient info...</p>
//       )}


//     </div>

//   );
// };

// export default BookingCard;









// import React, { useState, useEffect } from "react";
// import { FaCalendarAlt, FaClock, FaTimesCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const statusStyles = {
//   Cancelled: "bg-red-50 text-red-700 ring-1 ring-red-100",
//   Pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
//   Confirmed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
// };

// const BookingCard = ({ booking, onCancel, onOpenReview }) => {
//   const receiverId = booking.receiverId;
//   const [receiver, setReceiver] = useState(null);
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchReceiverData = async () => {
//       if (!receiverId || !token) return;

//       try {
//         const res = await axios.get(`${backendUrl}/api/users/${receiverId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setReceiver(res.data);
//       } catch (err) {
//         console.error("Failed to fetch Receiver Data: ", err);
//       }
//     };

//     fetchReceiverData();
//   }, [receiverId, token]);

//   const getUserIdFromToken = () => {
//     try {
//       if (!token) return null;
//       const base64Url = token.split(".")[1];
//       const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//       const jsonPayload = decodeURIComponent(
//         atob(base64)
//           .split("")
//           .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//           .join("")
//       );
//       return JSON.parse(jsonPayload).userId;
//     } catch {
//       return null;
//     }
//   };

//   const handleMessageClick = async () => {
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
//           receiverId: receiver?.id,
//           receiverName: receiver?.name,
//           receiverProfilePicture: receiver?.profilePicture,
//         },
//       });
//     } catch (err) {
//       console.error("Failed to create/get chat room:", err);
//       alert("Unable to open chat. Please try again.");
//     }
//   };

//   const formattedDate = booking.date
//     ? new Date(booking.date).toLocaleDateString(undefined, {
//         year: "numeric",
//         month: "short",
//         day: "numeric",
//       })
//     : "-";

//   const formattedTime = booking.time
//     ? new Date(booking.time).toLocaleTimeString(undefined, {
//         hour: "2-digit",
//         minute: "2-digit",
//       })
//     : "-";

//   return (
//     <div className="relative bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-2xl p-6 flex flex-col transition w-full">
//       {/* Status Badge Top Right */}
//       <div className="absolute top-4 right-4">
//         <span
//           className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusStyles[booking.status] || "bg-slate-50 text-slate-700 ring-1 ring-slate-100"}`}
//         >
//           {booking.status}
//         </span>
//       </div>

//       {/* Top Heading Section */}
//       <div className="mb-4">
//         <h3 className="text-sm font-medium text-gray-500">
//           You want to learn:{" "}
//           <span className="text-black font-bold">{booking.skillWantedName}</span>
//         </h3>
//         <h3 className="text-sm font-medium text-gray-500 mt-1">
//           You offer to teach:{" "}
//           <span className="text-black font-bold">{booking.skillOfferedName}</span>
//         </h3>
//       </div>

//       {/* Message */}
//       <div className="text-sm text-gray-700 mb-4">
//         <p className="inline-block rounded px-2 py-1 italic bg-gray-100">
//           {booking.message || "No message provided."}
//         </p>
//       </div>

//       {/* Date and Time */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
//         <div className="flex items-center gap-2">
//           <FaCalendarAlt className="text-indigo-600" />
//           <span>{formattedDate}</span>
//         </div>
//         <div className="flex items-center gap-2">
//           <FaClock className="text-orange-500" />
//           <span>{formattedTime}</span>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {booking.status === "Pending" && (
//           <button
//             onClick={() => onCancel(booking.id)}
//             className="flex items-center gap-1 px-3 py-2 border border-gray-200 text-sm text-gray-700 rounded-md hover:bg-gray-50 transition"
//           >
//             <FaTimesCircle /> Cancel
//           </button>
//         )}
//         <button
//           onClick={() => onOpenReview(booking)}
//           className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition"
//         >
//           Give Review
//         </button>
//         <button
//           onClick={handleMessageClick}
//           className="px-3 py-2 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition"
//         >
//           Message
//         </button>
//       </div>

//       <hr className="my-2 text-gray-300" />

//       {/* Receiver Details */}
//       {receiver ? (
//         <div>
//           <h1 className="text-sm font-medium mb-1 text-gray-500">Request Recipient</h1>
//           <div className="flex flex-row sm:flex-row items-center gap-4">
//             <img
//               src={receiver.profilePicture || "/default-avatar.png"}
//               alt="User Avatar"
//               className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-md"
//             />
//             <div className="text-left">
//               <h2 className="text-md font-semibold text-black">{receiver.name}</h2>
//               <p className="text-sm text-gray-500">
//                 {receiver.location || "Unknown location"}
//               </p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p className="text-sm text-gray-500 mt-4">Loading recipient info...</p>
//       )}
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
        const res = await axios.get(`${backendUrl}/api/users/${receiverId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setReceiver(res.data);
      } catch (err) {
        console.error("Failed to fetch Receiver Data: ", err);
      }
    };
    fetchReceiverData();
  }, [receiverId, token]);

  const getUserIdFromToken = () => {
    try {
      if (!token) return null;
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      );
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
    ? new Date(booking.date).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "-";

  const formattedTime = booking.time
    ? new Date(booking.time).toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      })
    : "-";

  return (
    <div className="relative bg-white hover:shadow-md border-2 border-gray-100 rounded-md p-4 flex flex-col transition w-full">
      {/* Status Badge Top Right */}
      <div className="absolute top-3 right-3">
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${statusStyles[booking.status] || "bg-slate-50 text-slate-700 ring-1 ring-slate-100"}`}
        >
          {booking.status}
        </span>
      </div>

      {/* Top Heading Section */}
      <div className="mb-2">
        <h3 className="text-xs font-medium text-gray-500">
          You want to learn:{" "}
          <span className="text-black font-semibold">{booking.skillWantedName}</span>
        </h3>
        <h3 className="text-xs font-medium text-gray-500">
          You offer to teach:{" "}
          <span className="text-black font-semibold">{booking.skillOfferedName}</span>
        </h3>
      </div>

      {/* Message */}
      <div className="text-xs text-gray-700 mb-2">
        <p className="inline-block rounded px-2 py-1 italic bg-gray-100">
          {booking.message || "No message provided."}
        </p>
      </div>

      {/* Date and Time */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600 mb-2">
        <div className="flex items-center gap-1">
          <FaCalendarAlt className="text-indigo-600 text-sm" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaClock className="text-orange-500 text-sm" />
          <span>{formattedTime}</span>
        </div>
      </div> */}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mb-2">
        {booking.status === "Pending" && (
          <button
            onClick={() => onCancel(booking.id)}
            className="flex items-center gap-1 px-3 py-1 border border-gray-200 text-xs text-gray-700 rounded-md hover:bg-gray-50 transition"
          >
            <FaTimesCircle /> Cancel
          </button>
        )}
        <button
          onClick={() => onOpenReview(booking)}
          className="px-3 py-1 text-xs bg-yellow-50 text-yellow-500 ring-1 ring-yellow-100"
        >
          Give Review
        </button>
      </div>

      <hr className="my-2 text-gray-300" />

      {/* Receiver Details and Message Button */}
      {receiver ? (
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={receiver.profilePicture || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow"
              />
              <div className="text-left">
                <h2 className="text-sm font-semibold text-black">{receiver.name}</h2>
                <p className="text-xs text-gray-500">
                  {receiver.location || "Unknown location"}
                </p>
              </div>
            </div>

            <button
              onClick={handleMessageClick}
              className="px-3 py-1 bg-blue-50 text-blue-700 ring-1 ring-blue-100"
            >
              Message
            </button>
          </div>
        </div>
      ) : (
        <p className="text-xs text-gray-500 mt-2">Loading recipient info...</p>
      )}
    </div>
  );
};

export default BookingCard;
