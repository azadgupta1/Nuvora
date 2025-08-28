// import { useEffect, useState } from "react";
// import axios from "axios";
// import ChatPage from "./ChatPage";
// import { FiSearch, FiMoreVertical } from "react-icons/fi";
// import { io } from "socket.io-client";
// import { jwtDecode } from "jwt-decode";

// const socket = io("http://localhost:3000");

// const ChatLayout = () => {
//   const [rooms, setRooms] = useState([]);
//   const [activeRoom, setActiveRoom] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);

//   const token = localStorage.getItem("token");
//   const user = token ? jwtDecode(token) : null;

//   useEffect(() => {
//     if (!token || !user) return;

//     const fetchRooms = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/chatrooms/rooms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRooms(res.data);
//       } catch (err) {
//         console.error("Error fetching rooms:", err);
//       }
//     };

//     fetchRooms();

//     // Notify backend this user is online
//     socket.emit("userOnline", user.userId);

//     socket.on("updateOnlineUsers", (onlineUserIds) => {
//       setOnlineUsers(onlineUserIds);
//     });

//     return () => {
//       socket.off("updateOnlineUsers");
//     };
//   }, [token]);

//   const isUserOnline = (id) => onlineUsers.includes(id);

//   return (
//     <div className="h-screen w-screen flex bg-[#e5ddd5] overflow-hidden">
//       {/* Sidebar */}
//       <div className="w-[30%] bg-white flex flex-col border-r border-gray-300">
//         {/* Header */}
//         <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-10">
//           <span className="text-xl font-semibold">Chats</span>
//           <div className="flex items-center gap-4 text-xl">
//             <FiSearch className="cursor-pointer hover:opacity-80" />
//             <FiMoreVertical className="cursor-pointer hover:opacity-80" />
//           </div>
//         </div>

//         {/* Chat Room List */}
//         <div className="flex-1 overflow-y-auto">
//           {rooms.length > 0 ? (
//             rooms.map((room) => (
//               <div
//                 key={room.roomId}
//                 onClick={() => setActiveRoom(room)}
//                 className={`cursor-pointer px-4 py-3 flex items-center gap-3 hover:bg-[#f5f5f5] transition ${
//                   activeRoom?.roomId === room.roomId ? "bg-[#e1f3fb]" : ""
//                 }`}
//               >
//                 <div className="relative">
//                   <img
//                     src={room.user.profilePicture || "/default.png"}
//                     alt={room.user.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   {isUserOnline(room.user.id) && (
//                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
//                   )}
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="font-medium text-gray-900 text-sm">{room.user.name}</span>
//                   <span className="text-xs text-gray-500">
//                     {isUserOnline(room.user.id) ? "Online" : "Offline"}
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="p-4 text-gray-500 text-sm">No chats available</div>
//           )}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="w-[70%] bg-[#f0f0f0] flex flex-col">
//         {activeRoom ? (
//           <ChatPage
//             receiverId={activeRoom.user.id}
//             roomId={activeRoom.roomId}
//             receiverName={activeRoom.user.name}
//           />
//         ) : (
//           <div className="h-full w-full flex items-center justify-center text-gray-600 text-lg">
//             Select a chat to start messaging
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatLayout;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import ChatPage from "./ChatPage";
// import { FiSearch, FiMoreVertical } from "react-icons/fi";
// import { io } from "socket.io-client";
// import { jwtDecode } from "jwt-decode";

// const socket = io("http://localhost:3000");

// const ChatLayout = () => {
//   const [rooms, setRooms] = useState([]);
//   const [activeRoom, setActiveRoom] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);

//   const token = localStorage.getItem("token");
//   const user = token ? jwtDecode(token) : null;

//   useEffect(() => {
//     if (!token || !user) return;

//     const fetchRooms = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/chatrooms/rooms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRooms(res.data);
//       } catch (err) {
//         console.error("Error fetching rooms:", err);
//       }
//     };

//     fetchRooms();

//     socket.emit("userOnline", user.userId);

//     socket.on("updateOnlineUsers", (onlineUserIds) => {
//       setOnlineUsers(onlineUserIds);
//     });

//     return () => {
//       socket.off("updateOnlineUsers");
//     };
//   }, [token]);

//   const isUserOnline = (id) => onlineUsers.includes(id);

