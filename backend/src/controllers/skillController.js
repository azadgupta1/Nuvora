// import prisma from '../config/prismaClient.js'; // Import Prisma Client

// // Add Skill
// export const addSkill = async (req, res) => {
//   const { name, category, description, image, duration, location, availability, skillWantedInReturn } = req.body;
//   const userId = req.user.userId; // Get the user ID from the decoded JWT

//   try {
//     // Validate required fields
//     if (!name || !category || !description || !duration || !availability || !skillWantedInReturn) {
//       return res.status(400).json({ message: 'Please fill in all required fields.' });
//     }

//     // Create new skill in the database
//     const newSkill = await prisma.skill.create({
//       data: {
//         name,
//         category,
//         description,
//         image,
//         duration,
//         location,
//         availability,
//         skillWantedInReturn,
//         userId, // Associate skill with the logged-in user
//       }
//     });

//     // Respond with the newly created skill
//     res.status(201).json({ message: 'Skill added successfully!', newSkill });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong while adding the skill.' });
//   }
// };


// // Get All Skills
// export const getAllSkills = async (req, res) => {
//     try {
//       // Retrieve all skills from the database
//       const skills = await prisma.skill.findMany();
  
//       // Return the list of skills
//       res.status(200).json({ skills });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Something went wrong while fetching skills.' });
//     }
//   };
  

//   // Get Skill by ID
// export const getSkillById = async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       // Retrieve skill by ID from the database
//       const skill = await prisma.skill.findUnique({
//         where: { id: parseInt(id) }, // Ensure ID is parsed to integer
//       });
  
//       if (!skill) {
//         return res.status(404).json({ message: 'Skill not found' });
//       }
  
//       // Return the skill details
//       res.status(200).json({ skill });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Something went wrong while fetching the skill.' });
//     }
//   };

//   export const getMySkills = async (req, res) => {
//     try {
//       const userId = req.user.userId; // Extracting user ID from authenticated request
  
//       console.log("USER ID is ", userId); // Debugging
  
//       const mySkills = await prisma.skill.findMany({
//         where: { userId },
//       });
  
//       res.status(200).json(mySkills);
//     } catch (error) {
//       console.error("Error fetching user's skills:", error);
//       res.status(500).json({ message: 'Something went wrong while fetching your skills.' });
//     }
//   };
  
  

//   export const updateSkill = async (req, res) => {
//     const { id } = req.params;
//     const { name, category, description, image, duration, location, availability, skillWantedInReturn } = req.body;
  
//     try {
//       // Verify ownership of the skill
//       const skill = await prisma.skill.findUnique({
//         where: { id: parseInt(id) },
//       });
  
//       if (!skill) {
//         return res.status(404).json({ message: "Skill not found!" });
//       }
  
//       if (skill.userId !== req.user.userId) {
//         return res.status(403).json({ message: "Unauthorized to update this skill!" });
//       }
  
//       // Update the skill
//       const updatedSkill = await prisma.skill.update({
//         where: { id: parseInt(id) },
//         data: { name, category, description, image, duration, location, availability, skillWantedInReturn },
//       });
  
//       res.status(200).json({ message: "Skill updated successfully!", updatedSkill });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Something went wrong!" });
//     }
//   };

  
//   export const deleteSkill = async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       // Verify ownership of the skill
//       const skill = await prisma.skill.findUnique({
//         where: { id: parseInt(id) },
//       });
  
//       if (!skill) {
//         return res.status(404).json({ message: "Skill not found!" });
//       }
  
//       if (skill.userId !== req.user.userId) {
//         return res.status(403).json({ message: "Unauthorized to delete this skill!" });
//       }
  
//       // Delete the skill
//       await prisma.skill.delete({
//         where: { id: parseInt(id) },
//       });
  
//       res.status(200).json({ message: "Skill deleted successfully!" });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "Something went wrong!" });
//     }
//   };








  


import prisma from '../config/prismaClient.js';

// Add or Update Skill for the Logged-in User
// export const addOrUpdateSkill = async (req, res) => {
//   const {
//     skillsOffered,
//     skillsWanted,
//     category,
//     description,
//     image,
//     duration,
//     location,
//     availability
//   } = req.body;

//   const userId = req.user.userId;

