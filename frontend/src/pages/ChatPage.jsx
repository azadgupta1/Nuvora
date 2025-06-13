// import { useEffect, useState, useRef } from "react";
// import { io } from "socket.io-client";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

// const socket = io("http://localhost:3000");

// const ChatPage = ({ receiverId, roomId, receiverName }) => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const bottomRef = useRef(null);

//   const token = localStorage.getItem("token");
//   const user = token ? jwtDecode(token) : null;
//   const senderId = user?.userId;

//   // Fetch messages
//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!roomId || !token) return;

//       try {
//         const response = await axios.get(`http://localhost:3000/api/messages/${roomId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMessages(response.data);
//       } catch (error) {
//         console.error("Failed to fetch message history:", error);
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

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="h-screen w-full bg-[#e5ddd5] flex justify-center items-center">
//       <div className="w-full max-w-4xl h-[95%] bg-[#f0f0f0] shadow-xl rounded-md flex flex-col">
//         {/* Chat Header */}
//         <div className="bg-[#075E54] text-white px-6 py-3 mt-5 flex items-center rounded-t-md">
//           <div className="font-bold text-lg">{receiverName || "User"}</div>
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-chat-bg">
//           {messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`max-w-[70%] px-4 py-2 rounded-xl text-sm relative ${
//                 msg.senderId === senderId
//                   ? "bg-[#DCF8C6] ml-auto text-right"
//                   : "bg-white mr-auto text-left"
//               }`}
//             >
//               <p className="break-words">{msg.message}</p>
//               <span className="block text-[10px] text-gray-500 mt-1">
//                 {new Date(msg.timestamp || Date.now()).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </span>
//             </div>
//           ))}
//           <div ref={bottomRef} />
//         </div>

//         {/* Input */}
//         <div className="flex items-center p-3 bg-white border-t border-gray-300 rounded-b-md">
//           <input
//             type="text"
//             placeholder="Type a message"
//             className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />
//           <button
//             onClick={sendMessage}
//             className="ml-3 px-4 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#1DA85B] transition-all"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;


// import { useEffect, useState, useRef } from "react";
// import { io } from "socket.io-client";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

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
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMessages(response.data);
//       } catch (error) {
//         console.error("Failed to fetch message history:", error);
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

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="flex flex-col h-full">
//       {/* Header */}
//       <div className="bg-[#075E54] text-white px-6 py-3 flex items-center shadow-sm">
//         <div className="font-bold text-lg">{receiverName || "User"}</div>
//       </div>

//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`max-w-[75%] px-4 py-2 rounded-xl text-sm relative break-words ${
//               msg.senderId === senderId
//                 ? "bg-[#DCF8C6] ml-auto text-right"
//                 : "bg-white mr-auto text-left"
//             }`}
//           >
//             <p>{msg.message}</p>
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
//           className="ml-3 px-4 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#1DA85B] transition-all"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;


import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Nuvora_2 from '../assets/Nuvora_2.png';
import BG_Chat from '../assets/BG_Chat.png';

const socket = io("http://localhost:3000");

const ChatPage = ({ receiverId, roomId, receiverName }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  const senderId = user?.userId;

  useEffect(() => {
    const fetchMessages = async () => {
      if (!roomId || !token) return;
      try {
        const response = await axios.get(`http://localhost:3000/api/messages/${roomId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [roomId, token]);

  useEffect(() => {
    if (!senderId || !receiverId || !roomId) return;

    socket.emit("joinRoom", roomId);

    const handleReceiveMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receiveMessage", handleReceiveMessage);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
    };
  }, [senderId, receiverId, roomId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const msgData = {
      senderId,
      receiverId,
      roomId,
      message,
      timestamp: new Date().toISOString(),
    };

    socket.emit("sendMessage", msgData);
    setMessages((prev) => [...prev, msgData]);
    setMessage("");
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 text-white px-6 py-3 flex items-center shadow-md">
        <div className="font-bold text-lg">{receiverName || "User"}</div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-6 py-4 space-y-2"
        style={{
          backgroundImage: `url(${BG_Chat})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
>

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`block w-fit max-w-[70%] px-4 py-2 rounded-xl text-sm relative ${
              msg.senderId === senderId
                ? "bg-[#DCF8C6] ml-auto text-right"
                : "bg-white mr-auto text-left"
            }`}
          >
            <p className="break-words">{msg.message}</p>
            <span className="block text-[10px] text-gray-500 mt-1">
              {new Date(msg.timestamp || Date.now()).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-3 bg-gray-800 border-t border-black flex items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 rounded-full border text-gray-50 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-800"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-3 px-4 py-2 bg-green-800 text-white rounded-full hover:bg-green-900 transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
