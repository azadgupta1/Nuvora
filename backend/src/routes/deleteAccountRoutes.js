import express from 'express';
import { deleteAccount } from '../controllers/deleteAccountController.js';
import { authenticate } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.delete('/user', authenticate, deleteAccount);

export default router;
