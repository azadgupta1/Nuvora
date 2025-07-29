import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import passport from 'passport';

const router = express.Router();

// add one more route here

// GOOGLE AUTH ROUTE
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    const token = req.user.token;
    res.redirect(`http://localhost:5173/dashboard?token=${token}`);
  }
);




router.post('/signup', registerUser);

router.post('/login', loginUser);

export default router;