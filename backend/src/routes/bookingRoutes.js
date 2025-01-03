import express from 'express';
import { createBooking, getBookings, cancelBooking } from '../controllers/bookingController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, createBooking);

router.get('/', authenticate, getBookings);

router.delete('/:id', authenticate, cancelBooking);

export default router;
