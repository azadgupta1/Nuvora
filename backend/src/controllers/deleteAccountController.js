import prisma from '../config/prismaClient.js';

export const deleteAccount = async (req, res) => {
  const userId = req.user.userId;

  try {
    // Delete the user - cascade will handle related models with onDelete: Cascade
    await prisma.user.delete({
      where: { id: userId },
    });

    return res.status(200).json({ message: 'Account deleted permanently.' });
  } catch (error) {
    console.error('Error deleting account:', {
      message: error.message,
      stack: error.stack,
    });
    return res.status(500).json({ message: 'Server error while deleting account' });
  }
};