//   try {
//     if (!Array.isArray(skillsOffered) || skillsOffered.length === 0 ||
//         !Array.isArray(skillsWanted) || skillsWanted.length === 0) {
//       return res.status(400).json({ message: 'skillsOffered and skillsWanted must be non-empty arrays.' });
//     }

//     // Check if skill profile already exists for this user
//     const existingSkill = await prisma.skill.findUnique({
//       where: { userId }
//     });

//     let skill;
//     if (existingSkill) {
//       // Update existing skill record
//       skill = await prisma.skill.update({
//         where: { userId },
//         data: {
//           skillsOffered,
//           skillsWanted,
//           category,
//           description,
//           image,
//           duration,
//           location,
//           availability
//         }
//       });
//       return res.status(200).json({ message: 'Skill profile updated successfully!', skill });
//     } else {
//       // Create new skill record
//       skill = await prisma.skill.create({
//         data: {
//           skillsOffered,
//           skillsWanted,
//           category,
//           description,
//           image,
//           duration,
//           location,
//           availability,
//           userId
//         }
//       });
//       return res.status(201).json({ message: 'Skill profile created successfully!', skill });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong while saving the skill profile.' });
//   }
// };



// const safeParseJSON = (value, fallback = undefined) => {
//   try {
//     if (!value) return fallback;
//     if (typeof value === "object") return value; // already parsed
//     return JSON.parse(value);
//   } catch {
//     return fallback;
//   }
// };

// // ✅ Controller
// export const addOrUpdateSkill = async (req, res) => {
//   const {
//     skillsOffered,
//     skillsWanted,
//     category,
//     description,
//     duration,
//     location,
//     availability
//   } = req.body;

//   const userId = req.user.userId;

//   try {
//     // Arrays
//     const offered = safeParseArray(skillsOffered);
//     const wanted = safeParseArray(skillsWanted);

//     // Availability
//     const parsedAvailability = safeParseJSON(availability);

//     // Image
//     let imageUrl;
//     if (req.file) {
//       imageUrl = `/uploads/skills/${req.file.filename}`;
//     }

//     // Check if user already has a skill profile
//     const existingSkill = await prisma.skill.findFirst({
//       where: { userId }
//     });

//     let skill;
//     if (existingSkill) {
//       skill = await prisma.skill.update({
//         where: { id: existingSkill.id }, // ✅ safer than userId
//         data: {
//           skillsOffered: offered,
//           skillsWanted: wanted,
//           category,
//           description,
//           duration,
//           location,
//           availability: parsedAvailability,
//           ...(imageUrl && { image: imageUrl })
//         }
//       });
//       return res.status(200).json({
//         message: "Skill profile updated successfully!",
//         skill
//       });
//     } else {
//       skill = await prisma.skill.create({
//         data: {
//           userId,
//           skillsOffered: offered,
//           skillsWanted: wanted,
//           category,
//           description,
//           duration,
//           location,
//           availability: parsedAvailability,
//           ...(imageUrl && { image: imageUrl })
//         }
//       });
//       return res.status(201).json({
//         message: "Skill profile created successfully!",
//         skill
//       });
//     }
//   } catch (error) {
//     console.error("❌ Error saving skill:", error);
//     res.status(500).json({
//       message: "Something went wrong while saving the skill profile.",
//       error: error.message
//     });
//   }
// };




// // ✅ Safe array parser
// const safeParseArray = (value, fallback = []) => {
//   try {
//     if (!value) return fallback;
//     if (Array.isArray(value)) return value;
//     const parsed = JSON.parse(value);
//     return Array.isArray(parsed) ? parsed : fallback;
//   } catch {
//     return fallback;
//   }
// };

// export const updateSkill = async (req, res) => {
//   const { id } = req.params;
//   const {
//     skillsOffered,
//     skillsWanted,
//     category,
//     description,
//     duration,
//     location,
//     availability,
//   } = req.body;

//   const userId = req.user.userId;

//   try {
//     const existingSkill = await prisma.skill.findUnique({
//       where: { id: parseInt(id) },
//     });

//     if (!existingSkill) {
//       return res.status(404).json({ message: "Skill not found" });
//     }

//     // ✅ Ensure only owner can update
//     if (existingSkill.userId !== userId) {
//       return res.status(403).json({ message: "Not authorized" });
//     }

