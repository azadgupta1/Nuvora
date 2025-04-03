import { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/bookings", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔒 Send token for authentication
          },
        });

        const data = await response.json();
        if (response.ok) {
          setBookings(data.bookings);
        } else {
          console.error("Error fetching bookings:", data.message);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const cancelBooking = async (bookingId) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;
  
    try {
      const response = await fetch(`http://localhost:3000/api/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      const data = await response.json();
      if (response.ok) {
        setBookings((prev) => prev.filter((booking) => booking.id !== bookingId));
        alert("Booking cancelled successfully!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">My Bookings</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white shadow-md rounded-lg p-4 border"
            >
              <h2 className="text-xl font-semibold">{booking.skill.name}</h2>
              <p className="text-gray-600">{booking.skill.category}</p>
              <p className="text-gray-700 mt-2">
                📅 {new Date(booking.date).toDateString()}
              </p>
              <p className="text-gray-700">⏰ {booking.time}</p>
              <p className={`mt-2 font-semibold ${booking.status === "Cancelled" ? "text-red-500" : "text-green-600"}`}>
                {booking.status}
              </p>
              <button
                onClick={() => cancelBooking(booking.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