//   return (
    
//     <div className="pt-8 h-[calc(100vh-5rem)] flex overflow-hidden bg-gray-800">
//       {/* Sidebar */}
//       <div className="w-[25%] min-w-[250px] max-w-sm bg-gray-800 border-r border-gray-300 flex flex-col">
//         {/* Header */}
//         <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">

//           <span className="text-lg font-semibold">Chats</span>
//           <div className="flex items-center gap-3 text-xl">
//             <FiSearch className="cursor-pointer hover:opacity-80" />
//             <FiMoreVertical className="cursor-pointer hover:opacity-80" />
//           </div>
//         </div>

//         {/* Room List */}
//         <div className="flex-1 overflow-y-auto">
//           {rooms.length > 0 ? (
//             rooms.map((room) => (
//               <div
//                 key={room.roomId}
//                 onClick={() => setActiveRoom(room)}
//                 className={`cursor-pointer px-4 py-3 flex items-center gap-3 hover:bg-gray-100 transition ${
//                   activeRoom?.roomId === room.roomId ? "bg-[#e1f3fb]" : ""
//                 }`}
//               >
//                 <div className="relative">
//                   <img
//                     src={room.user.profilePicture || "/default.png"}
//                     alt={room.user.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   {isUserOnline(room.user.id) && (
//                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
//                   )}
//                 </div>
//                 <div className="flex flex-col overflow-hidden">
//                   <span className="font-medium text-sm text-white truncate">{room.user.name}</span>
//                   <span className="text-xs text-gray-500 truncate">
//                     {isUserOnline(room.user.id) ? "Online" : "Offline"}
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="p-4 text-gray-500 text-sm">No chats available</div>
//           )}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 bg-gray-800 flex flex-col overflow-hidden">
//         {activeRoom ? (
//           <ChatPage
//             receiverId={activeRoom.user.id}
//             roomId={activeRoom.roomId}
//             receiverName={activeRoom.user.name}
//           />
//         ) : (
//           <div className="flex-1 flex items-center justify-center text-gray-600 text-lg">
//             Select a chat to start messaging
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatLayout;


// import { useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";
// import chatBg from "../assets/Nuvora_2.png";

// const socket = io("http://localhost:3000");

// const ChatPage = ({ receiverId, roomId, receiverName }) => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const bottomRef = useRef(null);

//   const token = localStorage.getItem("token");
//   const user = token ? jwtDecode(token) : null;
//   const senderId = user?.userId;

//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!roomId || !token) return;
//       try {
//         const response = await axios.get(`http://localhost:3000/api/messages/${roomId}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMessages(response.data);
//       } catch (error) {
//         console.error("Failed to fetch messages:", error);
//       }
//     };

//     fetchMessages();
//   }, [roomId, token]);

//   useEffect(() => {
//     if (!senderId || !receiverId || !roomId) return;

//     socket.emit("joinRoom", roomId);

//     const handleReceiveMessage = (msg) => {
//       setMessages((prev) => [...prev, msg]);
//     };

//     socket.on("receiveMessage", handleReceiveMessage);

//     return () => {
//       socket.off("receiveMessage", handleReceiveMessage);
//     };
//   }, [senderId, receiverId, roomId]);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const sendMessage = () => {
//     if (!message.trim()) return;

//     const msgData = {
//       senderId,
//       receiverId,
//       roomId,
//       message,
//       timestamp: new Date().toISOString(),
//     };

//     socket.emit("sendMessage", msgData);
//     setMessages((prev) => [...prev, msgData]);
//     setMessage("");
//   };

//   return (
//     <div className="flex-1 flex flex-col overflow-hidden">
//       {/* Header */}
//       <div className="bg-[#075E54] text-white px-6 py-3 flex items-center shadow-md">
//         <div className="font-bold text-lg">{receiverName || "User"}</div>
//       </div>

//       {/* Messages */}
//       <div
//         className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
//         style={{
//           backgroundImage: `url(${chatBg})`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "250px",
//         }}
//       >
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`w-fit max-w-[70%] px-4 py-2 rounded-xl text-sm shadow ${
//               msg.senderId === senderId
//                 ? "bg-[#DCF8C6] ml-auto text-right"
//                 : "bg-white mr-auto text-left"
//             }`}
//           >
//             <p className="break-words">{msg.message}</p>
//             <span className="block text-[10px] text-gray-500 mt-1">
//               {new Date(msg.timestamp || Date.now()).toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               })}
//             </span>
//           </div>
//         ))}
//         <div ref={bottomRef} />
//       </div>

