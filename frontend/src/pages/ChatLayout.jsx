// import { useEffect, useState } from "react";
// import axios from "axios";
// import ChatPage from "./ChatPage"; // your existing ChatPage component

// const ChatLayout = () => {
//   const [rooms, setRooms] = useState([]);
//   const [activeRoom, setActiveRoom] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) return;
//     const fetchRooms = async () => {
//       const res = await axios.get("http://localhost:3000/api/chatrooms/rooms", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setRooms(res.data);
//     };
//     fetchRooms();
//   }, []);

//   return (
//     <div className="flex min-h-screen">
//       {/* Left: Chat User List */}
//       <div className="w-1/3 border-r bg-white p-4 overflow-y-auto">
//         <h2 className="text-lg font-bold mb-4">Chats</h2>
//         {rooms.map((room) => (
//           <div
//             key={room.roomId}
//             className={`cursor-pointer p-3 rounded hover:bg-gray-100 ${
//               activeRoom?.roomId === room.roomId ? "bg-blue-100" : ""
//             }`}
//             onClick={() => setActiveRoom(room)}
//           >
//             <div className="flex items-center gap-2">
//               <img
//                 src={room.user.profilePicture || "/default.png"}
//                 alt={room.user.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="font-medium">{room.user.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right: Chat Messages */}
//       <div className="w-2/3 bg-gray-50 p-4">
//         {activeRoom ? (
//           <ChatPage
//             receiverId={activeRoom.user.id}
//             roomId={activeRoom.roomId}
//             receiverName={activeRoom.user.name}
//           />
//         ) : (
//           <div className="h-full flex items-center justify-center text-gray-500">
//             Select a chat to start messaging
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChatLayout;

import { useEffect, useState } from "react";
import axios from "axios";
import ChatPage from "./ChatPage";
import { FiSearch, FiMoreVertical } from "react-icons/fi";

const ChatLayout = () => {
  const [rooms, setRooms] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/chatrooms/rooms", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setRooms(res.data);
      } catch (err) {
        console.error("Error fetching rooms:", err);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="h-screen w-screen flex bg-[#e5ddd5] overflow-hidden">
      {/* Sidebar */}
      <div className="w-[30%] bg-white flex flex-col border-r border-gray-300">
        {/* Header */}
        <div className="bg-[#075E54] text-white px-4 py-3 flex items-center justify-between sticky top-0 z-10">
          <span className="text-xl font-semibold">Chats</span>
          <div className="flex items-center gap-4 text-xl">
            <FiSearch className="cursor-pointer hover:opacity-80" />
            <FiMoreVertical className="cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Chat Room List */}
        <div className="flex-1 overflow-y-auto">
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <div
                key={room.roomId}
                onClick={() => setActiveRoom(room)}
                className={`cursor-pointer px-4 py-3 flex items-center gap-3 hover:bg-[#f5f5f5] transition ${
                  activeRoom?.roomId === room.roomId ? "bg-[#e1f3fb]" : ""
                }`}
              >
                <img
                  src={room.user.profilePicture || "/default.png"}
                  alt={room.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900 text-sm">{room.user.name}</span>
                  <span className="text-xs text-gray-500">Tap to chat</span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-500 text-sm">No chats available</div>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="w-[70%] bg-[#f0f0f0] flex flex-col">
        {activeRoom ? (
          <ChatPage
            receiverId={activeRoom.user.id}
            roomId={activeRoom.roomId}
            receiverName={activeRoom.user.name}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-600 text-lg">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatLayout;
