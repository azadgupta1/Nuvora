// src/routes/notificationRoutes.js
import express from 'express';
import { getNotifications, markNotificationAsRead, markAllNotificationsAsRead } from '../controllers/notificationController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();



router.get('/', authenticate, getNotifications);

router.patch('/:id/read', authenticate, markNotificationAsRead);

// Mark all notifications as read
router.patch('/read-all', authenticate, markAllNotificationsAsRead);


export default router;
