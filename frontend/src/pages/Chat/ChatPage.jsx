import { useEffect, useRef, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { FiImage, FiSend, FiArrowLeft } from "react-icons/fi"; // Added back icon
import BGG_Chat from "../../assets/BGG_Chat.jpg";
import socket from "../../socket";
import { BiCheckDouble } from "react-icons/bi";

const backendUrl = import.meta.env.VITE_BACKEND_URL;


const ChatPage = ({ receiverId, roomId, receiverName, isReceiverOnline, onBack }) => {
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  const [receiver, setReceiver] = useState("");

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  const senderId = user?.userId;

  const formatDateHeader = (dateStr) => {
    const msgDate = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const isSameDay = (d1, d2) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    if (isSameDay(msgDate, today)) return "Today";
    if (isSameDay(msgDate, yesterday)) return "Yesterday";

    return msgDate.toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    const fetchMessages = async () => {
      if (!roomId || !token) return;
      try {
        const res = await axios.get(
          `${backendUrl}/api/messages/${roomId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setMessages(res.data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      }
    };
    fetchMessages();
  }, [roomId, token]);

  useEffect(() => {
    const fetchReceiverData = async () =>{
      if(!receiverId || !token) return;

      try{
        const res = await axios.get(
           `${backendUrl}/api/users/${receiverId}`,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        setReceiver(res.data);

      } catch (err){
        console.error("Failed to fetch Receiver Data: ", err);
      }
    }

    fetchReceiverData();
  },  [receiverId, token]);

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

  const handleSend = () => {
    if (!message.trim() && !imageFile) return;

    const msgData = {
      senderId,
      receiverId,
      roomId,
      message,
      image: imageFile ? URL.createObjectURL(imageFile) : null,
      timestamp: new Date().toISOString(),
    };

    socket.emit("sendMessage", msgData);

    setMessage("");
    setImageFile(null);
  };

  const groupedMessages = [];
  let lastDate = null;

  messages.forEach((msg) => {
    const msgDate = new Date(msg.timestamp);
    const msgDateStr = msgDate.toDateString();

    if (msgDateStr !== lastDate) {
      groupedMessages.push({
        type: "date",
        dateLabel: formatDateHeader(msg.timestamp),
      });
      lastDate = msgDateStr;
    }
    groupedMessages.push({ type: "message", ...msg });
  });

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 text-gray-900 px-4 py-3 flex items-center gap-3 shadow border-b border-gray-200">
        {/* Back button for mobile */}
        <button
          onClick={onBack}
          className="sm:hidden text-gray-600 hover:text-gray-800 transition"
        >
          <FiArrowLeft size={20} />
        </button>

        <img
          src={receiver.profilePicture}
          alt={receiverName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold text-sm">{receiverName || "User"}</h2>
          <span className={`text-xs ${isReceiverOnline ? "text-green-600" : "text-gray-400"}`}>
            {isReceiverOnline ? "Active now" : "Offline"}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-4 py-3 space-y-3"
        style={{
          backgroundImage: `url(${BGG_Chat})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      >
        {groupedMessages.map((item, idx) =>
          item.type === "date" ? (
            <div key={`date-${idx}`} className="text-center text-xs text-gray-600 my-2">
              <span className="bg-gray-200 px-3 py-1 rounded-full">{item.dateLabel}</span>
            </div>
          ) : (
            <div
              key={idx}
              className={`w-fit max-w-[80%] px-4 py-2 rounded-xl shadow text-sm relative ${
                item.senderId === senderId
                  ? "bg-green-200 ml-auto text-right"
                  : "bg-white mr-auto text-left"
              }`}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt="attachment"
                  className="w-full rounded-md mb-2"
                />
              )}
              {item.message && <p className="break-words">{item.message}</p>}

              <span className={`mt-1 text-[10px] text-gray-500 flex items-center gap-1 ${item.senderId === senderId ? 'justify-end' : 'justify-start'}`}>
                {new Date(item.timestamp || Date.now()).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {item.senderId === senderId && (
                  <BiCheckDouble size={12} className="text-gray-600" />
                )}
              </span>

            </div>
          )
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-3 py-2 bg-white border-t border-gray-200 flex items-center gap-2">
        <label className="cursor-pointer text-gray-500 hover:text-gray-700">
          <FiImage size={22} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
        </label>

        {imageFile && (
          <div className="bg-gray-100 p-1 rounded-md">
            <img
              src={URL.createObjectURL(imageFile)}
              alt="preview"
              className="w-12 h-12 rounded object-cover"
            />
          </div>
        )}

        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 rounded-full text-sm bg-gray-100 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />

        <button
          onClick={handleSend}
          className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          <FiSend size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