//     // ✅ Handle image update
//     let imagePath = existingSkill.image;
//     if (req.file) {
//       // Delete old image if exists
//       if (existingSkill.image) {
//         const oldPath = path.join("public", existingSkill.image); // no leading slash now
//         if (fs.existsSync(oldPath)) {
//           fs.unlinkSync(oldPath);
//         }
//       }
//       // Save without leading slash
//       imagePath = `uploads/skills/${req.file.filename}`;
//     }

//     // ✅ Parse availability safely
//     let parsedAvailability = undefined;
//     try {
//       if (availability) {
//         parsedAvailability =
//           typeof availability === "string"
//             ? JSON.parse(availability)
//             : availability;
//       }
//     } catch {
//       parsedAvailability = undefined;
//     }

//     // ✅ Update skill
//     const updatedSkill = await prisma.skill.update({
//       where: { id: parseInt(id) },
//       data: {
//         skillsOffered: safeParseArray(skillsOffered),
//         skillsWanted: safeParseArray(skillsWanted),
//         category,
//         description,
//         duration,
//         location,
//         availability: parsedAvailability,
//         image: imagePath,
//       },
//     });

//     return res
//       .status(200)
//       .json({ message: "Skill updated successfully!", skill: updatedSkill });
//   } catch (error) {
//     console.error("Error updating skill:", error);
//     res.status(500).json({ message: "Something went wrong while updating skill" });
//   }
// };












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





















// export const getAllSkills = async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     // Step 1: Fetch all skills (excluding current user)
//     const skills = await prisma.skill.findMany({
//       where: {
//         userId: {
//           not: userId,
//         },
//       },
//       include: {
//         user: true,
//         reviews: {
//           include: {
//             user: true,
//           },
//         },
//       },
//     });

//     // Step 2: Add average rating & count to each skill
//     const skillsWithRatings = skills.map((skill) => {
//       const totalReviews = skill.reviews.length;
//       const avgRating =
//         totalReviews > 0
//           ? skill.reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
//           : 0;

//       return {
//         ...skill,
//         averageRating: Number(avgRating.toFixed(1)),
//         reviewCount: totalReviews,
//       };
//     });

//     res.status(200).json({ skills: skillsWithRatings });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong while fetching skills.' });
//   }
// };



// export const getAllSkills = async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     // 1. Get current user's 'skillsWanted'
//     const currentUser = await prisma.user.findUnique({
//       where: { id: userId },
//       include: {
//         skill: true,
//       },
//     });

//     if (!currentUser || !currentUser.skill || currentUser.skill.skillsWanted.length === 0) {
//       return res.status(200).json({ skills: [] }); // No preferences, return empty
//     }

//     const userSkillsWanted = currentUser.skill.skillsWanted;

//     // 2. Fetch skills from other users where skillsOffered overlaps with current user's skillsWanted
//     const recommendedSkills = await prisma.skill.findMany({
//       where: {
//         userId: { not: userId },
//         skillsOffered: {
//           hasSome: userSkillsWanted, // Prisma will match any overlapping skill
//         },
//       },
//       include: {
//         user: true,
//         reviews: {
//           include: {
//             user: true,
//           },
//         },
//       },
//     });

//     // 3. Add average rating and review count
//     const skillsWithRatings = recommendedSkills.map((skill) => {
//       const totalReviews = skill.reviews.length;
//       const avgRating =
//         totalReviews > 0
//           ? skill.reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
//           : 0;

//       return {
//         ...skill,
//         averageRating: Number(avgRating.toFixed(1)),
//         reviewCount: totalReviews,
//       };
//     });

//     // Optional: Sort by rating (descending)
//     const sortedSkills = skillsWithRatings.sort((a, b) => b.averageRating - a.averageRating);

//     res.status(200).json({ skills: sortedSkills });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong while fetching recommended skills.' });
//   }
// };








// export const getAllSkills = async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     // 1. Get current user's skillsWanted
//     const currentUser = await prisma.user.findUnique({
//       where: { id: userId },
//       include: {
//         skill: true,
//       },
//     });

//     const userSkillsWanted = currentUser?.skill?.skillsWanted || [];

