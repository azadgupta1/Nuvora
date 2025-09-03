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


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {jwtDecode} from "jwt-decode";

// const SkillDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [message, setMessage] = useState(""); // ✅ FIXED: Declare message state

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




//   const handleMessage = async () => {
//   if (!localStorage.getItem("token")) {
//     return navigate("/login");
//   }

//   try {
//     const token = localStorage.getItem("token");
//     const user = jwtDecode(token); // Decode token to get senderId

//     const senderId = user.userId;
//     const receiverId = skill.userId;

//     const res = await fetch("http://localhost:3000/api/chatrooms", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ user1Id: senderId, user2Id: receiverId }),
//     });

//     const data = await res.json();

//     console.log("Room data is : ",data);

//     if (data?.id) {
//       // navigate("/dashboard/chat", { state: { roomId: data.id, receiverId } });
//       <ChatPage receiverId={receiverId} roomId={data.id} receiverName={receiverName} />
//     } else {
//       console.error("Chat room creation failed", data);
//     }
//   } catch (err) {
//     console.error("Error creating or joining chat room:", err);
//   }
// };

// useEffect(() => {
//   const fetchReceiverName = async () => {
//     try {
//       const res = await fetch(`http://localhost:3000/api/users/${receiverId}`);
//       const data = await res.json();
//       setReceiverName(data.name);
//     } catch (err) {
//       console.error("Failed to fetch user:", err);
//     }
//   };

//   if (receiverId) {
//     fetchReceiverName();
//   }
// }, [receiverId]);

// const [receiverName, setReceiverName] = useState("User");


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

//         {/* Message Button */}
//         <div className="mt-6">
//           <button
//             onClick={handleMessage}
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             💬 Message Skill Provider
//           </button>
//         </div>

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
//           {message && (
//             <p className="mt-2 text-center text-green-600">{message}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillDetails;


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import ChatPage from "./ChatPage"; // import ChatPage

// const SkillDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [message, setMessage] = useState("");

//   const [chatProps, setChatProps] = useState(null); // ✅ holds receiverId, roomId, receiverName

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

//   const handleMessage = async () => {
//     if (!localStorage.getItem("token")) {
//       return navigate("/login");
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const user = jwtDecode(token);
//       const senderId = user.userId;
//       const receiverId = skill.userId;

//       // Create or get chat room
//       const res = await fetch("http://localhost:3000/api/chatrooms", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ user1Id: senderId, user2Id: receiverId }),
//       });

//       const data = await res.json();

//       if (data?.id) {
//         // Get receiver's name
//         const receiverRes = await fetch(`http://localhost:3000/api/users/${receiverId}`);
//         const receiverData = await receiverRes.json();

//         // ✅ Set props for ChatPage to render
//         setChatProps({
//           roomId: data.id,
//           receiverId,
//           receiverName: receiverData.name,
//         });
//       } else {
//         console.error("Chat room creation failed", data);
//       }
//     } catch (err) {
//       console.error("Error creating or joining chat room:", err);
//     }
//   };

//   if (loading) return <p className="text-center text-gray-600">Loading...</p>;
//   if (!skill) return <p className="text-center text-red-500">Skill not found.</p>;

//   // ✅ Show ChatPage when chatProps is set
//   if (chatProps) {
//     return (
//       <ChatPage
//         roomId={chatProps.roomId}
//         receiverId={chatProps.receiverId}
//         receiverName={chatProps.receiverName}
//       />
//     );
//   }

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

//         {/* Message Button */}
//         <div className="mt-6">
//           <button
//             onClick={handleMessage}
//             className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             💬 Message Skill Provider
//           </button>
//         </div>

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
//           {message && (
//             <p className="mt-2 text-center text-green-600">{message}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillDetails;


// useEffect(() => {
  //   const fetchSkillDetails = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:3000/api/skills/${id}`);
  //       const data = await response.json();
  //       setSkill(data.skill);

  //       console.log("Data is : ", data);
  //     } catch (error) {
  //       console.error("Error fetching skill details:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchSkillDetails();
  // }, [id]);







// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import ChatPage from "./ChatPage";

// const categoryColors = {
//   Technology: "bg-blue-100 text-blue-700",
//   Sports: "bg-green-100 text-green-700",
//   Languages: "bg-yellow-100 text-yellow-700",
//   "Life Coach": "bg-purple-100 text-purple-700",
//   Art: "bg-pink-100 text-pink-700",
//   Music: "bg-indigo-100 text-indigo-700",
//   Others: "bg-gray-100 text-gray-700",
// };

// const SkillDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [message, setMessage] = useState("");
//   const [chatProps, setChatProps] = useState(null);

  


//   useEffect(() => {
//   const fetchSkillDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/api/skills/${id}`);
//       const data = await response.json();
//       setSkill(data); // ✅ Not data.skill

//       console.log("Data is : ", data);
//     } catch (error) {
//       console.error("Error fetching skill details:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchSkillDetails();
// }, [id]);



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

//   const handleMessage = async () => {
//     if (!localStorage.getItem("token")) return navigate("/login");

//     try {
//       const token = localStorage.getItem("token");
//       const user = jwtDecode(token);
//       const senderId = user.userId;
//       const receiverId = skill.userId;

//       const res = await fetch("http://localhost:3000/api/chatrooms", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ user1Id: senderId, user2Id: receiverId }),
//       });

//       const data = await res.json();

//       if (data?.id) {
//         const receiverRes = await fetch(`http://localhost:3000/api/users/${receiverId}`);
//         const receiverData = await receiverRes.json();

//         setChatProps({
//           roomId: data.id,
//           receiverId,
//           receiverName: receiverData.name,
//         });
//       } else {
//         console.error("Chat room creation failed", data);
//       }
//     } catch (err) {
//       console.error("Error creating or joining chat room:", err);
//     }
//   };

//   if (loading) return <p className="text-center text-gray-500 text-lg">Loading...</p>;
//   if (!skill) return <p className="text-center text-red-500 text-lg">Skill not found.</p>;
//   if (chatProps) return <ChatPage {...chatProps} />;

//   const badgeStyle = categoryColors[skill.category] || categoryColors["Others"];

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
//         <img
//           src={skill.image || "https://via.placeholder.com/600x300"}
//           alt={skill.name}
//           className="w-full h-64 object-cover"
//         />
//         <div className="p-6 space-y-5">
//           <div className="flex justify-between items-start">
//             <h2 className="text-3xl font-bold text-gray-800">{skill.name}</h2>
//             <span className={`text-sm font-medium px-3 py-1 rounded-full ${badgeStyle}`}>
//               {skill.category}
//             </span>
//           </div>

//           <p className="text-gray-700 text-base leading-relaxed">{skill.description}</p>

//           <p className="text-blue-600 font-semibold text-sm">
//             Wants to learn: <span className="font-medium">{skill.skillWantedInReturn}</span>
//           </p>

//           {/* Message Button */}
//           <button
//             onClick={handleMessage}
//             className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium py-3 rounded-lg shadow-sm"
//           >
//             💬 Message Skill Provider
//           </button>

//           {/* Booking Form */}
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 Book this Skill</h3>
//             <div className="space-y-4">
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               <input
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               <button
//                 onClick={handleBooking}
//                 className="w-full bg-green-600 hover:bg-green-700 transition-all text-white font-medium py-3 rounded-lg shadow-sm"
//               >
//                 ✅ Confirm Booking
//               </button>
//               {message && (
//                 <p className="text-center text-green-600 font-medium mt-2">{message}</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillDetails;






















import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import ChatPage from "./Chat/ChatPage";

const categoryColors = {
  Technology: "bg-blue-100 text-blue-700",
  Sports: "bg-green-100 text-green-700",
  Languages: "bg-yellow-100 text-yellow-700",
  "Life Coach": "bg-purple-100 text-purple-700",
  Art: "bg-pink-100 text-pink-700",
  Music: "bg-indigo-100 text-indigo-700",
  Others: "bg-gray-100 text-gray-700",
};

const SkillDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [skillOfferedName, setSkillOfferedName] = useState("");
  const [skillWantedName, setSkillWantedName] = useState("");

  const [chatProps, setChatProps] = useState(null);

  useEffect(() => {
    const fetchSkillDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/skills/${id}`);
        const data = await response.json();
        console.log("DATA is : ", data);
        setSkill(data);
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
      const token = localStorage.getItem("token");
      const user = jwtDecode(token);
      const senderId = user.userId;
      const receiverId = skill.userId;

      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          skillId: id,
          userId: senderId,
          receiverId,
          date,
          time,
          skillOfferedName,
          skillWantedName,
          message,
        }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Error creating booking.");
      console.error("Booking error:", error);
    }
  };

  const handleMessage = async () => {
    if (!localStorage.getItem("token")) return navigate("/login");

    try {
      const token = localStorage.getItem("token");
      const user = jwtDecode(token);
      const senderId = user.userId;
      const receiverId = skill.userId;

      

      const res = await fetch("http://localhost:3000/api/chatrooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user1Id: senderId, user2Id: receiverId }),
      });

      const data = await res.json();

      if (data?.id) {
        const receiverRes = await fetch(`http://localhost:3000/api/users/${receiverId}`);
        const receiverData = await receiverRes.json();

        setChatProps({
          roomId: data.id,
          receiverId,
          receiverName: receiverData.name,
        });
      } else {
        console.error("Chat room creation failed", data);
      }
    } catch (err) {
      console.error("Error creating or joining chat room:", err);
    }
  };

  if (loading) return <p className="text-center text-gray-500 text-lg">Loading...</p>;
  if (!skill) return <p className="text-center text-red-500 text-lg">Skill not found.</p>;
  if (chatProps) return <ChatPage {...chatProps} />;

  const badgeStyle = categoryColors[skill.category] || categoryColors["Others"];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        <img
          src={skill.image || "https://via.placeholder.com/600x300"}
          alt={skill.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 space-y-5">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-gray-800">{skill.name}</h2>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${badgeStyle}`}>
              {skill.category}
            </span>
          </div>

          <p className="text-gray-700 text-base leading-relaxed">{skill.description}</p>

          <p className="text-blue-600 font-semibold text-sm">
            Wants to learn: <span className="font-medium">{skill.skillWantedInReturn}</span>
          </p>

          {/* Message Button */}
          <button
            onClick={handleMessage}
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium py-3 rounded-lg shadow-sm"
          >
            💬 Message Skill Provider
          </button>

          {/* Booking Form */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">📅 Book this Skill</h3>
            <div className="space-y-4">
              {/* Skill Offered Dropdown */}
              <select
                value={skillOfferedName}
                onChange={(e) => setSkillOfferedName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Select the skill they are offering</option>
                {Array.isArray(skill.skillsOffered)
                  ? skill.skillsOffered.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))
                  : <option disabled>No skills listed</option>}
              </select>

              {/* Skill Wanted Dropdown */}
              <select
                value={skillWantedName}
                onChange={(e) => setSkillWantedName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="">Select what you can teach</option>

                  {Array.isArray(skill.skillsWanted)
                  ? skill.skillsWanted.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))
                  : <option disabled>No skills listed</option>}

              </select>

              {/* Message Box */}
              <textarea
                placeholder="Write a message for the provider..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              {/* Date Picker */}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              {/* Time Picker */}
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              {/* Confirm Booking Button */}
              <button
                onClick={handleBooking}
                className="w-full bg-green-600 hover:bg-green-700 transition-all text-white font-medium py-3 rounded-lg shadow-sm"
              >
                ✅ Confirm Booking
              </button>

              {message && (
                <p className="text-center text-green-600 font-medium mt-2">{message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
