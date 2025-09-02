// // SkillRequestModal.jsx
// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";

// const categoryColors = {
//   Technology: "bg-blue-100 text-blue-700",
//   Sports: "bg-green-100 text-green-700",
//   Languages: "bg-yellow-100 text-yellow-700",
//   "Life Coach": "bg-purple-100 text-purple-700",
//   Art: "bg-pink-100 text-pink-700",
//   Music: "bg-indigo-100 text-indigo-700",
//   Others: "bg-gray-100 text-gray-700",
// };

// const SkillRequestModal = ({ skillId, onClose }) => {
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [message, setMessage] = useState("");
//   const [skillOfferedName, setSkillOfferedName] = useState("");
//   const [skillWantedName, setSkillWantedName] = useState("");

//   useEffect(() => {
//     const fetchSkillDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/skills/${skillId}`);
//         const data = await response.json();
//         setSkill(data);
//       } catch (error) {
//         console.error("Error fetching skill details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (skillId) fetchSkillDetails();
//   }, [skillId]);

//   const handleBooking = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const user = jwtDecode(token);
//       const senderId = user.userId;
//       const receiverId = skill.userId;

//       const response = await fetch("http://localhost:3000/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           skillId,
//           userId: senderId,
//           receiverId,
//           date,
//           time,
//           skillOfferedName,
//           skillWantedName,
//           message,
//         }),
//       });

//       const data = await response.json();
//       setMessage(data.message || "Booking request sent!");
//     } catch (error) {
//       setMessage("Error creating booking.");
//       console.error("Booking error:", error);
//     }
//   };

//   if (!skillId) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-white/20">
//       <div className="bg-white max-w-2xl w-full rounded-xl shadow-lg p-6 relative overflow-y-auto max-h-[90vh]">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
//         >
//           &times;
//         </button>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading...</p>
//         ) : skill ? (
//           <>
//             <h2 className="text-2xl font-bold mb-2">{skill.name}</h2>
//             <span className={`text-sm font-medium px-3 py-1 rounded-full ${categoryColors[skill.category] || categoryColors.Others}`}>
//               {skill.category}
//             </span>
//             <p className="mt-3 text-gray-700">{skill.description}</p>
//             <p className="text-sm text-blue-600 mt-2">
//               Wants to learn: <strong>{skill.skillWantedInReturn}</strong>
//             </p>

//             {/* Booking Form */}
//             <div className="mt-6 space-y-3">
//               <select
//                 value={skillOfferedName}
//                 onChange={(e) => setSkillOfferedName(e.target.value)}
//                 className="w-full border p-2 rounded"
//               >
//                 <option value="">Select skill offered</option>
//                 {skill.skillsOffered?.map((s, i) => (
//                   <option key={i} value={s}>{s}</option>
//                 ))}
//               </select>

//               <select
//                 value={skillWantedName}
//                 onChange={(e) => setSkillWantedName(e.target.value)}
//                 className="w-full border p-2 rounded"
//               >
//                 <option value="">Select skill you can teach</option>
//                 {skill.skillsWanted?.map((s, i) => (
//                   <option key={i} value={s}>{s}</option>
//                 ))}
//               </select>

//               <textarea
//                 placeholder="Message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full border p-2 rounded"
//                 rows="3"
//               />

//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="w-full border p-2 rounded"
//               />

//               <input
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="w-full border p-2 rounded"
//               />

//               <button
//                 onClick={handleBooking}
//                 className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
//               >
//                 ✅ Confirm Booking
//               </button>

//               {message && <p className="text-green-600 text-center">{message}</p>}
//             </div>
//           </>
//         ) : (
//           <p className="text-red-500">Skill not found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SkillRequestModal;



// SkillRequestModal.jsx

// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";

// const categoryColors = {
//   Technology: "bg-blue-50 text-blue-700 border border-blue-200",
//   Sports: "bg-green-50 text-green-700 border border-green-200",
//   Languages: "bg-yellow-50 text-yellow-700 border border-yellow-200",
//   "Life Coach": "bg-purple-50 text-purple-700 border border-purple-200",
//   Art: "bg-pink-50 text-pink-700 border border-pink-200",
//   Music: "bg-indigo-50 text-indigo-700 border border-indigo-200",
//   Others: "bg-gray-50 text-gray-700 border border-gray-200",
// };

// const SkillRequestModal = ({ skillId, onClose }) => {
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [message, setMessage] = useState("");
//   const [skillOfferedName, setSkillOfferedName] = useState("");
//   const [skillWantedName, setSkillWantedName] = useState("");

