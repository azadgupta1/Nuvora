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

// import prisma from './config/prismaClient.js';


// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import express from 'express';
// import dotenv from 'dotenv';
// import authRoutes from './routes/authRoutes.js';
// import skillRoutes from './routes/skillRoutes.js';
// import bookingRoutes from './routes/bookingRoutes.js';
// import skillExchangeRoutes from './routes/skillExchangeRoutes.js';
// import bookmarkRoutes from './routes/bookmarkRoutes.js';
// import reviewRoutes from './routes/reviewRoutes.js';

// import messageRoutes from './routes/messageRoutes.js';
// import chatRoomRoutes from './routes/chatRoomRoutes.js';

// import cors from 'cors';

// dotenv.config();

// const PORT = process.env.PORT || 5000;
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Socket.IO Setup
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: '*',
//     methods: ['GET', 'POST'],
//   },
// });

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/skillExchange', skillExchangeRoutes);
// app.use('/api/bookmark', bookmarkRoutes);
// app.use('/api/review', reviewRoutes);

// app.use('/api/messages', messageRoutes);
// app.use('/api/chatrooms', chatRoomRoutes);

// // Socket.IO Logic
// io.on('connection', (socket) => {
//   console.log('User connected:', socket.id);

//   socket.on('joinRoom', (roomId) => {
//     socket.join(roomId);
//     console.log(`User joined room: ${roomId}`);
//   });



// socket.on('sendMessage', async ({ roomId, senderId, receiverId, message }) => {
//   console.log(`Message in Room ${roomId}: ${message}`);

//   try {
//     await prisma.message.create({
//       data: {
//         roomId: parseInt(roomId),
//         senderId: parseInt(senderId),
//         receiverId: parseInt(receiverId), // <- ✅ correct receiver
//         message,
//       },
//     });

//     io.to(roomId).emit('receiveMessage', {
//       senderId,
//       receiverId,
//       message,
//       timestamp: new Date(),
//     });
//   } catch (error) {
//     console.error('Error saving message:', error);
//   }
// });


//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//   });
// });

// app.get('/', (req, res) => {
//   res.send('Welcome to LearnMate!');
// });

// // Start server
// httpServer.listen(PORT, () => {
//   console.log('Server is running on port ' + PORT);
// });



import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import prisma from './config/prismaClient.js';

// Routes
import authRoutes from './routes/authRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import skillExchangeRoutes from './routes/skillExchangeRoutes.js';
import bookmarkRoutes from './routes/bookmarkRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import chatRoomRoutes from './routes/chatRoomRoutes.js';

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

// REST API Routes
app.use('/api/auth', authRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/skillExchange', skillExchangeRoutes);
app.use('/api/bookmark', bookmarkRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/chatrooms', chatRoomRoutes);

// Socket.IO Logic
io.on('connection', (socket) => {
  console.log('✅ User connected:', socket.id);

  socket.on('joinRoom', (roomId) => {
    socket.join(String(roomId));
    console.log(`User joined room ${roomId}`);
  });

  socket.on('sendMessage', async ({ roomId, senderId, receiverId, message }) => {
    try {
      const newMessage = await prisma.message.create({
        data: {
          roomId: parseInt(roomId),
          senderId: parseInt(senderId),
          receiverId: parseInt(receiverId),
          message,
        },
      });

      io.to(String(roomId)).emit('receiveMessage', {
        id: newMessage.id,
        roomId,
        senderId,
        receiverId,
        message,
        timestamp: newMessage.timestamp,
      });
    } catch (error) {
      console.error('❌ Error saving message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to LearnMate!');
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log('🚀 Server is running on port ' + PORT);
});
