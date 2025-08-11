import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { getUserById, updateUser } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddleware.js';


const router = express.Router();

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });




router.get('/:receiverId', authenticate, getUserById);

router.put('/:id', upload.single('profilePicture'), updateUser);


export default router;