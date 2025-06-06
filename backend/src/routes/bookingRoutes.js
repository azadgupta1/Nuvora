import express from 'express';
import { createBooking, getBookings, cancelBooking, getRequestsOnMySkills, updateBookingStatus } from '../controllers/bookingController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, createBooking);

router.get('/', authenticate, getBookings);

router.delete('/:id', authenticate, cancelBooking);

router.get('/received', authenticate, getRequestsOnMySkills);

// PATCH /api/bookings/:id/status
router.patch('/:id/status', authenticate, updateBookingStatus);


export default router;
