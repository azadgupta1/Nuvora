import prisma from '../config/prismaClient.js';

// Add a new bookmark
export const addBookmark = async (req, res) => {
  const { skillId } = req.body;
  const userId = req.user.userId;

  try {
    console.log('Received request to add bookmark:', { userId, skillId });

    // Check if the skill exists
    const skill = await prisma.skill.findUnique({
      where: { id: skillId },
    });
    if (!skill) {
      console.log('Skill not found:', skillId);
      return res.status(404).json({ message: 'Skill not found' });
    }

    // Check if the skill is already bookmarked by the user
    const existingBookmark = await prisma.bookmark.findFirst({
      where: { userId, skillId },
    });
    if (existingBookmark) {
      console.log('Skill already bookmarked:', { userId, skillId });
      return res.status(400).json({ message: 'Skill already bookmarked' });
    }

    // Create a new bookmark
    const newBookmark = await prisma.bookmark.create({
      data: {
        userId,
        skillId,
      },
    });
    console.log('New bookmark created:', newBookmark);

    return res.status(201).json(newBookmark);
  } catch (error) {
    console.error('Error while adding bookmark:', {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all bookmarks for the logged-in user
export const getBookmarks = async (req, res) => {
  const userId = req.user.id;

  try {
    console.log("Fetching bookmarks for user:", userId);

    const bookmarks = await prisma.bookmark.findMany({
      where: { userId },
      include: {
        skill: {
          include: {
            user: true, // ✅ bring skill owner
            reviews: true, // ✅ if you have a review table for ratings
          },
        },
      },
    });

    console.log("Bookmarks fetched:", bookmarks);

    // Just return skills array to frontend
    res.status(200).json(bookmarks.map((b) => b.skill));
  } catch (error) {
    console.error("Error while fetching bookmarks:", {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ message: "Server error" });
  }
};






// Remove a bookmark
export const removeBookmark = async (req, res) => {
  const { id } = req.params;

  try {
    console.log('Request to remove bookmark with ID:', id);

    const bookmark = await prisma.bookmark.findUnique({
      where: { id: parseInt(id) },
    });
    if (!bookmark) {
      console.log('Bookmark not found:', id);
      return res.status(404).json({ message: 'Bookmark not found' });
    }

    await prisma.bookmark.delete({
      where: { id: parseInt(id) },
    });
    console.log('Bookmark removed successfully:', id);

    res.status(200).json({ message: 'Bookmark removed successfully' });
  } catch (error) {
    console.error('Error while removing bookmark:', {
      message: error.message,
      stack: error.stack,
    });
    res.status(500).json({ message: 'Server error' });
  }
};
