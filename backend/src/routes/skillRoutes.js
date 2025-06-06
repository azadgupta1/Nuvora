import express from 'express';
import { addSkill, getAllSkills, getSkillById, updateSkill, deleteSkill, getMySkills } from '../controllers/skillController.js';
import { authenticate } from '../middlewares/authMiddleware.js'; // Import authentication middleware

const router = express.Router();

// Route for adding a new skill (protected route)
router.post('/', authenticate, addSkill);

// Route for fetching all skills (public route)
router.get('/', getAllSkills);

router.get('/my-skills', authenticate, getMySkills);

// Route for fetching skill by ID (public route)
router.get('/:id', getSkillById);





router.put('/:id', authenticate, updateSkill);


router.delete('/:id', authenticate, deleteSkill);


export default router;
