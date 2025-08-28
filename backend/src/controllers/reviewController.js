import prisma from '../config/prismaClient.js';

// Add a new review
export const addReview = async (req, res) => {
  const { skillId, rating, review } = req.body;
  const userId = req.user.userId;

  try {
    const skill = await prisma.skill.findUnique({
      where: { id: skillId },
    });
    if (!skill) return res.status(404).json({ message: 'Skill not found' });

    const newReview = await prisma.review.create({
      data: {
        userId,
        skillId,
        rating,
        review,
        receiverId: skill.userId
      },
    });

    return res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get reviews for a specific skill
export const getReviews = async (req, res) => {
  const { skillId } = req.params;

  try {
    const reviews = await prisma.review.findMany({
      where: { skillId: parseInt(skillId) },
      include: { user: true }, // Include the user details who made the review
    });

    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const getallReviews = async (req, res) =>{
  const userId = req.user.userId;

  try{
    const data = await prisma.review.findMany({
      where: {
        receiverId: userId
      },
      include: {
        user: true,
        skill: true,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(data);

  }catch (error){
    console.error(error);
    res.status(500).json({message: 'Server error'});
  }
}