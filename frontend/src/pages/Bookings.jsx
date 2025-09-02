// import { useEffect, useState } from "react";
// import { FaCalendarAlt, FaClock, FaBookmark, FaTimesCircle } from "react-icons/fa";
// import { toast } from "react-toastify";
// import socket from "../socket"; // ✅ Shared socket instance

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/bookings", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();

//         console.log("Booking data is : ", data);
//         if (response.ok) {
//           setBookings(data.bookings);
//         } else {
//           toast.error(data.message || "Failed to fetch bookings");
//         }
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//         toast.error("Network error while fetching bookings");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();

//     const handleBookingStatusUpdated = (updatedBooking) => {
//       setBookings((prev) =>
//         prev.map((b) =>
//           b.id === updatedBooking.id ? { ...b, status: updatedBooking.status } : b
//         )
//       );
//     };

//     socket.on("bookingStatusUpdated", handleBookingStatusUpdated);

//     return () => {
//       socket.off("bookingStatusUpdated", handleBookingStatusUpdated);
//     };
//   }, []);

//   const cancelBooking = async (bookingId) => {
//     const confirm = window.confirm("Are you sure you want to cancel this booking?");
//     if (!confirm) return;

//     try {
//       const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setBookings((prev) => prev.filter((booking) => booking.id !== bookingId));
//         toast.success("Booking cancelled successfully!");
//       } else {
//         toast.error(data.message || "Failed to cancel booking");
//       }
//     } catch (error) {
//       console.error("Error cancelling booking:", error);
//       toast.error("Network error while cancelling booking");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-10">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-extrabold text-gray-800 mb-10 text-center flex items-center justify-center gap-2">
//           <FaBookmark className="text-blue-600 text-4xl" />
//           My Bookings
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-600 text-lg">Loading bookings...</p>
//         ) : bookings.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg">No bookings found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {bookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition duration-300 p-6 flex flex-col justify-between"
//               >
//                 <div>
//                   <h2 className="text-2xl font-bold text-blue-700 mb-1">{booking.skill.name}</h2>
//                   <p className="text-sm text-gray-600 mb-3">{booking.skill.category}</p>

//                   <div className="text-sm text-gray-700 flex items-center mb-2">
//                     <FaCalendarAlt className="mr-2 text-indigo-500" />
//                     {new Date(booking.date).toLocaleDateString()}
//                   </div>

//                   <div className="text-sm text-gray-700 flex items-center mb-2">
//                     <FaClock className="mr-2 text-orange-500" />
//                     {new Date(booking.time).toLocaleTimeString([], {
//                       hour: "2-digit",
//                       minute: "2-digit",
//                     })}
//                   </div>

//                   <div
//                     className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
//                       booking.status === "Cancelled"
//                         ? "bg-red-100 text-red-600"
//                         : "bg-green-100 text-green-600"
//                     }`}
//                   >
//                     {booking.status}
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => cancelBooking(booking.id)}
//                   className="mt-6 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                 >
//                   <FaTimesCircle />
//                   Cancel Booking
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bookings;




















// import { useEffect, useState } from "react";
// import {
//   FaCalendarAlt,
//   FaClock,
//   FaBookmark,
//   FaTimesCircle,
//   FaExchangeAlt,
// } from "react-icons/fa";
// import { toast } from "react-toastify";
// import socket from "../socket";
// import ReviewModal from "./ReviewModal";


// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedBooking, setSelectedBooking] = useState(null);


//   const openReviewModal = (booking) => {
//     setSelectedBooking(booking);
//     setShowReviewModal(true);
//   };

//   const closeReviewModal = () => {
//     setSelectedBooking(null);
//     setShowReviewModal(false);
//   };

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/bookings", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();

//         console.log("Booking data is : ", data);
//         if (response.ok) {
//           setBookings(data.bookings);
//         } else {
//           toast.error(data.message || "Failed to fetch bookings");
//         }
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//         toast.error("Network error while fetching bookings");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();

//     const handleBookingStatusUpdated = (updatedBooking) => {
//       setBookings((prev) =>
//         prev.map((b) =>
//           b.id === updatedBooking.id ? { ...b, status: updatedBooking.status } : b
//         )
//       );
//     };

//     socket.on("bookingStatusUpdated", handleBookingStatusUpdated);

//     return () => {
//       socket.off("bookingStatusUpdated", handleBookingStatusUpdated);
//     };
//   }, []);

//   const cancelBooking = async (bookingId) => {
//     const confirm = window.confirm("Are you sure you want to cancel this booking?");
//     if (!confirm) return;

//     try {
//       const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setBookings((prev) => prev.filter((booking) => booking.id !== bookingId));
//         toast.success("Booking cancelled successfully!");
//       } else {
//         toast.error(data.message || "Failed to cancel booking");
//       }
//     } catch (error) {
//       console.error("Error cancelling booking:", error);
//       toast.error("Network error while cancelling booking");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-gray-50 via-white to-gray-100 px-6 py-10">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center gap-3">
//           <FaBookmark className="text-indigo-600 text-4xl" />
//           My Bookings
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-500 text-lg">Loading bookings...</p>
//         ) : bookings.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg">No bookings found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {bookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
//               >
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800 mb-1">
//                     {booking.skillOfferedName}{" "}
//                     <span className="text-gray-400 text-base font-light">→</span>{" "}
//                     {booking.skillWantedName}
//                   </h2>

