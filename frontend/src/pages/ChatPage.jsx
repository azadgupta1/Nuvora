// // ChatPage.jsx
// import { useEffect, useState, useRef } from "react";
// import { useLocation } from "react-router-dom";
// import { io } from "socket.io-client";
// import { jwtDecode } from "jwt-decode";

// const socket = io("http://localhost:3000"); // backend WebSocket

// const ChatPage = () => {
//   const location = useLocation();
//   // const { receiverId } = location.state || {};

//   const { receiverId, roomId } = location.state || {};

//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const bottomRef = useRef(null);

//   const token = localStorage.getItem("token");
//   const user = token ? jwtDecode(token) : null;
//   const senderId = user?.userId;

//   useEffect(() => {
//   if (!senderId || !receiverId || !roomId) return;

//   socket.emit("joinRoom", roomId);

//   const handleReceiveMessage = (msg) => {
//     setMessages((prev) => [...prev, msg]);
//   };

//   console.log("Receiver ID is : ", receiverId);

//   socket.on("receiveMessage", handleReceiveMessage);

//   return () => {
//     socket.off("receiveMessage", handleReceiveMessage); // ✅ Cleanly remove listener only
//   };
// }, [senderId, receiverId, roomId]);



//   const sendMessage = () => {
//     if (!message.trim()) return;
//     const msgData = {
//       senderId,
//       receiverId,
//       roomId,
//       message,
//     };
//     socket.emit("sendMessage", msgData);
//     // setMessages((prev) => [...prev, msgData]);
//     setMessage("");
//   };


//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);


//   useEffect(() => {
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
//     <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
//       <div className="w-full max-w-xl bg-white rounded shadow p-4 flex flex-col">

//         <div className="bg-gray-300 p-4 font-bold">
//           {receiverName}
//         </div>
//         <hr />
//         <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
//           Chat with Skill Provider
//         </h2>

//         <div className="flex-1 overflow-y-auto max-h-[400px] mb-4 px-2">
//           {messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`my-2 p-2 rounded-md text-white w-fit ${
//                 msg.senderId === senderId ? "bg-blue-500 self-end ml-auto" : "bg-gray-500 self-start mr-auto"
//               }`}
//             >
//               {msg.message}
//             </div>
//           ))}
//           <div ref={bottomRef} />
//         </div>

//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Type your message"
//             className="flex-1 border rounded px-4 py-2 mr-2"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={sendMessage}
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
// import axios from "axios"; // Make sure axios is installed

// const socket = io("http://localhost:3000");

// const ChatPage = ({ receiverId, roomId, receiverName }) => {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const bottomRef = useRef(null);

//   console.log("ReceiverID: ", receiverId);
//   console.log("RoomID : ", roomId);
//   console.log("RecieverName : ", receiverName);

//   const token = localStorage.getItem("token");
//   const user = token ? jwtDecode(token) : null;
//   const senderId = user?.userId;

//   // 👇 Fetch message history
//   useEffect(() => {
//     const fetchMessages = async () => {
//       if (!roomId || !token) return;

//       try {
//         const response = await axios.get(`http://localhost:3000/api/messages/${roomId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMessages(response.data); // Load messages from DB
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
//     };
//     socket.emit("sendMessage", msgData);
//     setMessage("");
//   };

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
//       <div className="w-full max-w-xl bg-white rounded shadow p-4 flex flex-col">
//         <div className="bg-gray-300 p-4 font-bold">{receiverName || "User"}</div>
//         <hr />
//         <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
//           Chat with Skill Provider
//         </h2>

//         <div className="flex-1 overflow-y-auto max-h-[400px] mb-4 px-2">
//           {messages.map((msg, idx) => (
//             <div
//               key={idx}
//               className={`my-2 p-2 rounded-md text-white w-fit ${
//                 msg.senderId === senderId ? "bg-blue-500 self-end ml-auto" : "bg-gray-500 self-start mr-auto"
//               }`}
//             >
//               {msg.message}
//             </div>
//           ))}
//           <div ref={bottomRef} />
//         </div>

//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Type your message"
//             className="flex-1 border rounded px-4 py-2 mr-2"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={sendMessage}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;

import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const socket = io("http://localhost:3000");

const ChatPage = ({ receiverId, roomId, receiverName }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  const senderId = user?.userId;

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      if (!roomId || !token) return;

      try {
        const response = await axios.get(`http://localhost:3000/api/messages/${roomId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Failed to fetch message history:", error);
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

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-screen w-full bg-[#e5ddd5] flex justify-center items-center">
      <div className="w-full max-w-4xl h-[95%] bg-[#f0f0f0] shadow-xl rounded-md flex flex-col">
        {/* Chat Header */}
        <div className="bg-[#075E54] text-white px-6 py-3 mt-5 flex items-center rounded-t-md">
          <div className="font-bold text-lg">{receiverName || "User"}</div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-chat-bg">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-[70%] px-4 py-2 rounded-xl text-sm relative ${
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
        <div className="flex items-center p-3 bg-white border-t border-gray-300 rounded-b-md">
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-3 px-4 py-2 bg-[#25D366] text-white rounded-full hover:bg-[#1DA85B] transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