//       {/* Input */}
//       <div className="px-4 py-3 bg-white border-t border-gray-300 flex items-center">
//         <input
//           type="text"
//           placeholder="Type a message"
//           className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//         />
//         <button
//           onClick={sendMessage}
//           className="ml-3 px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-[#1DA85B] transition-all"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import ChatPage from "./ChatPage";
// import { FiSearch, FiMoreVertical } from "react-icons/fi";
// import { io } from "socket.io-client";
// import { jwtDecode } from "jwt-decode";

// const socket = io("http://localhost:3000");

// const ChatLayout = () => {
//   const [rooms, setRooms] = useState([]);
//   const [activeRoom, setActiveRoom] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);

//   const token = localStorage.getItem("token");
//   const user = token ? jwtDecode(token) : null;

//   useEffect(() => {
//     if (!token || !user) return;

//     const fetchRooms = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/chatrooms/rooms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRooms(res.data);
//       } catch (err) {
//         console.error("Error fetching rooms:", err);
//       }
//     };

//     fetchRooms();

//     socket.emit("userOnline", user.userId);

//     socket.on("updateOnlineUsers", (onlineUserIds) => {
//       setOnlineUsers(onlineUserIds);
//     });

//     return () => {
//       socket.off("updateOnlineUsers");
//     };
//   }, [token]);

//   const isUserOnline = (id) => onlineUsers.includes(id);

//   return (
//     <div className="pt-8 h-[calc(100vh-5rem)] flex overflow-hidden bg-gray-900">
//       {/* Sidebar */}
//       <div className="w-[25%] min-w-[250px] max-w-sm bg-gray-800 border-r border-gray-700 flex flex-col">
//         {/* Header */}
//         <div className="text-white px-4 py-3 flex items-center justify-between border-b border-gray-700">
//           <span className="text-lg font-semibold">Chats</span>
//           <div className="flex items-center gap-3 text-xl">
//             <FiSearch className="cursor-pointer hover:opacity-80" />
//             <FiMoreVertical className="cursor-pointer hover:opacity-80" />
//           </div>
//         </div>

//         {/* Room List */}
//         <div className="flex-1 overflow-y-auto">
//           {rooms.length > 0 ? (
//             rooms.map((room) => (
//               <div
//                 key={room.roomId}
//                 onClick={() => setActiveRoom(room)}
//                 className={`cursor-pointer px-4 py-3 flex items-center gap-3 transition ${
//                   activeRoom?.roomId === room.roomId
//                     ? "bg-green-700 bg-opacity-20"
//                     : "hover:bg-gray-700"
//                 }`}
//               >
//                 <div className="relative">
//                   <img
//                     src={room.user.profilePicture || "/default.png"}
//                     alt={room.user.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   {isUserOnline(room.user.id) && (
//                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full" />
//                   )}
//                 </div>
//                 <div className="flex flex-col overflow-hidden">
//                   <span className="font-medium text-sm text-white truncate">{room.user.name}</span>
//                   <span className="text-xs text-gray-400 truncate">
//                     {isUserOnline(room.user.id) ? "Online" : "Offline"}
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="p-4 text-gray-400 text-sm">No chats available</div>
//           )}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 bg-gray-800 flex flex-col overflow-hidden">
//         {activeRoom ? (
//           <ChatPage
//             receiverId={activeRoom.user.id}
//             roomId={activeRoom.roomId}
//             receiverName={activeRoom.user.name}
//           />
//         ) : (
//           <div className="flex-1 flex items-center justify-center text-gray-200 text-lg">
//             Select a chat to start messaging
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatLayout;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import ChatPage from "./ChatPage";
// import { FiSearch, FiMoreVertical, FiX } from "react-icons/fi";
// import { io } from "socket.io-client";
// import { jwtDecode } from "jwt-decode";

// const socket = io("http://localhost:3000");

// const ChatLayout = () => {
//   const [rooms, setRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [activeRoom, setActiveRoom] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const token = localStorage.getItem("token");
//   const user = token ? jwtDecode(token) : null;

