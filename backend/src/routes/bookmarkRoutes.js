import express from 'express';
import { addBookmark, getBookmarks, removeBookmark } from '../controllers/bookmarkController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to add a bookmark for a skill
router.post('/', authenticate, addBookmark);

// Route to get all bookmarks of the logged-in user
router.get('/', authenticate, getBookmarks);

// Route to remove a bookmark
router.delete('/:id', authenticate, removeBookmark);

export default router;
