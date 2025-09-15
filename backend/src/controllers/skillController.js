import prisma from '../config/prismaClient.js';

// ✅ Safe array parser
const safeParseArray = (value, fallback = []) => {
  try {
    if (!value) return fallback;
    if (Array.isArray(value)) return value;
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
};

const safeParseJSON = (value, fallback = undefined) => {
  try {
    if (!value) return fallback;
    if (typeof value === "object") return value;
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

// ✅ Add or update skill
export const addOrUpdateSkill = async (req, res) => {
  const {
    skillsOffered,
    skillsWanted,
    category,
    description,
    duration,
    location,
    availability,
  } = req.body;

  const userId = req.user.userId;

  try {
    const offered = safeParseArray(skillsOffered);
    const wanted = safeParseArray(skillsWanted);
    const parsedAvailability = safeParseJSON(availability);

    // ✅ Image from Cloudinary
    let imageUrl;
    if (req.file) {
      imageUrl = req.file.path; // Cloudinary URL
    }

    // Check if user already has a skill profile
    const existingSkill = await prisma.skill.findFirst({
      where: { userId },
    });

    let skill;
    if (existingSkill) {
      skill = await prisma.skill.update({
        where: { id: existingSkill.id },
        data: {
          skillsOffered: offered,
          skillsWanted: wanted,
          category,
          description,
          duration,
          location,
          availability: parsedAvailability,
          ...(imageUrl && { image: imageUrl }),
        },
      });
      return res
        .status(200)
        .json({ message: "Skill profile updated successfully!", skill });
    } else {
      skill = await prisma.skill.create({
        data: {
          userId,
          skillsOffered: offered,
          skillsWanted: wanted,
          category,
          description,
          duration,
          location,
          availability: parsedAvailability,
          ...(imageUrl && { image: imageUrl }),
        },
      });
      return res
        .status(201)
        .json({ message: "Skill profile created successfully!", skill });
    }
  } catch (error) {
    console.error("❌ Error saving skill:", error);
    res.status(500).json({
      message: "Something went wrong while saving the skill profile.",
      error: error.message,
    });
  }
};

// ✅ Update skill
export const updateSkill = async (req, res) => {
  const { id } = req.params;
  const {
    skillsOffered,
    skillsWanted,
    category,
    description,
    duration,
    location,
    availability,
  } = req.body;

  const userId = req.user.userId;

  try {
    const existingSkill = await prisma.skill.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existingSkill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    if (existingSkill.userId !== userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    // ✅ Cloudinary handles new image
    let imagePath = existingSkill.image;
    if (req.file) {
      imagePath = req.file.path; // Cloudinary URL
    }

    // ✅ Parse availability safely
    let parsedAvailability = undefined;
    try {
      if (availability) {
        parsedAvailability =
          typeof availability === "string"
            ? JSON.parse(availability)
            : availability;
      }
    } catch {
      parsedAvailability = undefined;
    }

    const updatedSkill = await prisma.skill.update({
      where: { id: parseInt(id) },
      data: {
        skillsOffered: safeParseArray(skillsOffered),
        skillsWanted: safeParseArray(skillsWanted),
        category,
        description,
        duration,
        location,
        availability: parsedAvailability,
        image: imagePath,
      },
    });

    return res
      .status(200)
      .json({ message: "Skill updated successfully!", skill: updatedSkill });
  } catch (error) {
    console.error("Error updating skill:", error);
    res
      .status(500)
      .json({ message: "Something went wrong while updating skill" });
  }
};


export const getAllSkills = async (req, res) => {
  try {
    const userId = req.user.userId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // 1. Get current user's skillsWanted
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        skill: true,
      },
    });

    const userSkillsWanted = currentUser?.skill?.skillsWanted || [];

    // 2. Fetch all other users' skills (no skip/take yet)
    const allOtherSkills = await prisma.skill.findMany({
      where: {
        userId: { not: userId },
      },
      include: {
        user: true,
        reviews: {
          include: { user: true },
        },
      },
      orderBy: {
        id: "desc", // keep newest first before custom sort
      },
    });

    // 3. Process skills: average ratings + match logic
    const processedSkills = allOtherSkills.map((skill) => {
      const isMatch = skill.skillsOffered.some((offered) =>
        userSkillsWanted.includes(offered)
      );

      const totalReviews = skill.reviews.length;
      const avgRating =
        totalReviews > 0
          ? skill.reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
          : 0;

      return {
        ...skill,
        averageRating: Number(avgRating.toFixed(1)),
        reviewCount: totalReviews,
        isMatch,
      };
    });

    // 4. Sort by match first, then rating
    const sortedSkills = processedSkills.sort((a, b) => {
      if (a.isMatch === b.isMatch) {
        return b.averageRating - a.averageRating;
      }
      return a.isMatch ? -1 : 1;
    });

    // 5. Paginate AFTER sorting
    const startIndex = (page - 1) * limit;
    const paginatedSkills = sortedSkills.slice(startIndex, startIndex + limit);

    res.status(200).json({
      skills: paginatedSkills,
      total: sortedSkills.length,
      page,
      totalPages: Math.ceil(sortedSkills.length / limit),
    });
  } catch (error) {
    console.error("Error in getAllSkills:", error);
    res.status(500).json({
      message: "Something went wrong while fetching skills.",
    });
  }
};


// Get skill by Skill ID
export const getSkillById = async (req, res) => {
  try {
    const { id } = req.params;

    const skill = await prisma.skill.findUnique({
      where: { id: parseInt(id) },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    if (!skill) {
      return res.status(404).json({ message: "Skill not found" });
    }

    res.json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};




// Get My Skill Profile
export const getMySkill = async (req, res) => {
  try {
    const userId = req.user.userId;
    const mySkill = await prisma.skill.findUnique({
      where: { userId }
    });

    if (!mySkill) {
      return res.status(404).json({ message: 'No skill profile found for this user.' });
    }

    res.status(200).json(mySkill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while fetching your skill profile.' });
  }
};

// Delete Skill Profile
export const deleteSkill = async (req, res) => {
  try {
    const userId = req.user.userId;

    const skill = await prisma.skill.findUnique({ where: { userId } });
    if (!skill) {
      return res.status(404).json({ message: 'Skill profile not found!' });
    }

    await prisma.skill.delete({ where: { userId } });
    res.status(200).json({ message: 'Skill profile deleted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};


// Get Skill by User ID
export const getSkillByUserId = async (req, res) => {
  const userId = req.user?.userId;

  // Safety check
  if (!userId || isNaN(userId)) {
    return res.status(400).json({ message: 'Invalid or missing user ID.' });
  }

  try {
    const skill = await prisma.skill.findUnique({
      where: { userId: Number(userId) },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePicture: true
          }
        }
      }
    });

    if (!skill) {
      return res.status(404).json({ message: 'Skill profile not found.' });
    }

    return res.status(200).json(skill);
  } catch (error) {
    console.error('Error fetching skill by user ID:', error);
    return res.status(500).json({ message: 'Server error while fetching skill profile.' });
  }
};
