import prisma from '../config/prismaClient.js';

// this need to be reviewed again

// import prisma from '../config/primsaClient.js';
// export const createBooking = async (req, res) => {
//     const { skillId, date, time } = req.body;
//     const userId = req.user.userId; // Assuming userId is extracted from the token.

//     try {
//         const bookingTime = new Date(`${date}T${time}`);

//         if (isNaN(bookingTime.getTime())) {
//             return res.status(400).json({ message: "Invalid time format!" });
//         }

//         // Check for duplicate booking
//         const existingBooking = await prisma.booking.findFirst({
//             where: {
//                 userId,
//                 skillId,
//                 date: new Date(date),
//                 time: bookingTime,
//             },
//         });

//         if (existingBooking) {
//             return res.status(400).json({ message: "You already have a booking for this skill at the specified time." });
//         }

//         // Create the booking
//         const booking = await prisma.booking.create({
//             data: {
//                 userId,
//                 skillId,
//                 date: new Date(date),
//                 time: bookingTime,
//                 status: "Pending",
//             },
//         });

//         res.status(201).json({ message: "Booking created successfully!", booking });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Something went wrong!" });
//     }
// };


// export const createBooking = async (req, res) => {
//     const { skillId, date, time } = req.body;
//     const userId = req.user.userId; // Extract userId from the token.

//     try {
//         const bookingTime = new Date(`${date}T${time}`);

//         if (isNaN(bookingTime.getTime())) {
//             return res.status(400).json({ message: "Invalid time format!" });
//         }

//         // 🛠 Convert skillId to an integer
//         const parsedSkillId = parseInt(skillId, 10);
//         if (isNaN(parsedSkillId)) {
//             return res.status(400).json({ message: "Invalid skillId. Must be a number." });
//         }

//         // Check for duplicate booking
//         const existingBooking = await prisma.booking.findFirst({
//             where: {
//                 userId,
//                 skillId: parsedSkillId, // ✅ Use the parsed integer
//                 date: new Date(date),
//                 time: bookingTime,
//             },
//         });

//         if (existingBooking) {
//             return res.status(400).json({ message: "You already have a booking for this skill at the specified time." });
//         }

//         // Create the booking
//         const booking = await prisma.booking.create({
//             data: {
//                 userId,
//                 skillId: parsedSkillId, // ✅ Use the parsed integer
//                 date: new Date(date),
//                 time: bookingTime,
//                 status: "Pending",
//             },
//         });

//         res.status(201).json({ message: "Booking created successfully!", booking });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Something went wrong!" });
//     }
// };



// export const createBooking = async (req, res) => {
//     const { skillId, date, time, receiverId, skillOfferedName, skillWantedName, message } = req.body;
//     const userId = req.user.userId; // Extract userId from the token

//     try {
//         // Validate time
//         const bookingTime = new Date(`${date}T${time}`);
//         if (isNaN(bookingTime.getTime())) {
//             return res.status(400).json({ message: "Invalid time format!" });
//         }

//         // Validate skillId
//         const parsedSkillId = parseInt(skillId, 10);
//         if (isNaN(parsedSkillId)) {
//             return res.status(400).json({ message: "Invalid skillId. Must be a number." });
//         }

//         // Validate receiverId
//         const parsedReceiverId = parseInt(receiverId, 10);
//         if (isNaN(parsedReceiverId)) {
//             return res.status(400).json({ message: "Invalid receiverId. Must be a number." });
//         }

//         // Validate skillOfferedName & skillWantedName
//         if (!skillOfferedName || !skillWantedName) {
//             return res.status(400).json({ message: "Both skillOfferedName and skillWantedName are required." });
//         }

//         // Check for duplicate booking
//         const existingBooking = await prisma.booking.findFirst({
//             where: {
//                 userId,
//                 skillId: parsedSkillId,
//                 date: new Date(date),
//                 time: bookingTime,
//             },
//         });

//         if (existingBooking) {
//             return res.status(400).json({ message: "You already have a booking for this skill at the specified time." });
//         }

//         // Create booking
//         const booking = await prisma.booking.create({
//             data: {
//                 userId,
//                 receiverId: parsedReceiverId,
//                 skillId: parsedSkillId,
//                 date: new Date(date),
//                 time: bookingTime,
//                 status: "Pending",
//                 skillOfferedName,
//                 skillWantedName,
//                 message: message || null,
//             },
//         });

