// import prisma from '../config/prismaClient.js';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcrypt';


// export const registerUser = async (req, res) =>{
//     const { name, email, password } = req.body;

//     try{
//         const userExist = await prisma.user.findUnique({
//             where: {email},
//         });

//         if(userExist){
//             return res.status(400).json({message: "User already exists!"});
//         }
        
//         const hashedPassword = await bcrypt.hash(password, 10);

//         const createUser = await prisma.user.create({
//             data: {
//                 name,
//                 email,
//                 password: hashedPassword,
//             }
//         });

//         res.status(200).json({message: "User registered successfully!", createUser});
//     }catch(error){
//         console.error(error);
//         res.status(500).json({message: "Something went wrong!"});
//     }

// };

import { registerSchema } from '../validation/registerSchema.js';
import { z } from 'zod';
import prisma from '../config/prismaClient.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

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
            }
        });

        res.status(200).json({ message: "User registered successfully!", user: createUser });

    } catch (error) {
        // Handle Zod validation errors
        if (error instanceof z.ZodError) {
            const formattedErrors = error.errors.map(err => ({
                field: err.path[0],
                message: err.message
            }));

            return res.status(400).json({
                message: "Validation failed",
                errors: formattedErrors
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

        const token = jwt.sign({userId: userExist.id}, process.env.JWT_SECRET, {expiresIn: "6h"});

        res.status(200).json({message: "User logged in successfully!", token});

    }catch(error){
        console.error(error);
        res.status(500).json({message: "Something went wrong!"});
    }
};