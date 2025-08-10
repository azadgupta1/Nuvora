// src/routes/notificationRoutes.js
import express from 'express';
import { getNotifications, markNotificationAsRead } from '../controllers/notificationController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();



router.get('/', authenticate, getNotifications);

router.patch('/:id/read', authenticate, markNotificationAsRead);

export default router;
