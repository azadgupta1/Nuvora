import prisma from '../config/prismaClient.js';

// Get message history by room ID
export const getMessagesByRoomId = async (req, res) => {
  const { roomId } = req.params;

  try {
    const messages = await prisma.message.findMany({
      where: { roomId: parseInt(roomId) },
      orderBy: { timestamp: 'asc' },
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching messages' });
  }
};

export const createMessage = async (req, res) => {
  const { roomId, senderId, receiverId, content } = req.body;

  try{
      const message = await prisma.message.create({
        data: {
          roomId: parseInt(roomId),
          senderId,
          receiverId,
          message: content, // ✅ use 'content' correctly here
          timestamp: new Date(),
        },
      });


    res.status(201).json(message);
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};
