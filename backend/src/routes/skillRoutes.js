// import express from 'express';
// import { addOrUpdateSkill, getAllSkills, getSkillById, deleteSkill, getMySkill, getSkillByUserId } from '../controllers/skillController.js';
// import { authenticate } from '../middlewares/authMiddleware.js'; // Import authentication middleware

// const router = express.Router();

// // Route for adding a new skill (protected route)
// router.post('/', authenticate, addOrUpdateSkill);

// // Route for fetching all skills (public route)
// router.get('/', authenticate, getAllSkills);

// router.get('/my-skills', authenticate, getMySkill);

// router.get('/user', authenticate, getSkillByUserId);

// // Route for fetching skill by ID (public route)
// router.get('/:id', getSkillById);

// // router.put('/:id', authenticate, updateSkill);


// router.delete('/:id', authenticate, deleteSkill);





// export default router;




// import express from 'express';
// import multer from 'multer';
// import path from 'path';
// import { 
//   addOrUpdateSkill, 
//   getAllSkills, 
//   getSkillById, 
//   deleteSkill, 
//   getMySkill, 
//   getSkillByUserId,
//   updateSkill   // ✅ make sure this exists in your controller
// } from '../controllers/skillController.js';
// import { authenticate } from '../middlewares/authMiddleware.js';

// const router = express.Router();

// // ✅ Multer config for image upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/uploads/skills');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// // Create new skill
// router.post('/', authenticate, upload.single("image"), addOrUpdateSkill);

// // Get all skills
// router.get('/', authenticate, getAllSkills);

// // My skills
// router.get('/my-skills', authenticate, getMySkill);

// // Skill by user
// router.get('/user', authenticate, getSkillByUserId);

// // Skill by id
// router.get('/:id', getSkillById);

// // ✅ Update skill
// router.put('/:id', authenticate, upload.single("image"), updateSkill);

// // Delete skill
// router.delete('/:id', authenticate, deleteSkill);

// export default router;

















import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

import {
  addOrUpdateSkill,
  getAllSkills,
  getSkillById,
  deleteSkill,
  getMySkill,
  getSkillByUserId,
  updateSkill
} from "../controllers/skillController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ✅ Cloudinary storage for skill thumbnails
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "learnmate/skills", // Cloudinary folder for skill images
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    public_id: (req, file) =>
      `${Date.now()}-${file.originalname.split(".")[0]}`,
  },
});

const upload = multer({ storage });

// Create new skill
router.post("/", authenticate, upload.single("image"), addOrUpdateSkill);

// Get all skills
router.get("/", authenticate, getAllSkills);

// My skills
router.get("/my-skills", authenticate, getMySkill);

// Skill by user
router.get("/user", authenticate, getSkillByUserId);

// Skill by id
router.get("/:id", getSkillById);

// ✅ Update skill
router.put("/:id", authenticate, upload.single("image"), updateSkill);

// Delete skill
router.delete("/:id", authenticate, deleteSkill);

export default router;
