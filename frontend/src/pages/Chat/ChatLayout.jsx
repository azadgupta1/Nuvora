import { useEffect, useState } from "react";
import axios from "axios";
import ChatPage from "./ChatPage";
import { FiSearch } from "react-icons/fi";
import { BiCheckDouble } from "react-icons/bi";
import { jwtDecode } from "jwt-decode";
import socket from "../../socket";
import { useLocation } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const ChatLayout = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  const userId = user?.userId;

  const location = useLocation();

  const formatLastMessageTime = (timestamp) => {
    if (!timestamp) return "";

    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    const oneDay = 1000 * 60 * 60 * 24;

    const isToday = date.toDateString() === now.toDateString();
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    if (isToday) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (isYesterday) {
      return "Yesterday";
    } else if (diff <= 7 * oneDay) {
      return date.toLocaleDateString(undefined, { weekday: "long" }); // Monday, Tuesday
    } else {
      return date.toLocaleDateString(); // 8/21/2025
    }
  };

  useEffect(() => {
    if (!token || !user) return;

    const fetchRooms = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/chatrooms/rooms`, {
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

    socket.on("receiveMessage", (newMessage) => {
      setRooms((prevRooms) => {
        const updatedRooms = prevRooms.map((room) => {
          if (room.roomId === newMessage.roomId) {
            return {
              ...room,
              lastMessageText: newMessage.message,
              lastMessageTime: newMessage.timestamp,
              lastSenderId: newMessage.senderId,
            };
          }
          return room;
        });

        const sorted = updatedRooms.sort((a, b) => {
          return new Date(b.lastMessageTime || 0) - new Date(a.lastMessageTime || 0);
        });

        setFilteredRooms(sorted);
        return sorted;
      });
    });

    return () => {
      socket.off("updateOnlineUsers");
      socket.off("receiveMessage");
    };
  }, [token]);

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

  const isUserOnline = (id) => onlineUsers.includes(String(id));

  useEffect(() => {
    if (
      location.state?.roomId &&
      location.state?.receiverId &&
      location.state?.receiverName
    ) {
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

  const handleBack = () => {
    setActiveRoom(null);
  };

  // const profileSrc = `${backendUrl}${rooms.user.profilePicture}`;
  // console.log('Profile image src:', profileSrc);

  // console.log("Rooms are : ", rooms);

  




  return (
    // <div className="min-h-screen bg-gray-100 pt-5 sm:px-10 pb-6">
    // [calc(100vh-5rem)]
    // New (fixed height layout)
    <div className="h-full bg-[#F9F7F1] pt-0 sm:pt-5 sm:px-10 pb-0 overflow-hidden">

      <div className="h-full bg-white rounded-sm shadow-lg overflow-hidden flex flex-col sm:flex-row">
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

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                


                <div
                  key={room.roomId}
                  onClick={() => setActiveRoom(room)}
                  className={`cursor-pointer px-4 py-4 flex items-center border-b border-gray-200 justify-between transition ${
                    activeRoom?.roomId === room.roomId
                      ? "bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="relative">
                      <img
                        src={room.user.profilePicture}
                        alt={room.user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {isUserOnline(room.user.id) && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                      )}
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-medium text-sm text-gray-800 truncate">
                        {room.user.name}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] text-gray-500 truncate">
                        {/* Show double tick if last message is from me */}
                        {room.lastSenderId === userId && (
                          <BiCheckDouble size={14} className="text-gray-500" />
                        )}
                        <span className="truncate text-sm">
                          {room.lastMessageText ||
                            (isUserOnline(room.user.id) ? "Online" : "Offline")}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[12px] text-gray-600 ml-2 whitespace-nowrap">
                    {formatLastMessageTime(room.lastMessageTime)}
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
          className={`flex-1 bg-white flex flex-col overflow-hidden transition-all duration-300 ${
            activeRoom ? "flex" : "hidden sm:flex"
          }`}
        >
          {activeRoom ? (
            <ChatPage
              receiverId={activeRoom.user.id}
              roomId={activeRoom.roomId}
              receiverName={activeRoom.user.name}
              isReceiverOnline={isUserOnline(activeRoom.user.id)}
              onBack={handleBack}
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