import express from 'express';
import { offerSkill, requestSkill, getMatchedSkills, updateExchangeStatus } from '../controllers/skillExchangeController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to offer a skill for exchange
router.post('/offer', authenticate, offerSkill);

// Route to request a skill for exchange
router.post('/request', authenticate, requestSkill);

// Route to get matched skills based on current user offerings/requests
router.get('/match', authenticate, getMatchedSkills);

// Route to update the status of a skill exchange (e.g., Pending, Matched, Completed)
router.patch('/status', authenticate, updateExchangeStatus);

export default router;
