import prisma from '../config/prismaClient.js';

// export const createBooking = async (req, res) => {
//     const { skillId, date, time } = req.body;
//     const userId = req.user.userId; // Assuming userId is extracted from the token.

//     try {
//         const bookingTime = new Date(`${date}T${time}`);

//         if (isNaN(bookingTime.getTime())) {
//             return res.status(400).json({ message: "Invalid time format!" });
//         }

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


export const createBooking = async (req, res) => {
    const { skillId, date, time } = req.body;
    const userId = req.user.userId; // Assuming userId is extracted from the token.

    try {
        const bookingTime = new Date(`${date}T${time}`);

        if (isNaN(bookingTime.getTime())) {
            return res.status(400).json({ message: "Invalid time format!" });
        }

        // Check for duplicate booking
        const existingBooking = await prisma.booking.findFirst({
            where: {
                userId,
                skillId,
                date: new Date(date),
                time: bookingTime,
            },
        });

        if (existingBooking) {
            return res.status(400).json({ message: "You already have a booking for this skill at the specified time." });
        }

        // Create the booking
        const booking = await prisma.booking.create({
            data: {
                userId,
                skillId,
                date: new Date(date),
                time: bookingTime,
                status: "Pending",
            },
        });

        res.status(201).json({ message: "Booking created successfully!", booking });
    } catch (error) {
        console.error(error);
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
