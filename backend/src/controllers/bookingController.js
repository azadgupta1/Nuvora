import prisma from '../config/prismaClient.js';
import { io, onlineUsers } from '../server.js';
import sendEmail from '../services/emailService.js';


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

    const receiver = await prisma.user.findUnique({
      where: { id: parsedReceiverId },
    });

    if (receiver?.email) {
      const subject = "📬 New Booking Request on Nuvora";
      const htmlContent = `
        <h3>Hello ${receiver.name || 'there'},</h3>
        <p><strong>${booking.user.name}</strong> has requested a skill exchange session with you.</p>
        <p><strong>Offered:</strong> ${booking.skillOfferedName}</p>
        <p><strong>Wanted:</strong> ${booking.skillWantedName}</p>
        <p><strong>Date:</strong> ${booking.date.toDateString()}</p>
        <p><strong>Time:</strong> ${booking.time.toLocaleTimeString()}</p>
        ${booking.message ? `<p><strong>Message:</strong> ${booking.message}</p>` : ''}
        <br>
        <p>Please log in to your Nuvora account to view and respond to the request.</p>
        <p>— Nuvora Team</p>
      `;

      try {
        await sendEmail(receiver.email, subject, htmlContent);
      } catch (err) {
        console.error("❌ Failed to send email:", err);
      }
    }


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
        fromUser: {
          id: booking.user.id,
          name: booking.user.name,
          email: booking.user.email,
          profilePicture: booking.user.profilePicture,
        },
        skillOfferedName: booking.skillOfferedName,
        skillWantedName: booking.skillWantedName,
        date: booking.date.toISOString(),
        time: booking.time.toISOString(),
        message: booking.message,
        status: booking.status,
      });


      io.to(receiverSocketId).emit("newNotification", {
        type: "booking",
        content: `${booking.user.name} requested a booking: Offers ${booking.skillOfferedName} in exchange for ${booking.skillWantedName}`,
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
            include: {
              user: true,
              skill: {
                include: {
                  reviews: true,
                },
              },
            }, // Optionally include skill details
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
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                bio: true,
                profilePicture: true,
                location: true,
              },
            },
            skill: true, // keep as-is or use "select" if needed
          },
        });


        res.status(200).json({ message: "Bookings on your skills retrieved successfully!", bookings });
    } catch (error) {
        console.error("Error fetching booking requests:", error);
        res.status(500).json({ message: "Something went wrong while fetching booking requests!" });
    }
};


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

    console.log("Booking detail is : ", booking);

    // Create notification for requester
    await prisma.notification.create({
      data: {
        userId: booking.userId,
        type: "booking",
        content:
          status === "Confirmed"
            ? `Your booking for ${booking.skillOfferedName} has been confirmed!`
            : status === "Cancelled"
            ? `Your booking for ${booking.skillOfferedName} has been cancelled.`
            : `Booking status for ${booking.skillOfferedName} updated to ${status}.`,
      },
    });

    // ✅ Send email to the requester (booking.user)
      if (booking?.user?.email) {
        const subject =
          status === "Confirmed"
            ? "🎉 Your Booking Has Been Confirmed!"
            : status === "Cancelled"
            ? "❌ Your Booking Was Cancelled"
            : "📋 Booking Status Updated";

        const htmlContent = `
          <h3>Hello ${booking.user.name || 'there'},</h3>
          <p>Your booking for the skill <strong>${booking.skill.name}</strong> has been <strong>${status}</strong>.</p>
          <p><strong>Date:</strong> ${booking.date.toDateString()}</p>
          <p><strong>Time:</strong> ${booking.time.toLocaleTimeString()}</p>
          <br>
          <p>Please log in to your Nuvora account for more details.</p>
          <p>— Nuvora Team</p>
        `;

        try {
          await sendEmail(booking.user.email, subject, htmlContent);
        } catch (err) {
          console.error("❌ Failed to send status update email:", err);
        }
      }


    // Emit real-time update to the requester
    const requesterSocketId = onlineUsers.get(String(booking.userId));
    if (requesterSocketId) {
      io.to(requesterSocketId).emit('bookingStatusUpdated', {
        id: booking.id,
        status: booking.status,
        date: booking.date,
        time: booking.time,
        skill: {
          name: booking.skillOfferedName,
          category: booking.skill.category,
        },
      });


      // Emit new notification event
      io.to(requesterSocketId).emit('newNotification', {
        type: "booking",
        content:
          status === "Confirmed"
            ? `Your booking for ${booking.skillOfferedName} has been confirmed!`
            : status === "Cancelled"
            ? `Your booking for ${booking.skillOfferedName} has been cancelled.`
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
