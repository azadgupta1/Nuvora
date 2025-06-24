
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaBookmark, FaTimesCircle } from "react-icons/fa";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/bookings", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    const confirm = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirm) return;

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
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-10 text-center flex items-center justify-center gap-2">
          <FaBookmark className="text-blue-600 text-4xl" />
          My Bookings
        </h1>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">Loading bookings...</p>
        ) : bookings.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No bookings found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-xl shadow hover:shadow-lg border border-gray-100 transition duration-300 p-6 flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-2xl font-bold text-blue-700 mb-1">{booking.skill.name}</h2>
                  <p className="text-sm text-gray-600 mb-3">{booking.skill.category}</p>

                  <div className="text-sm text-gray-700 flex items-center mb-2">
                    <FaCalendarAlt className="mr-2 text-indigo-500" />
                    {new Date(booking.date).toLocaleDateString()}
                  </div>

                  <div className="text-sm text-gray-700 flex items-center mb-2">
                    <FaClock className="mr-2 text-orange-500" />
                    {new Date(booking.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>

                  <div
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      booking.status === "Cancelled"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {booking.status}
                  </div>
                </div>

                <button
                  onClick={() => cancelBooking(booking.id)}
                  className="mt-6 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  <FaTimesCircle />
                  Cancel Booking
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