//   useEffect(() => {
//     if (!token || !user) return;

//     const fetchRooms = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/chatrooms/rooms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRooms(res.data);
//         setFilteredRooms(res.data);
//       } catch (err) {
//         console.error("Error fetching rooms:", err);
//       }
//     };

//     fetchRooms();

//     socket.emit("userOnline", user.userId);

//     socket.on("updateOnlineUsers", (onlineUserIds) => {
//       setOnlineUsers(onlineUserIds);
//     });

//     return () => {
//       socket.off("updateOnlineUsers");
//     };
//   }, [token]);

//   // Filter rooms based on search term
//   useEffect(() => {
//     if (!searchTerm) {
//       setFilteredRooms(rooms);
//     } else {
//       const filtered = rooms.filter((room) =>
//         room.user.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredRooms(filtered);
//     }
//   }, [searchTerm, rooms]);

//   const isUserOnline = (id) => onlineUsers.includes(id);

//   return (
//     <div className="pt-8 h-[calc(100vh-5rem)] flex overflow-hidden bg-gray-900">
//       {/* Sidebar */}
//       <div className="w-[25%] min-w-[250px] max-w-sm bg-gray-800 border-r border-gray-700 flex flex-col">
//         {/* Header */}
//         <div className="text-white px-4 py-3 flex items-center justify-between border-b border-gray-700">
//           {!searchOpen ? (
//             <>
//               <span className="text-lg font-semibold">Chats</span>
//               <div className="flex items-center gap-3 text-xl">
//                 <FiSearch
//                   className="cursor-pointer hover:opacity-80"
//                   onClick={() => setSearchOpen(true)}
//                   title="Search chats"
//                 />
//                 <FiMoreVertical className="cursor-pointer hover:opacity-80" />
//               </div>
//             </>
//           ) : (
//             <div className="flex items-center w-full gap-2">
//               <input
//                 type="text"
//                 autoFocus
//                 placeholder="Search chats..."
//                 className="flex-1 px-3 py-1 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Escape") {
//                     setSearchOpen(false);
//                     setSearchTerm("");
//                   }
//                 }}
//               />
//               <button
//                 onClick={() => {
//                   setSearchOpen(false);
//                   setSearchTerm("");
//                 }}
//                 className="text-white hover:opacity-80"
//                 aria-label="Close search"
//               >
//                 <FiX size={20} />
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Room List */}
//         <div className="flex-1 overflow-y-auto">
//           {filteredRooms.length > 0 ? (
//             filteredRooms.map((room) => (
//               <div
//                 key={room.roomId}
//                 onClick={() => setActiveRoom(room)}
//                 className={`cursor-pointer px-4 py-3 flex items-center gap-3 transition ${
//                   activeRoom?.roomId === room.roomId
//                     ? "bg-green-700 bg-opacity-20"
//                     : "hover:bg-gray-700"
//                 }`}
//               >
//                 <div className="relative">
//                   <img
//                     src={room.user.profilePicture || "/default.png"}
//                     alt={room.user.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   {isUserOnline(room.user.id) && (
//                     <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full" />
//                   )}
//                 </div>
//                 <div className="flex flex-col overflow-hidden">
//                   <span className="font-medium text-sm text-white truncate">
//                     {room.user.name}
//                   </span>
//                   <span className="text-xs text-gray-400 truncate">
//                     {isUserOnline(room.user.id) ? "Online" : "Offline"}
//                   </span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="p-4 text-gray-400 text-sm">No chats available</div>
//           )}
//         </div>
//       </div>

//       {/* Chat Area */}
//       <div className="flex-1 bg-gray-800 flex flex-col overflow-hidden">
//         {activeRoom ? (
//           <ChatPage
//             receiverId={activeRoom.user.id}
//             roomId={activeRoom.roomId}
//             receiverName={activeRoom.user.name}
//           />
//         ) : (
//           <div className="flex-1 flex items-center justify-center text-gray-200 text-lg">
//             Select a chat to start messaging
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatLayout;

// const socket = io("http://localhost:3000");





