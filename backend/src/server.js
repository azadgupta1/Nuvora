import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import skillExchangeRoutes from './routes/skillExchangeRoutes.js';
import bookmarkRoutes from './routes/bookmarkRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/skillExchange', skillExchangeRoutes);
app.use('/api/bookmark', bookmarkRoutes);
app.use('/api/review', reviewRoutes);


app.get('/', (req, res) =>{
    res.send("Welcome to LearnMate!");
});

app.listen(PORT, () =>{
    console.log("Server is running on port "+PORT);
});