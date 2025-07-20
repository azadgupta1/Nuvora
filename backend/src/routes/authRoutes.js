import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// add one more route here



router.post('/signup', registerUser);

router.post('/login', loginUser);

export default router;