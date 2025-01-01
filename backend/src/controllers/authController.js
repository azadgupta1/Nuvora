import prisma from '../config/prismaClient.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export const registerUser = async (req, res) =>{
    const { name, email, password } = req.body;

    try{
        const userExist = await prisma.user.findUnique({
            where: {email},
        });

        if(userExist){
            return res.status(400).json({message: "User already exists!"});
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const createUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        });

        res.status(200).json({message: "User registered successfully!", createUser});
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Something went wrong!"});
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

        const token = jwt.sign({userId: userExist.id}, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.status(200).json({message: "User logged in successfully!", token});

    }catch(error){
        console.error(error);
        res.status(500).json({message: "Something went wrong!"});
    }
};