//         res.status(201).json({ message: "Booking created successfully!", booking });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Something went wrong!" });
//     }
// };

// import { io, onlineUsers } from '../server.js';

// export const createBooking = async (req, res) => {
//   const { skillId, date, time, receiverId, skillOfferedName, skillWantedName, message } = req.body;
//   const userId = req.user.userId;

//   try {
//     const bookingTime = new Date(`${date}T${time}`);
//     if (isNaN(bookingTime.getTime())) {
//       return res.status(400).json({ message: "Invalid time format!" });
//     }

//     const parsedSkillId = parseInt(skillId, 10);
//     const parsedReceiverId = parseInt(receiverId, 10);
//     if (isNaN(parsedSkillId) || isNaN(parsedReceiverId)) {
//       return res.status(400).json({ message: "Invalid skillId or receiverId" });
//     }

//     if (!skillOfferedName || !skillWantedName) {
//       return res.status(400).json({ message: "Both skillOfferedName and skillWantedName are required." });
//     }

//     const existingBooking = await prisma.booking.findFirst({
//       where: {
//         userId,
//         skillId: parsedSkillId,
//         date: new Date(date),
//         time: bookingTime,
//       },
//     });

//     if (existingBooking) {
//       return res.status(400).json({ message: "You already have a booking for this skill at the specified time." });
//     }

//     const booking = await prisma.booking.create({
//       data: {
//         userId,
//         receiverId: parsedReceiverId,
//         skillId: parsedSkillId,
//         date: new Date(date),
//         time: bookingTime,
//         status: "Pending",
//         skillOfferedName,
//         skillWantedName,
//         message: message || null,
//       },
//       include: {
//         user: true,
//         skill: true,
//       }
//     });

//     // ✅ Real-time notification to the receiver
//     const receiverSocketId = onlineUsers.get(String(receiverId));
//     if (receiverSocketId) {
//       io.to(receiverSocketId).emit("newBookingRequest", booking);
//     }

//     res.status(201).json({ message: "Booking created successfully!", booking });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// };






// import { io, onlineUsers } from '../server.js';

// export const createBooking = async (req, res) => {
//   // Ensure user is authenticated
//   if (!req.user || !req.user.userId) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   const { skillId, date, time, receiverId, skillOfferedName, skillWantedName, message } = req.body;
//   const userId = req.user.userId;

//   try {
//     // Validate booking time
//     const bookingTime = new Date(`${date}T${time}`);
//     if (isNaN(bookingTime.getTime())) {
//       return res.status(400).json({ message: "Invalid time format!" });
//     }

//     const parsedSkillId = parseInt(skillId, 10);
//     const parsedReceiverId = parseInt(receiverId, 10);

//     if (isNaN(parsedSkillId) || isNaN(parsedReceiverId)) {
//       return res.status(400).json({ message: "Invalid skillId or receiverId" });
//     }

//     if (!skillOfferedName || !skillWantedName) {
//       return res.status(400).json({ message: "Both skillOfferedName and skillWantedName are required." });
//     }

//     // Check for duplicate bookings
//     const existingBooking = await prisma.booking.findFirst({
//       where: {
//         userId,
//         skillId: parsedSkillId,
//         date: new Date(date),
//         time: bookingTime,
//       },
//     });

//     if (existingBooking) {
//       return res.status(400).json({ message: "You already have a booking for this skill at the specified time." });
//     }

//     // Create booking
//     const booking = await prisma.booking.create({
//       data: {
//         userId,
//         receiverId: parsedReceiverId,
//         skillId: parsedSkillId,
//         date: new Date(date),
//         time: bookingTime,
//         status: "Pending",
//         skillOfferedName,
//         skillWantedName,
//         message: message || null,
//       },
//       include: {
//         user: true,
//         skill: true,
//       },
//     });

//     // Real-time notification to receiver
//     const receiverSocketId = onlineUsers.get(String(receiverId));
//     if (receiverSocketId) {
//       io.to(receiverSocketId).emit("newBookingRequest", {
//         bookingId: booking.id,
//         fromUser: booking.user.name,
//         skillName: booking.skill.name,
//         date: booking.date,
//         time: booking.time,
//         message: booking.message,
//         status: booking.status,
//       });
//     }

