import prisma from '../config/prismaClient.js';

export const getUserById = async (req, res) => {
  const { receiverId } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(receiverId) },
      select: {
        name: true,
        id: true,
        profilePicture: true, // Optional: if you want to show their profile picture
        bio: true, 
        skill: true,
        email: true
      }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error" });
  }
};



// import prisma from '../config/prismaClient.js';

// export const getUserById = async (req, res) => {
//   const { receiverId } = req.params;

//   try {
//     const user = await prisma.user.findUnique({
//       where: { id: parseInt(receiverId) },
//       include: {

//         skill: true,
//         bookingsSent: true,
//         bookingsReceived: true,
//         reviews: true,
        
//       }
//     });

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user);
//   } catch (error) {
//     console.error("Error fetching user:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