//   useEffect(() => {
//     const fetchSkillDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/skills/${skillId}`);
//         const data = await response.json();
//         setSkill(data);
//       } catch (error) {
//         console.error("Error fetching skill details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (skillId) fetchSkillDetails();
//   }, [skillId]);

//   const handleBooking = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const user = jwtDecode(token);
//       const senderId = user.userId;
//       const receiverId = skill.userId;

//       const response = await fetch("http://localhost:3000/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           skillId,
//           userId: senderId,
//           receiverId,
//           date,
//           time,
//           skillOfferedName,
//           skillWantedName,
//           message,
//         }),
//       });

//       const data = await response.json();
//       setMessage(data.message || "Booking request sent!");
//     } catch (error) {
//       setMessage("Error creating booking.");
//       console.error("Booking error:", error);
//     }
//   };

//   if (!skillId) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm px-4">
//       <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-fadeIn">
        
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-8 text-gray-500 hover:text-gray-900 text-2xl"
//         >
//           &times;
//         </button>

//         {loading ? (
//           <div className="p-8 text-center text-gray-500">Loading...</div>
//         ) : skill ? (
//           <div className="grid grid-cols-1 md:grid-cols-2">
//             {/* Left Section - Skill Info */}
//             <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200">
//               <h2 className="text-3xl font-bold text-gray-900">{skill.name}</h2>
//               <span
//                 className={`inline-block mt-3 px-4 py-1 text-sm rounded-full ${categoryColors[skill.category] || categoryColors.Others}`}
//               >
//                 {skill.category}
//               </span>
//               <p className="mt-6 text-gray-700 leading-relaxed">{skill.description}</p>
//               <p className="mt-4 text-sm text-indigo-600 font-medium">
//                 🎯 Wants to learn: <strong>{skill.skillWantedInReturn}</strong>
//               </p>
//             </div>

//             {/* Right Section - Booking Form */}
//             <div className="p-8 bg-white">
//               <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Skill Session</h3>

//               <select
//                 value={skillOfferedName}
//                 onChange={(e) => setSkillOfferedName(e.target.value)}
//                 className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//               >
//                 <option value="">Select skill offered</option>
//                 {skill.skillsOffered?.map((s, i) => (
//                   <option key={i} value={s}>{s}</option>
//                 ))}
//               </select>

//               <select
//                 value={skillWantedName}
//                 onChange={(e) => setSkillWantedName(e.target.value)}
//                 className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//               >
//                 <option value="">Select skill you can teach</option>
//                 {skill.skillsWanted?.map((s, i) => (
//                   <option key={i} value={s}>{s}</option>
//                 ))}
//               </select>

//               <textarea
//                 placeholder="Add a message (optional)"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                 rows="3"
//               />

//               <div className="grid grid-cols-2 gap-3">
//                 <input
//                   type="date"
//                   value={date}
//                   onChange={(e) => setDate(e.target.value)}
//                   className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                 />
//                 <input
//                   type="time"
//                   value={time}
//                   onChange={(e) => setTime(e.target.value)}
//                   className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//                 />
//               </div>

//               <button
//                 onClick={handleBooking}
//                 className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
//               >
//                 ✅ Confirm Booking
//               </button>

//               {message && <p className="text-green-600 text-center mt-3">{message}</p>}
//             </div>
//           </div>
//         ) : (
//           <div className="p-8 text-center text-red-500">Skill not found</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SkillRequestModal;


// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import ChatPage from "./ChatPage"; // ✅ Import ChatPage
// import { useNavigate } from "react-router-dom";


// const categoryColors = {
//   Technology: "bg-blue-50 text-blue-700 border border-blue-200",
//   Sports: "bg-green-50 text-green-700 border border-green-200",
//   Languages: "bg-yellow-50 text-yellow-700 border border-yellow-200",
//   "Life Coach": "bg-purple-50 text-purple-700 border border-purple-200",
//   Art: "bg-pink-50 text-pink-700 border border-pink-200",
//   Music: "bg-indigo-50 text-indigo-700 border border-indigo-200",
//   Others: "bg-gray-50 text-gray-700 border border-gray-200",
// };

// const SkillRequestModal = ({ skillId, onClose }) => {
//   const [skill, setSkill] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");
//   const [message, setMessage] = useState("");
//   const [skillOfferedName, setSkillOfferedName] = useState("");
//   const [skillWantedName, setSkillWantedName] = useState("");