//                   <p className="text-sm text-gray-500 mb-3 italic">
//                     {booking.skill?.category || "Uncategorized"}
//                   </p>

//                   <p className="text-sm text-gray-700 mb-4">{booking.message}</p>

//                   <div className="flex items-center text-sm text-gray-700 mb-2">
//                     <FaCalendarAlt className="mr-2 text-indigo-500" />
//                     <span>{new Date(booking.date).toLocaleDateString()}</span>
//                   </div>

//                   <div className="flex items-center text-sm text-gray-700 mb-4">
//                     <FaClock className="mr-2 text-orange-500" />
//                     <span>
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </span>
//                   </div>

//                   <div
//                     className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
//                       booking.status === "Cancelled"
//                         ? "bg-red-100 text-red-600"
//                         : booking.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-green-100 text-green-700"
//                     }`}
//                   >
//                     {booking.status}
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => cancelBooking(booking.id)}
//                   className="mt-6 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                 >
//                   <FaTimesCircle />
//                   Cancel Booking
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bookings;




// import { useEffect, useState } from "react";
// import {
//   FaCalendarAlt,
//   FaClock,
//   FaBookmark,
//   FaTimesCircle,
//   FaExchangeAlt,
// } from "react-icons/fa";
// import { toast } from "react-toastify";
// import socket from "../socket";
// import ReviewModal from "./ReviewModal";

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   const openReviewModal = (booking) => {
//     setSelectedBooking(booking);
//     setShowReviewModal(true);
//   };

//   const closeReviewModal = () => {
//     setSelectedBooking(null);
//     setShowReviewModal(false);
//   };

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/api/bookings", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setBookings(data.bookings);
//         } else {
//           toast.error(data.message || "Failed to fetch bookings");
//         }
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//         toast.error("Network error while fetching bookings");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();

//     const handleBookingStatusUpdated = (updatedBooking) => {
//       setBookings((prev) =>
//         prev.map((b) =>
//           b.id === updatedBooking.id ? { ...b, status: updatedBooking.status } : b
//         )
//       );
//     };

//     socket.on("bookingStatusUpdated", handleBookingStatusUpdated);

//     return () => {
//       socket.off("bookingStatusUpdated", handleBookingStatusUpdated);
//     };
//   }, []);

//   const cancelBooking = async (bookingId) => {
//     const confirm = window.confirm("Are you sure you want to cancel this booking?");
//     if (!confirm) return;

//     try {
//       const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setBookings((prev) => prev.filter((booking) => booking.id !== bookingId));
//         toast.success("Booking cancelled successfully!");
//       } else {
//         toast.error(data.message || "Failed to cancel booking");
//       }
//     } catch (error) {
//       console.error("Error cancelling booking:", error);
//       toast.error("Network error while cancelling booking");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-gray-50 via-white to-gray-100 px-6 py-10">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center flex items-center justify-center gap-3">
//           <FaBookmark className="text-indigo-600 text-4xl" />
//           My Bookings
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-500 text-lg">Loading bookings...</p>
//         ) : bookings.length === 0 ? (
//           <p className="text-center text-gray-500 text-lg">No bookings found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {bookings.map((booking) => (
//               <div
//                 key={booking.id}
//                 className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
//               >
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800 mb-1">
//                     {booking.skillOfferedName}{" "}
//                     <span className="text-gray-400 text-base font-light">→</span>{" "}
//                     {booking.skillWantedName}
//                   </h2>

//                   <p className="text-sm text-gray-500 mb-3 italic">
//                     {booking.skill?.category || "Uncategorized"}
//                   </p>

//                   <p className="text-sm text-gray-700 mb-4">{booking.message}</p>

//                   <div className="flex items-center text-sm text-gray-700 mb-2">
//                     <FaCalendarAlt className="mr-2 text-indigo-500" />
//                     <span>{new Date(booking.date).toLocaleDateString()}</span>
//                   </div>

//                   <div className="flex items-center text-sm text-gray-700 mb-4">
//                     <FaClock className="mr-2 text-orange-500" />
//                     <span>
//                       {new Date(booking.time).toLocaleTimeString([], {
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })}
//                     </span>
//                   </div>

//                   <div
//                     className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
//                       booking.status === "Cancelled"
//                         ? "bg-red-100 text-red-600"
//                         : booking.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-green-100 text-green-700"
//                     }`}
//                   >
//                     {booking.status}
//                   </div>
//                 </div>

//                 <div className="mt-6 flex flex-col gap-2">
//                   <button
//                     onClick={() => cancelBooking(booking.id)}
//                     className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                   >
//                     <FaTimesCircle />
//                     Cancel Booking
//                   </button>

