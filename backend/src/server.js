import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/bookings', bookingRoutes);


app.get('/', (req, res) =>{
    res.send("Welcome to LearnMate!");
});

app.listen(PORT, () =>{
    console.log("Server is running on port "+PORT);
});