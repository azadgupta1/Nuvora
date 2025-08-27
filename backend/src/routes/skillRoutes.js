import express from 'express';
import { addOrUpdateSkill, getAllSkills, getSkillById, deleteSkill, getMySkill, getSkillByUserId } from '../controllers/skillController.js';
import { authenticate } from '../middlewares/authMiddleware.js'; // Import authentication middleware

const router = express.Router();

// Route for adding a new skill (protected route)
router.post('/', authenticate, addOrUpdateSkill);

// Route for fetching all skills (public route)
router.get('/', authenticate, getAllSkills);

router.get('/my-skills', authenticate, getMySkill);

router.get('/user', authenticate, getSkillByUserId);

// Route for fetching skill by ID (public route)
router.get('/:id', getSkillById);

// router.put('/:id', authenticate, updateSkill);


router.delete('/:id', authenticate, deleteSkill);





export default router;
