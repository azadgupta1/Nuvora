import { registerSchema } from '../validation/registerSchema.js';
import { z } from 'zod';
import prisma from '../config/prismaClient.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import sendEmail from '../services/emailService.js';


export const registerUser = async (req, res) => {
  try {
    // Validate request body using Zod schema
    const validatedData = registerSchema.parse(req.body);
    const { name, email, password } = validatedData;

    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Send welcome email
    const subject = "Welcome to Nuvora!";
    const htmlContent = `
      <h2>Hi ${name},</h2>
      <p>Welcome to Nuvora! We're excited to have you on board.</p>
      <p>Start exploring skills and connecting with others!</p>
      <p>— The Nuvora Team</p>
    `;

    try {
      await sendEmail(email, subject, htmlContent);
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
      // You can decide whether to fail registration or just log the error and continue
    }

    // 🔐 Generate JWT token
    const token = jwt.sign(
      { userId: createUser.id },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    // Remove password from user object before sending
    const { password: _, ...userWithoutPassword } = createUser;

    res.status(200).json({
      message: "User registered successfully!",
      user: userWithoutPassword,
      token, // 🔑 Send token
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = error.errors.map(err => ({
        field: err.path[0],
        message: err.message,
      }));

      return res.status(400).json({
        message: "Validation failed",
        errors: formattedErrors,
      });
    }

    console.error(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};




export const loginUser = async (req, res) =>{
    const { email, password } = req.body;

    try{
        const userExist = await prisma.user.findUnique({
            where: {email},
        });

        if(!userExist){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const isValidPassword = await bcrypt.compare(password, userExist.password);

        if(!isValidPassword){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({userId: userExist.id}, process.env.JWT_SECRET, {expiresIn: "2d"});

        res.status(200).json({message: "User logged in successfully!", token});

    }catch(error){
        console.error(error);
        res.status(500).json({message: "Something went wrong!"});
    }
};