//   const [chatProps, setChatProps] = useState(null); // ✅ Chat state

//   const navigate = useNavigate();


//   useEffect(() => {
//     const fetchSkillDetails = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/skills/${skillId}`);
//         const data = await response.json();
//         setSkill(data);
//       } catch (error) {
//         console.error("Error fetching skill details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (skillId) fetchSkillDetails();
//   }, [skillId]);

//   const handleBooking = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const user = jwtDecode(token);
//       const senderId = user.userId;
//       const receiverId = skill.userId;

//       const response = await fetch("http://localhost:3000/api/bookings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           skillId,
//           userId: senderId,
//           receiverId,
//           date,
//           time,
//           skillOfferedName,
//           skillWantedName,
//           message,
//         }),
//       });

//       const data = await response.json();
//       setMessage(data.message || "Booking request sent!");
//     } catch (error) {
//       setMessage("Error creating booking.");
//       console.error("Booking error:", error);
//     }
//   };

  
//   const handleMessage = async () => {
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

//         // ✅ Navigate to chat layout and pass chat info via state
//         navigate("/dashboard/chatlayout", {
//           state: {
//             roomId: data.id,
//             receiverId,
//             receiverName: receiverData.name,
//           }
//         });
//       } else {
//         console.error("Chat room creation failed", data);
//       }
//     } catch (err) {
//       console.error("Error creating or joining chat room:", err);
//     }
//   };


//   if (!skillId) return null;

//   if (chatProps) {
//     return <ChatPage {...chatProps} />; // ✅ Show chat if active
//   }

//   return (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm px-2 sm:px-4 py-4 overflow-auto">
//     <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-4xl mx-auto animate-fadeIn max-h-screen overflow-y-auto">

//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl z-10"
//       >
//         &times;
//       </button>

//       {loading ? (
//         <div className="p-8 text-center text-gray-500">Loading...</div>
//       ) : skill ? (
//         <div className="grid grid-cols-1 md:grid-cols-2">
          
//           {/* Left Section */}
//           <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{skill.name}</h2>
//             <span className={`inline-block mt-3 px-4 py-1 text-sm rounded-full ${categoryColors[skill.category] || categoryColors.Others}`}>
//               {skill.category}
//             </span>
//             <p className="mt-6 text-gray-700 leading-relaxed">{skill.description}</p>
//             <p className="mt-4 text-sm text-indigo-600 font-medium">
//               🎯 Wants to learn: <strong>{skill.skillWantedInReturn}</strong>
//             </p>
//           </div>

//           {/* Right Section */}
//           <div className="p-6 sm:p-8 bg-white">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Skill Session</h3>

//             <select
//               value={skillOfferedName}
//               onChange={(e) => setSkillOfferedName(e.target.value)}
//               className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//             >
//               <option value="">Select skill offered</option>
//               {skill.skillsOffered?.map((s, i) => (
//                 <option key={i} value={s}>{s}</option>
//               ))}
//             </select>

//             <select
//               value={skillWantedName}
//               onChange={(e) => setSkillWantedName(e.target.value)}
//               className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//             >
//               <option value="">Select skill you can teach</option>
//               {skill.skillsWanted?.map((s, i) => (
//                 <option key={i} value={s}>{s}</option>
//               ))}
//             </select>

//             <textarea
//               placeholder="Add a message (optional)"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//               rows="3"
//             />

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//               />
//               <input
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
//               />
//             </div>

//             <button
//               onClick={handleBooking}
//               className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
//             >
//               Confirm Booking
//             </button>

//             <button
//               onClick={handleMessage}
//               className="mt-3 w-full bg-black text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:scale-[1.02]"
//             >
//               💬 Message Skill Provider
//             </button>

