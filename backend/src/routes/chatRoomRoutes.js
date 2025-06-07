import express from 'express';
import { createChatRoom, getUserChatRooms, getChatRooms } from '../controllers/chatRoomController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to create a new chat room between two users
router.post('/', authenticate, createChatRoom);
router.get("/rooms", authenticate, getChatRooms);
router.get('/:userId', authenticate, getUserChatRooms);


export default router;
