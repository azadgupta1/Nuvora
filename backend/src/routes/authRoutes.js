import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();


const frontendUrl = process.env.FRONTEND_URL;
const router = express.Router();



// add one more route here

// GOOGLE AUTH ROUTE
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const token = req.user.token;
    // res.redirect(`${frontendUrl}dashboard?token=${token}`);
    // ✅ Best: Use a URL-safe join to avoid double slashes
    res.redirect(`${frontendUrl.replace(/\/$/, '')}/dashboard?token=${token}`);
  }
);


router.post('/signup', registerUser);

router.post('/login', loginUser);

export default router;