//             {message && <p className="text-green-600 text-center mt-3">{message}</p>}
//           </div>
//         </div>
//       ) : (
//         <div className="p-8 text-center text-red-500">Skill not found</div>
//       )}
//     </div>
//   </div>
// );


























  // return (
  //   <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm px-4">
  //     <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-fadeIn">

  //       {/* Close Button */}
  //       <button
  //         onClick={onClose}
  //         className="absolute top-6 right-8 text-gray-500 hover:text-gray-900 text-2xl"
  //       >
  //         &times;
  //       </button>

  //       {loading ? (
  //         <div className="p-8 text-center text-gray-500">Loading...</div>
  //       ) : skill ? (
  //         <div className="grid grid-cols-1 md:grid-cols-2">
  //           {/* Left Section - Skill Info */}
  //           <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200">
  //             <h2 className="text-3xl font-bold text-gray-900">{skill.name}</h2>
  //             <span
  //               className={`inline-block mt-3 px-4 py-1 text-sm rounded-full ${categoryColors[skill.category] || categoryColors.Others}`}
  //             >
  //               {skill.category}
  //             </span>
  //             <p className="mt-6 text-gray-700 leading-relaxed">{skill.description}</p>
  //             <p className="mt-4 text-sm text-indigo-600 font-medium">
  //               🎯 Wants to learn: <strong>{skill.skillWantedInReturn}</strong>
  //             </p>
  //           </div>

  //           {/* Right Section - Booking Form */}
  //           <div className="p-8 bg-white">
  //             <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Skill Session</h3>

  //             <select
  //               value={skillOfferedName}
  //               onChange={(e) => setSkillOfferedName(e.target.value)}
  //               className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
  //             >
  //               <option value="">Select skill offered</option>
  //               {skill.skillsOffered?.map((s, i) => (
  //                 <option key={i} value={s}>{s}</option>
  //               ))}
  //             </select>

  //             <select
  //               value={skillWantedName}
  //               onChange={(e) => setSkillWantedName(e.target.value)}
  //               className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
  //             >
  //               <option value="">Select skill you can teach</option>
  //               {skill.skillsWanted?.map((s, i) => (
  //                 <option key={i} value={s}>{s}</option>
  //               ))}
  //             </select>

  //             <textarea
  //               placeholder="Add a message (optional)"
  //               value={message}
  //               onChange={(e) => setMessage(e.target.value)}
  //               className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
  //               rows="3"
  //             />

  //             <div className="grid grid-cols-2 gap-3">
  //               <input
  //                 type="date"
  //                 value={date}
  //                 onChange={(e) => setDate(e.target.value)}
  //                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
  //               />
  //               <input
  //                 type="time"
  //                 value={time}
  //                 onChange={(e) => setTime(e.target.value)}
  //                 className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
  //               />
  //             </div>

  //             {/* Booking Button */}
  //             <button
  //               onClick={handleBooking}
  //               className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
  //             >
  //               ✅ Confirm Booking
  //             </button>

  //             {/* Message Button */}
  //             <button
  //               onClick={handleMessage}
  //               className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:scale-[1.02]"
  //             >
  //               💬 Message Skill Provider
  //             </button>

  //             {message && <p className="text-green-600 text-center mt-3">{message}</p>}
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="p-8 text-center text-red-500">Skill not found</div>
  //       )}
  //     </div>
  //   </div>
  // );
// };

// export default SkillRequestModal;















































import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import ChatPage from "../../../pages/ChatPage";
import { useNavigate } from "react-router-dom";

const categoryColors = {
  Technology: "bg-blue-50 text-blue-700 border border-blue-200",
  Sports: "bg-green-50 text-green-700 border border-green-200",
  Languages: "bg-yellow-50 text-yellow-700 border border-yellow-200",
  "Life Coach": "bg-purple-50 text-purple-700 border border-purple-200",
  Art: "bg-pink-50 text-pink-700 border border-pink-200",
  Music: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  Others: "bg-gray-50 text-gray-700 border border-gray-200",
};

const timeSlots = [
  "08:30 AM - 09:00 AM",
  "09:00 AM - 09:30 AM",
  "10:00 AM - 10:30 AM",
  "01:30 PM - 02:00 PM",
  "03:00 PM - 03:30 PM",
  "05:00 PM - 05:30 PM",
  "06:00 PM - 06:30 PM",
];

