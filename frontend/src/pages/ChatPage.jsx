// ChatPage.jsx
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { jwtDecode } from "jwt-decode";

const socket = io("http://localhost:3000"); // backend WebSocket

const ChatPage = () => {
  const location = useLocation();
  const { receiverId } = location.state || {};
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  const senderId = user?.userId;

  useEffect(() => {
    if (!senderId || !receiverId) return;

    socket.emit("join", { senderId, receiverId });

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [senderId, receiverId]);

  const sendMessage = () => {
    if (!message.trim()) return;
    const msgData = {
      senderId,
      receiverId,
      message,
    };
    socket.emit("sendMessage", msgData);
    setMessages((prev) => [...prev, msgData]);
    setMessage("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="w-full max-w-xl bg-white rounded shadow p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
          Chat with Skill Provider
        </h2>

        <div className="flex-1 overflow-y-auto max-h-[400px] mb-4 px-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`my-2 p-2 rounded-md text-white w-fit ${
                msg.senderId === senderId ? "bg-blue-500 self-end ml-auto" : "bg-gray-500 self-start mr-auto"
              }`}
            >
              {msg.message}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Type your message"
            className="flex-1 border rounded px-4 py-2 mr-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
