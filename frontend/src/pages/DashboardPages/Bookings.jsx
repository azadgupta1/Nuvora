// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import socket from "../../socket";
// import BookingCard from "../../components/Dashboard/Bookings/BookingCard";
// import ReviewModal from "../../components/Dashboard/Bookings/ReviewModal";
// import Spinner1 from "../../components/ui/Spinner1";


// const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTab, setSelectedTab] = useState("Pending");
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [selectedBooking, setSelectedBooking] = useState(null);

//   useEffect(() => {
//     let mounted = true;

//     const fetchBookings = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`${backendUrl}/api/bookings`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         const data = await res.json();

//         console.log("Booking data is : ", data);
//         if (!mounted) return;
//         if (res.ok) setBookings(data.bookings || []);
//         else toast.error(data.message || "Failed to fetch bookings");
//       } catch (err) {
//         console.error(err);
//         toast.error("Network error while fetching bookings");
//       } finally {
//         if (mounted) setLoading(false);
//       }
//     };

//     fetchBookings();

//     const handleBookingStatusUpdated = (updatedBooking) => {
//       setBookings(prev =>
//         prev.map(b => (b.id === updatedBooking.id ? { ...b, status: updatedBooking.status } : b))
//       );
//     };

//     socket.on("bookingStatusUpdated", handleBookingStatusUpdated);

//     return () => {
//       mounted = false;
//       socket.off("bookingStatusUpdated", handleBookingStatusUpdated);
//     };
//   }, []);

//   const filteredBookings = bookings.filter(b =>
//     selectedTab === "Pending" ? b.status === "Pending" : b.status === "Confirmed"
//   );

//   const openReviewModal = (booking) => {
//     setSelectedBooking(booking);
//     setShowReviewModal(true);
//   };

//   const closeReviewModal = () => {
//     setSelectedBooking(null);
//     setShowReviewModal(false);
//   };

//   const cancelBooking = async (bookingId) => {
//     if (!window.confirm("Are you sure you want to cancel this booking?")) return;

//     try {
//       const res = await fetch(`${backendUrl}/api/bookings/${bookingId}`, {
//         method: "DELETE",
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setBookings(prev => prev.filter(b => b.id !== bookingId));
//         toast.success("Booking cancelled successfully!");
//       } else toast.error(data.message || "Failed to cancel booking");
//     } catch (err) {
//       console.error(err);
//       toast.error("Network error while cancelling booking");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 py-10 px-6">
//       <div className="max-w-6xl mx-auto">

//         <header className="flex flex-col items-center mb-8">
//           <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Sent Requests</h1>

//           {/* ✅ Classic Tab Switcher */}
//           <div className="relative flex border-b border-gray-200 w-full max-w-xs justify-center">
//             {["Pending", "Confirmed"].map((tab) => {
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
//           <div className="flex justify-center py-10">
//             <Spinner1 />
//           </div>
//         ) : filteredBookings.length === 0 ? (
//           <section className="bg-white border border-gray-100 rounded-2xl p-10 text-center shadow-sm">
//             <h2 className="text-lg font-semibold text-gray-800">No {selectedTab.toLowerCase()} bookings</h2>
//             <p className="mt-2 text-sm text-gray-500">You have no {selectedTab.toLowerCase()} bookings.</p>
//           </section>
//         ) : (
//           <section className="flex flex-col items-center gap-6">
//             {filteredBookings.map(booking => (
//               <BookingCard
//                 key={booking.id}
//                 booking={booking}
//                 onCancel={cancelBooking}
//                 onOpenReview={openReviewModal}
//               />
//             ))}
//           </section>
//         )}

//         <ReviewModal isOpen={showReviewModal} onClose={closeReviewModal} booking={selectedBooking} />
//       </div>
//     </main>
//   );
// };

// export default Bookings;










import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import socket from "../../socket";
import BookingCard from "../../components/Dashboard/Bookings/BookingCard";
import ReviewModal from "../../components/Dashboard/Bookings/ReviewModal";
import Spinner1 from "../../components/ui/Spinner1";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Pending");
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchBookings = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${backendUrl}/api/bookings`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = await res.json();

        if (!mounted) return;
        if (res.ok) setBookings(data.bookings || []);
        else toast.error(data.message || "Failed to fetch bookings");
      } catch (err) {
        console.error(err);
        toast.error("Network error while fetching bookings");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchBookings();

    const handleBookingStatusUpdated = (updatedBooking) => {
      setBookings((prev) =>
        prev.map((b) =>
          b.id === updatedBooking.id ? { ...b, status: updatedBooking.status } : b
        )
      );
    };

    socket.on("bookingStatusUpdated", handleBookingStatusUpdated);

    return () => {
      mounted = false;
      socket.off("bookingStatusUpdated", handleBookingStatusUpdated);
    };
  }, []);

  const filteredBookings = bookings.filter((b) =>
    selectedTab === "Pending" ? b.status === "Pending" : b.status === "Confirmed"
  );

  const openReviewModal = (booking) => {
    setSelectedBooking(booking);
    setShowReviewModal(true);
  };

  const closeReviewModal = () => {
    setSelectedBooking(null);
    setShowReviewModal(false);
  };

  const cancelBooking = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    try {
      const res = await fetch(`${backendUrl}/api/bookings/${bookingId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      if (res.ok) {
        setBookings((prev) => prev.filter((b) => b.id !== bookingId));
        toast.success("Booking cancelled successfully!");
      } else toast.error(data.message || "Failed to cancel booking");
    } catch (err) {
      console.error(err);
      toast.error("Network error while cancelling booking");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-6">
      <div className="max-w-2xl mx-auto">
        <header className="flex flex-col items-center mb-6">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 text-center">
            My Sent Requests
          </h1>

          {/* Tab Switcher (Identical to IncomingBookings) */}
          <div className="relative flex border-b border-gray-200 w-full max-w-xs justify-center">
            {["Pending", "Confirmed"].map((tab) => {
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

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-10">
            <Spinner1 />
          </div>
        ) : filteredBookings.length === 0 ? (
          <p className="text-gray-600 text-sm text-center">
            {selectedTab === "Pending"
              ? "No pending booking requests."
              : "No confirmed bookings yet."}
          </p>
        ) : (
          <div className="space-y-4">
            {filteredBookings.map((booking) => (
              <BookingCard
                key={booking.id}
                booking={booking}
                onCancel={cancelBooking}
                onOpenReview={openReviewModal}
              />
            ))}
          </div>
        )}

        <ReviewModal
          isOpen={showReviewModal}
          onClose={closeReviewModal}
          booking={selectedBooking}
        />
      </div>
    </div>
  );
};

export default Bookings;
