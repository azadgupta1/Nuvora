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
export const addOrUpdateSkill = async (req, res) => {
  const {
    skillsOffered,
    skillsWanted,
    category,
    description,
    image,
    duration,
    location,
    availability
  } = req.body;

  const userId = req.user.userId;

  try {
    if (!Array.isArray(skillsOffered) || skillsOffered.length === 0 ||
        !Array.isArray(skillsWanted) || skillsWanted.length === 0) {
      return res.status(400).json({ message: 'skillsOffered and skillsWanted must be non-empty arrays.' });
    }

    // Check if skill profile already exists for this user
    const existingSkill = await prisma.skill.findUnique({
      where: { userId }
    });

    let skill;
    if (existingSkill) {
      // Update existing skill record
      skill = await prisma.skill.update({
        where: { userId },
        data: {
          skillsOffered,
          skillsWanted,
          category,
          description,
          image,
          duration,
          location,
          availability
        }
      });
      return res.status(200).json({ message: 'Skill profile updated successfully!', skill });
    } else {
      // Create new skill record
      skill = await prisma.skill.create({
        data: {
          skillsOffered,
          skillsWanted,
          category,
          description,
          image,
          duration,
          location,
          availability,
          userId
        }
      });
      return res.status(201).json({ message: 'Skill profile created successfully!', skill });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while saving the skill profile.' });
  }
};

// Get All Skills (excluding current user's)
export const getAllSkills = async (req, res) => {
  try {
    const userId = req.user.userId;

    const skills = await prisma.skill.findMany({
      where: {
        userId: {
          not: userId,
        },
      },
      include: { user: true },
    });

    res.status(200).json({ skills });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while fetching skills.' });
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
