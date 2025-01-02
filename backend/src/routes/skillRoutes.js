import express from 'express';
import { addSkill, getAllSkills, getSkillById, updateSkill, deleteSkill } from '../controllers/skillController.js';
import { authenticate } from '../middlewares/authMiddleware.js'; // Import authentication middleware

const router = express.Router();

// Route for adding a new skill (protected route)
router.post('/skills', authenticate, addSkill);

// Route for fetching all skills (public route)
router.get('/skills', getAllSkills);

// Route for fetching skill by ID (public route)
router.get('/skills/:id', getSkillById);


router.put('/skills/:id', authenticate, updateSkill);


router.delete('/skills/:id', authenticate, deleteSkill);


export default router;
