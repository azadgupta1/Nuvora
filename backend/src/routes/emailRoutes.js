import express from 'express';
import { handleSendEmail } from '../controllers/emailController.js';

const router = express.Router();

router.post('/send', handleSendEmail);

export default router;
