// src/pages/Chat.jsx
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const Chat = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const bottomRef = useRef(null);
  const currentUserId = JSON.parse(localStorage.getItem("user"))?.id;

  useEffect(() => {
    socket.emit("joinRoom", roomId);

    fetch(`http://localhost:3000/api/messages/${roomId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));

    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receiveMessage");
  }, [roomId]);

  const sendMessage = () => {
    if (newMsg.trim() === "") return;

    socket.emit("sendMessage", {
      roomId,
      senderId: currentUserId,
      receiverId: null, // You can pass the other user's ID if needed
      message: newMsg,
    });

    setNewMsg("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-2xl mx-auto h-[80vh] flex flex-col border rounded-lg shadow-lg p-4 mt-8">
      <h2 className="text-xl font-bold mb-2">Chat Room #{roomId}</h2>
      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md max-w-[75%] ${
              msg.senderId === currentUserId
                ? "bg-green-100 self-end text-right"
                : "bg-gray-100 self-start"
            }`}
          >
            <p className="text-sm">{msg.message}</p>
            <p className="text-xs text-gray-500">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </p>
          </div>
        ))}
        <div ref={bottomRef}></div>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
