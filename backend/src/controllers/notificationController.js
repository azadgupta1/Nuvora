// src/controller/notificationController.js
import prisma from '../config/prismaClient.js';

// Get all notifications for logged-in user
export const getNotifications = async (req, res) => {
  try {
    const userId = req.user.userId;

    const notifications = await prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });

    res.status(200).json({ success: true, notifications });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


export const markNotificationAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    if (!userId) {
      console.warn('⚠️ No authenticated user found in request');
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const notificationId = parseInt(id);
    if (isNaN(notificationId)) {
      console.warn('⚠️ Invalid notification ID:', id);
      return res.status(400).json({ success: false, message: 'Invalid notification ID' });
    }

    const notification = await prisma.notification.findUnique({
      where: { id: notificationId }
    });

    if (!notification) {
      console.warn(`❌ Notification not found with id ${notificationId}`);
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }

    if (notification.userId !== userId) {
      console.warn(`❌ Notification userId mismatch: expected ${userId}, got ${notification.userId}`);
      return res.status(403).json({ success: false, message: 'Forbidden: You cannot modify this notification' });
    }

    await prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true }
    });

    res.status(200).json({ success: true, message: 'Notification marked as read' });

  } catch (error) {
    console.error('❌ Error marking notification as read:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Mark all notifications as read for the logged-in user
export const markAllNotificationsAsRead = async (req, res) => {
  try {
    const userId = req.user.userId;

    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    await prisma.notification.updateMany({
      where: {
        userId,
        isRead: false, // only update unread ones
      },
      data: {
        isRead: true,
      },
    });

    res.status(200).json({ success: true, message: 'All notifications marked as read' });
  } catch (error) {
    console.error('❌ Error marking all notifications as read:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
