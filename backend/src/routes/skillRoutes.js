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
