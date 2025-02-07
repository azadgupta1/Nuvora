import express from 'express';
import { createChatRoom } from '../controllers/chatRoomController.js';

const router = express.Router();

// Route to create a new chat room between two users
router.post('/', createChatRoom);

export default router;
