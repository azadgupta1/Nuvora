import express from 'express';
import { addReview, getReviews, getallReviews } from '../controllers/reviewController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to add a review for a skill
router.post('/', authenticate, addReview);

router.get('/', authenticate, getallReviews);

// Route to fetch reviews for a specific skill
router.get('/:skillId', authenticate, getReviews);

export default router;
