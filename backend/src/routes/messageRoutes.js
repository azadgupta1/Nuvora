import express from 'express';
import { getMessagesByRoomId, createMessage } from '../controllers/messageController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to get message history for a room
router.get('/:roomId', authenticate, getMessagesByRoomId);
router.post('/', authenticate, createMessage);

export default router;
