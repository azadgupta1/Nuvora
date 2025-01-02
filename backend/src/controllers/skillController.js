import prisma from '../config/prismaClient.js'; // Import Prisma Client

// Add Skill
export const addSkill = async (req, res) => {
  const { name, category, description, image, duration, location, availability, skillWantedInReturn } = req.body;
  const userId = req.user.userId; // Get the user ID from the decoded JWT

  try {
    // Validate required fields
    if (!name || !category || !description || !duration || !availability || !skillWantedInReturn) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    // Create new skill in the database
    const newSkill = await prisma.skill.create({
      data: {
        name,
        category,
        description,
        image,
        duration,
        location,
        availability,
        skillWantedInReturn,
        userId, // Associate skill with the logged-in user
      }
    });

    // Respond with the newly created skill
    res.status(201).json({ message: 'Skill added successfully!', newSkill });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong while adding the skill.' });
  }
};


// Get All Skills
export const getAllSkills = async (req, res) => {
    try {
      // Retrieve all skills from the database
      const skills = await prisma.skill.findMany();
  
      // Return the list of skills
      res.status(200).json({ skills });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong while fetching skills.' });
    }
  };
  

  // Get Skill by ID
export const getSkillById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Retrieve skill by ID from the database
      const skill = await prisma.skill.findUnique({
        where: { id: parseInt(id) }, // Ensure ID is parsed to integer
      });
  
      if (!skill) {
        return res.status(404).json({ message: 'Skill not found' });
      }
  
      // Return the skill details
      res.status(200).json({ skill });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong while fetching the skill.' });
    }
  };
  

  export const updateSkill = async (req, res) => {
    const { id } = req.params;
    const { name, category, description, image, duration, location, availability, skillWantedInReturn } = req.body;
  
    try {
      // Verify ownership of the skill
      const skill = await prisma.skill.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!skill) {
        return res.status(404).json({ message: "Skill not found!" });
      }
  
      if (skill.userId !== req.user.userId) {
        return res.status(403).json({ message: "Unauthorized to update this skill!" });
      }
  
      // Update the skill
      const updatedSkill = await prisma.skill.update({
        where: { id: parseInt(id) },
        data: { name, category, description, image, duration, location, availability, skillWantedInReturn },
      });
  
      res.status(200).json({ message: "Skill updated successfully!", updatedSkill });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  };

  
  export const deleteSkill = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Verify ownership of the skill
      const skill = await prisma.skill.findUnique({
        where: { id: parseInt(id) },
      });
  
      if (!skill) {
        return res.status(404).json({ message: "Skill not found!" });
      }
  
      if (skill.userId !== req.user.userId) {
        return res.status(403).json({ message: "Unauthorized to delete this skill!" });
      }
  
      // Delete the skill
      await prisma.skill.delete({
        where: { id: parseInt(id) },
      });
  
      res.status(200).json({ message: "Skill deleted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  };
  