import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);


app.get('/', (req, res) =>{
    res.send("Welcome to LearnMate!");
});

app.listen(PORT, () =>{
    console.log("Server is running on port "+PORT);
});