// import { useEffect, useState } from "react";
// import axios from "axios";
// import ChatPage from "./ChatPage";
// import { FiSearch, FiMoreVertical, FiX } from "react-icons/fi";
// import { jwtDecode } from "jwt-decode";
// import socket from "../socket";
// import { useLocation } from "react-router-dom";




// const ChatLayout = () => {
//   const [rooms, setRooms] = useState([]);
//   const [filteredRooms, setFilteredRooms] = useState([]);
//   const [activeRoom, setActiveRoom] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const location = useLocation();

//   const token = localStorage.getItem("token");
//   const user = token ? jwtDecode(token) : null;

//   useEffect(() => {
//     if (!token || !user) return;

//     const fetchRooms = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/chatrooms/rooms", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRooms(res.data);
//         setFilteredRooms(res.data);
//       } catch (err) {
//         console.error("Error fetching rooms:", err);
//       }
//     };

//     fetchRooms();

//     socket.emit("userOnline", user.userId);

//     socket.on("updateOnlineUsers", (onlineUserIds) => {
//       setOnlineUsers(onlineUserIds);
//     });

//     return () => {
//       socket.off("updateOnlineUsers");
//     };
//   }, [token]);

//   useEffect(() => {
//     if (!searchTerm) {
//       setFilteredRooms(rooms);
//     } else {
//       const filtered = rooms.filter((room) =>
//         room.user.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setFilteredRooms(filtered);
//     }
//   }, [searchTerm, rooms]);

//   const isUserOnline = (id) => onlineUsers.includes(String(id));

//   useEffect(() => {
//     console.log("Online users from socket:", onlineUsers);
//     console.log("Room user IDs:", rooms.map(r => r.user.id));
//   }, [onlineUsers, rooms]);


//   useEffect(() => {
//     if (location.state?.roomId && location.state?.receiverId && location.state?.receiverName) {
//       const directRoom = {
//         roomId: location.state.roomId,
//         user: {
//           id: location.state.receiverId,
//           name: location.state.receiverName,
//           profilePicture: "/default.png", // or fetch from API if needed
//         }
//       };
//       setActiveRoom(directRoom);
//     }
//   }, [location.state]);



//   return (
//     <div className="min-h-screen bg-gray-100 pt-10 px-10 pb-6">
//   <div className="h-[calc(100vh-5rem)] bg-white rounded-2xl shadow-lg overflow-hidden flex">
//     {/* Sidebar */}
//     <div className="w-[300px] bg-white border-r border-gray-200 flex flex-col">
      
//       {/* Header Row 1 */}
//       <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
//         <span className="text-lg font-semibold text-gray-800">Messaging</span>
//         <div className="flex-1 ml-4">
//           <div className="relative">
//             <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search messages"
//               className="w-full pl-10 pr-3 py-2 text-sm bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Header Row 2 - Filters */}
//       <div className="px-4 py-2 border-b border-gray-200 flex gap-2 overflow-x-auto">
//         <button className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200 hover:bg-blue-100">
//           Starred
//         </button>
//         <button className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-300 hover:bg-gray-200">
//           Unread
//         </button>
//         <button className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-300 hover:bg-gray-200">
//           All
//         </button>
//       </div>

//       {/* User List */}
//       <div className="flex-1 overflow-y-auto">
//         {filteredRooms.length > 0 ? (
//           filteredRooms.map((room) => (
//             <div
//               key={room.roomId}
//               onClick={() => setActiveRoom(room)}
//               className={`cursor-pointer px-4 py-3 flex items-center gap-3 transition ${
//                 activeRoom?.roomId === room.roomId
//                   ? "bg-blue-50"
//                   : "hover:bg-gray-50"
//               }`}
//             >
//               <div className="relative">
//                 <img
//                   src={room.user.profilePicture || "/default.png"}
//                   alt={room.user.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 {isUserOnline(room.user.id) && (
//                   <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
//                 )}
//               </div>
//               <div className="flex flex-col overflow-hidden">
//                 <span className="font-medium text-sm text-gray-800 truncate">
//                   {room.user.name}
//                 </span>
//                 <span className="text-[11px] text-gray-500 truncate">
//                   {isUserOnline(room.user.id) ? "Online" : "Offline"}
//                 </span>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="p-4 text-gray-400 text-xs">No chats available</div>
//         )}
//       </div>
//     </div>

