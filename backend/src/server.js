// import express from 'express';
// import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes.js';
// import skillRoutes from './routes/skillRoutes.js';
// import bookingRoutes from './routes/bookingRoutes.js';
// import skillExchangeRoutes from './routes/skillExchangeRoutes.js';
// import bookmarkRoutes from './routes/bookmarkRoutes.js';
// import reviewRoutes from './routes/reviewRoutes.js';
// import cors from 'cors';

// dotenv.config();

// const PORT = process.env.PORT || 5000;
// const app = express();

// app.use(express.json());
// app.use(cors());


// app.use('/api/auth', authRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/skillExchange', skillExchangeRoutes);
// app.use('/api/bookmark', bookmarkRoutes);
// app.use('/api/review', reviewRoutes);


// app.get('/', (req, res) =>{
//     res.send("Welcome to LearnMate!");
// });

// app.listen(PORT, () =>{
//     console.log("Server is running on port "+PORT);
// });


import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import skillExchangeRoutes from './routes/skillExchangeRoutes.js';
import bookmarkRoutes from './routes/bookmarkRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';

import messageRoutes from './routes/messageRoutes.js';

import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Socket.IO Setup
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/skillExchange', skillExchangeRoutes);
app.use('/api/bookmark', bookmarkRoutes);
app.use('/api/review', reviewRoutes);

app.use('/api/messages', messageRoutes);

// Socket.IO Logic
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on('sendMessage', ({ roomId, senderId, message }) => {
    console.log(`Message in Room ${roomId}: ${message}`);
    io.to(roomId).emit('receiveMessage', { senderId, message, timestamp: new Date() });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to LearnMate!');
});

// Start server
httpServer.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