//     // Send response
//     res.status(201).json({ message: "Booking created successfully!", booking });

//   } catch (error) {
//     console.error("❌ Booking creation error:", error);
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// };


import { io, onlineUsers } from '../server.js';

export const createBooking = async (req, res) => {
  if (!req.user || !req.user.userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const {
    skillId,
    date,
    time,
    receiverId,
    skillOfferedName,
    skillWantedName,
    message,
  } = req.body;

  const userId = req.user.userId;

  try {
    const bookingTime = new Date(`${date}T${time}`);
    if (isNaN(bookingTime.getTime())) {
      return res.status(400).json({ message: "Invalid time format!" });
    }

    const parsedSkillId = parseInt(skillId, 10);
    const parsedReceiverId = parseInt(receiverId, 10);

    if (isNaN(parsedSkillId) || isNaN(parsedReceiverId)) {
      return res.status(400).json({ message: "Invalid skillId or receiverId" });
    }

    if (!skillOfferedName || !skillWantedName) {
      return res.status(400).json({
        message: "Both skillOfferedName and skillWantedName are required.",
      });
    }

    const existingBooking = await prisma.booking.findFirst({
      where: {
        userId,
        skillId: parsedSkillId,
        date: new Date(date),
        time: bookingTime,
      },
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "You already have a booking for this skill at the specified time.",
      });
    }

    const booking = await prisma.booking.create({
      data: {
        userId,
        receiverId: parsedReceiverId,
        skillId: parsedSkillId,
        date: new Date(date),
        time: bookingTime,
        status: "Pending",
        skillOfferedName,
        skillWantedName,
        message: message || null,
      },
      include: {
        user: true,
        skill: true,
      },
    });

    // ✅ Create notification in DB
    await prisma.notification.create({
      data: {
        userId: parsedReceiverId,
        type: "booking",
        content: `${booking.user.name} requested a booking for ${booking.skillOfferedName} in exchange for ${booking.skillWantedName}`,
      },
    });

    console.log("Booking skill: ", booking.skillOfferedName);



    // ✅ Send socket notification
    const receiverSocketId = onlineUsers.get(String(receiverId));
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newBookingRequest", {
        bookingId: booking.id,
        fromUser: booking.user.name,
        skillName: booking.skillOfferedName,
        date: booking.date,
        time: booking.time,
        message: booking.message,
        status: booking.status,
      });

      // Optional: emit real-time notification event
      io.to(receiverSocketId).emit("newNotification", {
        type: "booking",
        content: `${booking.user.name} requested a booking for ${booking.skill.name}`,
        timestamp: new Date().toISOString(),
      });
    }

    res.status(201).json({ message: "Booking created successfully!", booking });
  } catch (error) {
    console.error("❌ Booking creation error:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};









  
  

export const getBookings = async (req, res) => {
    const userId = req.user.userId;

    try {
        const bookings = await prisma.booking.findMany({
            where: { userId },
            include: { skill: true }, // Optionally include skill details
        });

        res.status(200).json({ message: "Bookings retrieved successfully!", bookings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
};


export const cancelBooking = async (req, res) => {
    const bookingId = parseInt(req.params.id, 10); // Extract booking ID from the request parameters
    const userId = req.user.userId; // Extract user ID from the authenticated user token

    try {
        // Check if the booking exists
        const booking = await prisma.booking.findUnique({
            where: { id: bookingId },
        });

        if (!booking) {
            return res.status(404).json({ message: "Booking not found!" });
        }

        // Verify that the booking belongs to the authenticated user
        if (booking.userId !== userId) {
            return res.status(403).json({ message: "You can only cancel your own bookings!" });
        }

        // Cancel the booking by updating its status
        await prisma.booking.update({
            where: { id: bookingId },
            data: { status: "Cancelled" },
        });

        res.status(200).json({ message: "Booking cancelled successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong while cancelling the booking!" });
    }
};


export const getRequestsOnMySkills = async (req, res) => {
    const userId = req.user.userId; // Current logged-in user (skill owner)

    try {
        // Step 1: Find all skills offered by the user
        const mySkills = await prisma.skill.findMany({
            where: { userId },
            select: { id: true }, // Only need skill IDs
        });

        const mySkillIds = mySkills.map(skill => skill.id);

        if (mySkillIds.length === 0) {
            return res.status(200).json({ message: "You haven't offered any skills yet.", bookings: [] });
        }

        // Step 2: Find all bookings made on these skills
        const bookings = await prisma.booking.findMany({
            where: {
                skillId: { in: mySkillIds },
            },
            include: {
                user: true,   // Includes who made the booking
                skill: true,  // Includes skill info
            },
        });

        res.status(200).json({ message: "Bookings on your skills retrieved successfully!", bookings });
    } catch (error) {
        console.error("Error fetching booking requests:", error);
        res.status(500).json({ message: "Something went wrong while fetching booking requests!" });
    }
};


// export const updateBookingStatus = async (req, res) => {
//   const bookingId = parseInt(req.params.id);
//   const { status } = req.body;

//   if (!['Pending', 'Confirmed', 'Cancelled'].includes(status)) {
//     return res.status(400).json({ message: "Invalid status" });
//   }

//   try {
//     const booking = await prisma.booking.update({
//       where: { id: bookingId },
//       data: { status }
//     });

//     res.status(200).json({ message: "Booking status updated", booking });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to update booking status" });
//   }
// };




// export const updateBookingStatus = async (req, res) => {
//   const bookingId = parseInt(req.params.id);
//   const { status } = req.body;

//   if (!['Pending', 'Confirmed', 'Cancelled'].includes(status)) {
//     return res.status(400).json({ message: "Invalid status" });
//   }

//   try {
//     // Update booking and fetch associated data
//     const booking = await prisma.booking.update({
//       where: { id: bookingId },
//       data: { status },
//       include: {
//         user: true,   // the requester
//         skill: true,  // skill details
//       },
//     });

//     // Emit real-time update to the requester
//     const requesterSocketId = onlineUsers.get(String(booking.userId));
//     if (requesterSocketId) {
//       io.to(requesterSocketId).emit('bookingStatusUpdated', {
//         id: booking.id,
//         status: booking.status,
//         date: booking.date,
//         time: booking.time,
//         skill: {
//           name: booking.skill.name,
//           category: booking.skill.category,
//         },
//       });
//     }

//     res.status(200).json({ message: "Booking status updated", booking });
//   } catch (error) {
//     console.error("❌ Failed to update booking status:", error);
//     res.status(500).json({ message: "Failed to update booking status" });
//   }
// };



export const updateBookingStatus = async (req, res) => {
  const bookingId = parseInt(req.params.id);
  const { status } = req.body;

  if (!['Pending', 'Confirmed', 'Cancelled'].includes(status)) {
    return res.status(400).json({ message: "Invalid status" });
  }

  try {
    // Update booking and fetch associated data
    const booking = await prisma.booking.update({
      where: { id: bookingId },
      data: { status },
      include: {
        user: true,   // requester
        skill: true,  // skill details
      },
    });

    // Create notification for requester
    await prisma.notification.create({
      data: {
        userId: booking.userId,
        type: "booking",
        content:
          status === "Confirmed"
            ? `Your booking for ${booking.skill.name} has been confirmed!`
            : status === "Cancelled"
            ? `Your booking for ${booking.skill.name} has been cancelled.`
            : `Booking status for ${booking.skill.name} updated to ${status}.`,
      },
    });

    // Emit real-time update to the requester
    const requesterSocketId = onlineUsers.get(String(booking.userId));
    if (requesterSocketId) {
      io.to(requesterSocketId).emit('bookingStatusUpdated', {
        id: booking.id,
        status: booking.status,
        date: booking.date,
        time: booking.time,
        skill: {
          name: booking.skill.name,
          category: booking.skill.category,
        },
      });

      // Emit new notification event
      io.to(requesterSocketId).emit('newNotification', {
        type: "booking",
        content:
          status === "Confirmed"
            ? `Your booking for ${booking.skill.name} has been confirmed!`
            : status === "Cancelled"
            ? `Your booking for ${booking.skill.name} has been cancelled.`
            : `Booking status for ${booking.skill.name} updated to ${status}.`,
        timestamp: new Date().toISOString(),
      });
    }

    res.status(200).json({ message: "Booking status updated", booking });
  } catch (error) {
    console.error("❌ Failed to update booking status:", error);
    res.status(500).json({ message: "Failed to update booking status" });
  }
};
