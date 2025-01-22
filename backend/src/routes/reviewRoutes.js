import express from 'express';
import { addReview, getReviews } from '../controllers/reviewController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to add a review for a skill
router.post('/', authenticate, addReview);

// Route to fetch reviews for a specific skill
router.get('/:skillId', getReviews);

export default router;