//     // 2. Fetch all other users' skills
//     const allOtherSkills = await prisma.skill.findMany({
//       where: {
//         userId: { not: userId },
//       },
//       include: {
//         user: true,
//         reviews: {
//           include: {
//             user: true,
//           },
//         },
//       },
//     });

//     // 3. Separate matching and non-matching skills
//     const matchingSkills = [];
//     const nonMatchingSkills = [];

//     for (const skill of allOtherSkills) {
//       const isMatch = skill.skillsOffered.some(offered =>
//         userSkillsWanted.includes(offered)
//       );

//       const totalReviews = skill.reviews.length;
//       const avgRating =
//         totalReviews > 0
//           ? skill.reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
//           : 0;

//       const skillWithRatings = {
//         ...skill,
//         averageRating: Number(avgRating.toFixed(1)),
//         reviewCount: totalReviews,
//       };

//       if (isMatch) {
//         matchingSkills.push(skillWithRatings);
//       } else {
//         nonMatchingSkills.push(skillWithRatings);
//       }
//     }

//     // 4. Optional: sort both lists by rating (desc)
//     matchingSkills.sort((a, b) => b.averageRating - a.averageRating);
//     nonMatchingSkills.sort((a, b) => b.averageRating - a.averageRating);

//     // 5. Combine both lists: matching first
//     const finalSkills = [...matchingSkills, ...nonMatchingSkills];

//     res.status(200).json({ skills: finalSkills });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong while fetching skills.' });
//   }
// };




// export const getAllSkills = async (req, res) => {
//   try {
//     const userId = req.user.userId;
//     const skip = parseInt(req.query.skip) || 0;
//     const take = parseInt(req.query.take) || 10;

//     // 1. Get current user's skillsWanted
//     const currentUser = await prisma.user.findUnique({
//       where: { id: userId },
//       include: {
//         skill: true,
//       },
//     });

//     const userSkillsWanted = currentUser?.skill?.skillsWanted || [];

//     // 2. Fetch all other users' skills with pagination
//     const allOtherSkills = await prisma.skill.findMany({
//       where: {
//         userId: { not: userId },
//       },
//       include: {
//         user: true,
//         reviews: {
//           include: {
//             user: true,
//           },
//         },
//       },
//       skip,
//       take,
//       orderBy: {
//         id: 'desc', // Optional: newest first
//       },
//     });

//     // 3. Process skills: average ratings + match logic
//     const finalSkills = allOtherSkills.map((skill) => {
//       const isMatch = skill.skillsOffered.some((offered) =>
//         userSkillsWanted.includes(offered)
//       );

//       const totalReviews = skill.reviews.length;
//       const avgRating =
//         totalReviews > 0
//           ? skill.reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
//           : 0;

//       return {
//         ...skill,
//         averageRating: Number(avgRating.toFixed(1)),
//         reviewCount: totalReviews,
//         isMatch,
//       };
//     });

//     // 4. Sort by match first, then rating
//     const sortedSkills = finalSkills.sort((a, b) => {
//       if (a.isMatch === b.isMatch) {
//         return b.averageRating - a.averageRating;
//       }
//       return a.isMatch ? -1 : 1;
//     });

//     res.status(200).json({ skills: sortedSkills });
//   } catch (error) {
//     console.error('Error in getAllSkills:', error);
//     res.status(500).json({ message: 'Something went wrong while fetching skills.' });
//   }
// };




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

























// Get All Skills (excluding current user's)
// export const getAllSkills = async (req, res) => {
//   try {
//     const userId = req.user.userId;

//     const skills = await prisma.skill.findMany({
//       where: {
//         userId: {
//           not: userId,
//         },
//       },
//       include: { 
//         user: true,
//         reviews: true 
//       },
//     });

//     res.status(200).json({ skills });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong while fetching skills.' });
//   }
// };






// // Get Skill by User ID
// export const getSkillByUserId = async (req, res) => {
//   const userId  = req.user.userId;
//   try {
//     const skill = await prisma.skill.findUnique({
//       where: { userId },
//       include: { user: true }
//     });

//     if (!skill) {
//       return res.status(404).json({ message: 'Skill profile not found' });
//     }

//     res.status(200).json(skill);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Something went wrong while fetching the skill profile.' });
//   }
// };



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
