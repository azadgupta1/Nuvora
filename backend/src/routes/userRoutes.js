import express from 'express';
import { getUserById } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddleware.js';


const router = express.Router();


router.get('/:receiverId', authenticate, getUserById);



export default router;