const SkillRequestModal = ({ skillId, onClose }) => {
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [skillOfferedName, setSkillOfferedName] = useState("");
  const [skillWantedName, setSkillWantedName] = useState("");

  const [chatProps, setChatProps] = useState(null);
  const navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchSkillDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/skills/${skillId}`);
        const data = await response.json();
        setSkill(data);
      } catch (error) {
        console.error("Error fetching skill details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (skillId) fetchSkillDetails();
  }, [skillId]);

  // const handleBooking = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const user = jwtDecode(token);
  //     const senderId = user.userId;
  //     const receiverId = skill.userId;

  //     const response = await fetch("http://localhost:3000/api/bookings", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         skillId,
  //         userId: senderId,
  //         receiverId,
  //         date,
  //         time,
  //         skillOfferedName,
  //         skillWantedName,
  //         message,
  //       }),
  //     });

  //     const data = await response.json();
  //     setMessage(data.message || "Booking request sent!");
  //   } catch (error) {
  //     setMessage("Error creating booking.");
  //     console.error("Booking error:", error);
  //   }
  // };

  const handleBooking = async () => {
  try {
    const token = localStorage.getItem("token");
    const user = jwtDecode(token);
    const senderId = user.userId;
    const receiverId = skill.userId;

    // Extract start time from selected time slot (e.g., "08:30 AM")
    const extractStartTime = (slot) => slot.split(" - ")[0];
    const convertTo24Hour = (timeStr) => {
      const [time, modifier] = timeStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);
      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    };

    const startTimeStr = extractStartTime(time);         // "08:30 AM"
    const startTime24 = convertTo24Hour(startTimeStr);   // "08:30"

    const response = await fetch("http://localhost:3000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        skillId,
        receiverId,
        date,                      // date in "YYYY-MM-DD" format
        time: startTime24,         // just the "HH:mm" part
        skillOfferedName,
        skillWantedName,
        message,
      }),
    });

    const data = await response.json();

    console.log("Data is : ", data);

    if (!response.ok) {
      setMessage(data.message || "Something went wrong.");
      console.error("Booking error:", data);
      return;
    }

    setMessage(data.message || "Booking request sent!");
  } catch (error) {
    setMessage("Error creating booking.");
    console.error("Booking error:", error);
  }
};


  const handleMessage = async () => {
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

        navigate("/dashboard/chatlayout", {
          state: {
            roomId: data.id,
            receiverId,
            receiverName: receiverData.name,
          },
        });
      } else {
        console.error("Chat room creation failed", data);
      }
    } catch (err) {
      console.error("Error creating or joining chat room:", err);
    }
  };

  if (!skillId) return null;
  if (chatProps) return <ChatPage {...chatProps} />;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm px-2 sm:px-4 py-4 overflow-auto">
      <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-4xl mx-auto animate-fadeIn max-h-screen overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl z-10"
        >
          &times;
        </button>

        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading...</div>
        ) : skill ? (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-gray-100 border-r border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{skill.name}</h2>
              <span className={`inline-block mt-3 px-4 py-1 text-sm rounded-full ${categoryColors[skill.category] || categoryColors.Others}`}>
                {skill.category}
              </span>
              <p className="mt-6 text-gray-700 leading-relaxed">{skill.description}</p>
              <p className="mt-4 text-sm text-indigo-600 font-medium">
                🎯 Wants to learn: <strong>{skill.skillWantedInReturn}</strong>
              </p>
            </div>

            {/* Right */}
            <div className="p-6 sm:p-8 bg-white">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Book a Skill Session</h3>

              <select
                value={skillOfferedName}
                onChange={(e) => setSkillOfferedName(e.target.value)}
                className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              >
                <option value="">Select skill offered</option>
                {skill.skillsOffered?.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>

              <select
                value={skillWantedName}
                onChange={(e) => setSkillWantedName(e.target.value)}
                className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
              >
                <option value="">Select skill you can teach</option>
                {skill.skillsWanted?.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>

              <textarea
                placeholder="Add a message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mb-3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                rows="3"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Date Picker */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Select Date</label>
                  <input
                    type="date"
                    min={today}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  />
                </div>

                {/* Time Slot Dropdown */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Time Slot</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition"
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02]"
              >
                Confirm Booking
              </button>

              <button
                onClick={handleMessage}
                className="mt-3 w-full bg-black text-white font-semibold py-3 rounded-lg shadow-md transition-transform transform hover:scale-[1.02]"
              >
                💬 Message Skill Provider
              </button>

              {message && <p className="text-green-600 text-center mt-3">{message}</p>}
            </div>
          </div>
        ) : (
          <div className="p-8 text-center text-red-500">Skill not found</div>
        )}
      </div>
    </div>
  );
};

export default SkillRequestModal;
















































// const handleMessage = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const user = jwtDecode(token);
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

  //     if (data?.id) {
  //       const receiverRes = await fetch(`http://localhost:3000/api/users/${receiverId}`);
  //       const receiverData = await receiverRes.json();

  //       setChatProps({
  //         roomId: data.id,
  //         receiverId,
  //         receiverName: receiverData.name,
  //       });
  //     } else {
  //       console.error("Chat room creation failed", data);
  //     }
  //   } catch (err) {
  //     console.error("Error creating or joining chat room:", err);
  //   }
  // };
