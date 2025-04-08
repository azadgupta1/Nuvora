// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SkillDetails = () => {
//   const { id } = useParams();
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const fetchSkillDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/skills/${id}`);
//         const data = await response.json();
//         setSkill(data.skill);
//       } catch (error) {
//         console.error("Error fetching skill details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkillDetails();
//   }, [id]);

//   const handleBooking = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//         body: JSON.stringify({ skillId: id, date, time }),
//       });

//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       setMessage("Error creating booking.");
//       console.error("Booking error:", error);
//     }
//   };

//   if (loading) return <p className="text-center text-gray-600">Loading...</p>;

//   if (!skill) return <p className="text-center text-red-500">Skill not found.</p>;
  

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <img
//           src={skill.image || "https://via.placeholder.com/150"}
//           alt={skill.name}
//           className="w-full h-60 object-cover rounded-md"
//         />
//         <h2 className="text-2xl font-bold mt-4">{skill.name}</h2>
//         <p className="text-gray-500">{skill.category}</p>
//         <p className="mt-2 text-gray-700">{skill.description}</p>
//         <p className="mt-2 text-blue-600 font-semibold">
//           Wants to learn: {skill.skillWantedInReturn}
//         </p>

//         {/* Booking Form */}
//         <div className="mt-6">
//           <h3 className="text-xl font-bold">Book this skill</h3>
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mt-2"
//           />
//           <input
//             type="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mt-2"
//           />
//           <button
//             onClick={handleBooking}
//             className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             Confirm Booking
//           </button>
//           {message && <p className="mt-2 text-center text-green-600">{message}</p>}
//         </div>
//       </div>

      

//     </div>
//   );
// };

// export default SkillDetails;


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSkillDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/skills/${id}`);
        const data = await response.json();
        setSkill(data.skill);
      } catch (error) {
        console.error("Error fetching skill details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkillDetails();
  }, [id]);

  const handleBooking = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ skillId: id, date, time }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error creating booking.");
      console.error("Booking error:", error);
    }
  };

  const handleMessage = async () => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const currentUserId = user?.id;
  
    console.log("Current user ID:", currentUserId);
    console.log("Skill provider user ID:", skill?.userId);
  
    if (!currentUserId || !skill?.userId) {
      console.warn("Missing user ID or skill provider ID");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/chatrooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user1Id: currentUserId,
          user2Id: skill.userId,
        }),
      });
  
      const room = await response.json();
      console.log("Navigating to chatroom ID:", room.id);
      navigate(`/chat/${room.id}`);
    } catch (error) {
      console.error("Error creating chat room:", error);
    }
  };
  
  if (loading) return <p className="text-center text-gray-600">Loading...</p>;

  if (!skill) return <p className="text-center text-red-500">Skill not found.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={skill.image || "https://via.placeholder.com/150"}
          alt={skill.name}
          className="w-full h-60 object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold mt-4">{skill.name}</h2>
        <p className="text-gray-500">{skill.category}</p>
        <p className="mt-2 text-gray-700">{skill.description}</p>
        <p className="mt-2 text-blue-600 font-semibold">
          Wants to learn: {skill.skillWantedInReturn}
        </p>

        {/* Message Button */}
        <div className="mt-6">
          <button
            onClick={handleMessage}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            💬 Message Skill Provider
          </button>
        </div>

        {/* Booking Form */}
        <div className="mt-6">
          <h3 className="text-xl font-bold">Book this skill</h3>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
          <button
            onClick={handleBooking}
            className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Confirm Booking
          </button>
          {message && (
            <p className="mt-2 text-center text-green-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
