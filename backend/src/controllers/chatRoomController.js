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
      return res.status(400).json({ message: 'Chat room already exists' });
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
