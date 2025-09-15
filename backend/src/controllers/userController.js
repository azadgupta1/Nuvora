import prisma from '../config/prismaClient.js';
import path from 'path';
import fs from 'fs';

export const getUserById = async (req, res) => {
  const { receiverId } = req.params;

  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(receiverId) },
      select: {
        name: true,
        id: true,
        profilePicture: true, // Optional: if you want to show their profile picture
        bio: true, 
        skill: true,
        email: true,
        location: true,
      }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, bio, location } = req.body;

  try {
    let profilePictureUrl;
    if (req.file) {
      // ✅ Cloudinary gives us a URL
      profilePictureUrl = req.file.path;
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        name,
        bio,
        location,
        ...(profilePictureUrl && { profilePicture: profilePictureUrl }),
      },
      select: {
        id: true,
        name: true,
        bio: true,
        location: true,
        profilePicture: true,
        email: true,
      },
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};
