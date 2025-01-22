import express from 'express';
import { getMessagesByRoomId } from '../controllers/messageController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to get message history for a room
router.get('/:roomId', authenticate, getMessagesByRoomId);

export default router;
