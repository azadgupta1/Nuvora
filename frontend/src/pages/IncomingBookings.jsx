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


import React, { useEffect, useState } from 'react';

function IncomingBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/bookings/received', {
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
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to update");

      // Update the status locally
      setBookings(prev =>
        prev.map(booking =>
          booking.id === id ? { ...booking, status: newStatus } : booking
        )
      );
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  if (loading) return <div>Loading bookings...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Skill Booking Requests</h2>

      {bookings.length === 0 ? (
        <p>No one has requested your skills yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {bookings.map(booking => (
            <li key={booking.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '12px',
              marginBottom: '10px',
              backgroundColor: '#f9f9f9'
            }}>
              <div><strong>Skill:</strong> {booking.skill.name} ({booking.skill.category})</div>
              <div><strong>Requested By:</strong> {booking.user.name} ({booking.user.email})</div>
              <div><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</div>
              <div><strong>Time:</strong> {new Date(booking.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              <div><strong>Status:</strong> {booking.status}</div>

              {booking.status === 'Pending' && (
                <div style={{ marginTop: '10px' }}>
                  <button onClick={() => updateStatus(booking.id, 'Confirmed')} style={{ marginRight: '8px' }}>
                    Confirm
                  </button>
                  <button onClick={() => updateStatus(booking.id, 'Cancelled')} style={{ color: 'red' }}>
                    Cancel
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IncomingBookings;