//     {/* Chat Area */}
//     <div className="flex-1 bg-gray-50 flex flex-col overflow-hidden">
//       {activeRoom ? (
//         <ChatPage
//           receiverId={activeRoom.user.id}
//           roomId={activeRoom.roomId}
//           receiverName={activeRoom.user.name}
//           isReceiverOnline={isUserOnline(activeRoom.user.id)}
//         />
//       ) : (
//         <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
//           Select a chat to start messaging
//         </div>
//       )}
//     </div>
//   </div>
// </div>

//   );
// };

// export default ChatLayout;











import { useEffect, useState } from "react";
import axios from "axios";
import ChatPage from "./ChatPage";
import { FiSearch } from "react-icons/fi";
import { jwtDecode } from "jwt-decode";
import socket from "../socket";
import { useLocation } from "react-router-dom";

const ChatLayout = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;

  const location = useLocation();

  // Fetch chat rooms
  useEffect(() => {
    if (!token || !user) return;

    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/chatrooms/rooms", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRooms(res.data);
        setFilteredRooms(res.data);
      } catch (err) {
        console.error("Error fetching rooms:", err);
      }
    };

    fetchRooms();

    socket.emit("userOnline", user.userId);
    socket.on("updateOnlineUsers", (onlineUserIds) => {
      setOnlineUsers(onlineUserIds);
    });

    return () => {
      socket.off("updateOnlineUsers");
    };
  }, [token]);

  // Search filtering
  useEffect(() => {
    if (!searchTerm) {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter((room) =>
        room.user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRooms(filtered);
    }
  }, [searchTerm, rooms]);

  // Determine if user is online
  const isUserOnline = (id) => onlineUsers.includes(String(id));

  // Pre-open chat room via navigation
  useEffect(() => {
    if (location.state?.roomId && location.state?.receiverId && location.state?.receiverName) {
      const directRoom = {
        roomId: location.state.roomId,
        user: {
          id: location.state.receiverId,
          name: location.state.receiverName,
          profilePicture: "/default.png",
        },
      };
      setActiveRoom(directRoom);
    }
  }, [location.state]);

  // Handle back navigation on mobile
  const handleBack = () => {
    setActiveRoom(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-10 px-2 sm:px-10 pb-6">
      <div className="h-[calc(100vh-5rem)] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div
          className={`w-full sm:w-[300px] border-r border-gray-200 flex flex-col transition-all duration-300 ${
            activeRoom ? "hidden sm:flex" : "flex"
          }`}
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-800">Messaging</span>
          </div>

          {/* Search */}
          <div className="px-4 py-2 border-b border-gray-200">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search messages"
                className="w-full pl-10 pr-3 py-2 text-sm bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filters */}
          {/* <div className="px-4 py-2 border-b border-gray-200 flex gap-2 overflow-x-auto">
            <button className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200 hover:bg-blue-100">
              Starred
            </button>
            <button className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-300 hover:bg-gray-200">
              Unread
            </button>
            <button className="px-4 py-1.5 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-300 hover:bg-gray-200">
              All
            </button>
          </div> */}

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <div
                  key={room.roomId}
                  onClick={() => setActiveRoom(room)}
                  className={`cursor-pointer px-4 py-3 flex items-center gap-3 transition ${
                    activeRoom?.roomId === room.roomId
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={room.user.profilePicture || "/default.png"}
                      alt={room.user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {isUserOnline(room.user.id) && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                    )}
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-medium text-sm text-gray-800 truncate">
                      {room.user.name}
                    </span>
                    <span className="text-[11px] text-gray-500 truncate">
                      {isUserOnline(room.user.id) ? "Online" : "Offline"}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-gray-400 text-xs">No chats available</div>
            )}
          </div>
        </div>

        {/* Chat Area */}
        <div
          className={`flex-1 bg-gray-50 flex flex-col overflow-hidden transition-all duration-300 ${
            activeRoom ? "flex" : "hidden sm:flex"
          }`}
        >
          {activeRoom ? (
            <ChatPage
              receiverId={activeRoom.user.id}
              roomId={activeRoom.roomId}
              receiverName={activeRoom.user.name}
              isReceiverOnline={isUserOnline(activeRoom.user.id)}
              onBack={handleBack} // send back handler
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
              Select a chat to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