//                   <button
//                     onClick={() => openReviewModal(booking)}
//                     className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
//                   >
//                     <FaExchangeAlt />
//                     Give Review
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Review Modal */}
//         <ReviewModal
//           isOpen={showReviewModal}
//           onClose={closeReviewModal}
//           booking={selectedBooking}
//         />
//       </div>
//     </div>
//   );
// };

// export default Bookings;



import React, { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaTimesCircle,
  FaStar,
  FaEllipsisV,
} from "react-icons/fa";
import { toast } from "react-toastify";
import socket from "../socket";
import ReviewModal from "../components/Dashboard/Bookings/ReviewModal";

// Professional, minimal and accessible Bookings page
// - Uses a neutral palette and subtle accents for a corporate look
// - Card-based layout with compact metadata rows
// - Action buttons moved to an unobtrusive menu style
// - Keep all existing behaviour (fetch, cancel, realtime updates)

const BookingCard = ({ booking, onCancel, onOpenReview }) => {
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

  const statusStyles = {
    Cancelled: "bg-red-50 text-red-700 ring-1 ring-red-100",
    Pending: "bg-amber-50 text-amber-700 ring-1 ring-amber-100",
    Confirmed: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
  };

  const pillClass = statusStyles[booking.status] ||
    "bg-slate-50 text-slate-700 ring-1 ring-slate-100";

  return (
    <article
      aria-labelledby={`booking-${booking.id}-title`}
      className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id={`booking-${booking.id}-title`} className="text-lg font-semibold text-slate-800">
              {booking.skillOfferedName} <span className="text-slate-400 font-normal">→</span> {booking.skillWantedName}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{booking.skill?.category || "Uncategorized"}</p>
          </div>

          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${pillClass}`}>
              {booking.status}
            </span>

            <div className="relative">
              <button
                aria-haspopup="menu"
                aria-label="actions"
                className="p-2 rounded-full hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                title="Actions"
                onClick={() => onOpenReview(booking)}
              >
                <FaEllipsisV className="text-slate-500" />
              </button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-700 leading-relaxed">{booking.message || "No message provided."}</p>

        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-indigo-600" />
            <dt className="sr-only">Date</dt>
            <dd>{formattedDate}</dd>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-orange-500" />
            <dt className="sr-only">Time</dt>
            <dd>{formattedTime}</dd>
          </div>
        </dl>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="text-xs text-slate-500 flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span>{booking.providerName || booking.provider || "Provider"}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenReview(booking)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            Give Review
          </button>

          <button
            onClick={() => onCancel(booking.id)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-slate-200"
          >
            <FaTimesCircle />
            Cancel
          </button>
        </div>
      </div>
    </article>
  );
};

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/bookings", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await response.json();
        if (!mounted) return;

        if (response.ok) {
          setBookings(data.bookings || []);
        } else {
          toast.error(data.message || "Failed to fetch bookings");
        }
      } catch (err) {
        console.error("Error fetching bookings:", err);
        toast.error("Network error while fetching bookings");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchBookings();

    const handleBookingStatusUpdated = (updatedBooking) => {
      setBookings((prev) =>
        prev.map((b) => (b.id === updatedBooking.id ? { ...b, status: updatedBooking.status } : b))
      );
    };

    socket.on("bookingStatusUpdated", handleBookingStatusUpdated);

    return () => {
      mounted = false;
      socket.off("bookingStatusUpdated", handleBookingStatusUpdated);
    };
  }, []);

  const openReviewModal = (booking) => {
    setSelectedBooking(booking);
    setShowReviewModal(true);
  };

  const closeReviewModal = () => {
    setSelectedBooking(null);
    setShowReviewModal(false);
  };

  const cancelBooking = async (bookingId) => {
    const confirmed = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirmed) return;

    try {
      const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setBookings((prev) => prev.filter((b) => b.id !== bookingId));
        toast.success("Booking cancelled successfully!");
      } else {
        toast.error(data.message || "Failed to cancel booking");
      }
    } catch (err) {
      console.error("Error cancelling booking:", err);
      toast.error("Network error while cancelling booking");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-slate-800">My Bookings</h1>
            <p className="mt-1 text-sm text-slate-500">Manage your upcoming sessions and reviews</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className="px-4 py-2 rounded-md bg-white border border-slate-200 text-sm text-slate-700 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-100"
              onClick={() => window.location.reload()}
              title="Refresh"
            >
              Refresh
            </button>

            <button
              className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              onClick={() => toast.info('Use the "Give Review" button on a booking to leave feedback.')}
            >
              How to review
            </button>
          </div>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-40 rounded-2xl bg-gradient-to-r from-white to-slate-50 animate-pulse" />
            ))}
          </div>
        ) : bookings.length === 0 ? (
          <section className="bg-white border border-slate-100 rounded-2xl p-10 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">No bookings found</h2>
            <p className="mt-2 text-sm text-slate-500">You have no active bookings. Explore skills and request a session.</p>
          </section>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onCancel={cancelBooking}
                onOpenReview={openReviewModal}
              />
            ))}
          </section>
        )}

        <ReviewModal isOpen={showReviewModal} onClose={closeReviewModal} booking={selectedBooking} />
      </div>
    </main>
  );
};

export default Bookings;

