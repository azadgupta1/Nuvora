import prisma from '../config/prismaClient.js';

// Create a new chat room between two users
export const createChatRoom = async (req, res) => {
  const { user1Id, user2Id } = req.body; // Pass user1Id and user2Id in the body

  try {
    const existingRoom = await prisma.chatRoom.findFirst({
      where: {
        OR: [
          { user1Id, user2Id },
          { user1Id: user2Id, user2Id: user1Id },
        ],
      },
    });

    if (existingRoom) {
      return res.status(200).json(existingRoom); // ✅ Just return the room
    }
    

    const newRoom = await prisma.chatRoom.create({
      data: {
        user1Id,
        user2Id,
      },
    });

    res.status(201).json(newRoom);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating chat room' });
  }
};


export const getUserChatRooms = async (req, res) => {
  const { userId } = req.params;

  try {
    const rooms = await prisma.chatRoom.findMany({
      where: {
        OR: [
          { user1Id: parseInt(userId) },
          { user2Id: parseInt(userId) },
        ],
      },
      include: {
        messages: {
          orderBy: { timestamp: 'desc' },
          take: 1, // Only last message
        },
        user1: true,
        user2: true,
      },
    });

    res.status(200).json(rooms);
  } catch (error) {
    console.error("Error fetching chat rooms:", error);
    res.status(500).json({ message: "Failed to fetch chat rooms" });
  }
};


export const getChatRooms = async (req, res) => {
  const userId = Number(req.user?.userId);

  try {
    const rooms = await prisma.chatRoom.findMany({
      where: {
        OR: [{ user1Id: userId }, { user2Id: userId }],
      },
      include: {
        user1: true,
        user2: true,
        messages: {
          orderBy: { timestamp: 'desc' },
          take: 1, // 🆕 get latest message only
        },
      },
    });

    const formattedRooms = rooms.map((room) => {
      const otherUser = room.user1Id === userId ? room.user2 : room.user1;
      const lastMessage = room.messages[0];

      return {
        roomId: room.id,
        user: {
          id: otherUser.id,
          name: otherUser.name,
          profilePicture: otherUser.profilePicture,
        },
        lastMessageTime: lastMessage?.timestamp || null,
        lastMessageText: lastMessage?.message || "",
      };
    });

    // ✅ Sort by most recent message
    formattedRooms.sort((a, b) => {
      return new Date(b.lastMessageTime || 0) - new Date(a.lastMessageTime || 0);
    });

    res.json(formattedRooms);
  } catch (err) {
    console.error("❌ Failed to fetch chat rooms:", err);
    res.status(500).json({ message: "Failed to load chat rooms" });
  }
};
