import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // or wherever your backend runs

const ChatRoom = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const token = localStorage.getItem("token");
  const currentUserId = JSON.parse(atob(token.split('.')[1])).userId;

  useEffect(() => {
    socket.emit("joinRoom", roomId);

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [roomId]);

  useEffect(() => {
    // Fetch existing messages
    const fetchMessages = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/messages/${roomId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [roomId]);

  const sendMessage = () => {
    if (!input) return;

    socket.emit("sendMessage", {
      roomId,
      senderId: currentUserId,
      message: input,
    });

    setInput("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Chat Room</h2>
      <div className="border h-96 overflow-y-auto p-3 rounded bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${
              msg.senderId === currentUserId ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block px-3 py-2 rounded ${
                msg.senderId === currentUserId
                  ? "bg-green-200"
                  : "bg-gray-200"
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="mt-3 flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
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

export default ChatRoom;
