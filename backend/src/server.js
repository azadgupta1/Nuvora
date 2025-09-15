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
import userRoutes from './routes/userRoutes.js';
import notificationRoutes from './routes/notificationRoutes.js';
import emailRoutes from './routes/emailRoutes.js';
import deleteRoutes from './routes/deleteAccountRoutes.js';


import './config/passport.js';
import passport from 'passport';
import session from 'express-session';
import path from 'path';

dotenv.config();

const app = express();

// ✅ Allowed origins from env or default
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : [
      'https://nuvora.onrender.com'
    ];

// Create HTTP server and Socket.IO instance
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboard_cat',
  resave: false,
  saveUninitialized: true
}));

// app.use((req, res, next) => {
//   if (req.headers['x-forwarded-proto'] !== 'https') {
//     return res.redirect('https://' + req.headers.host + req.url);
//   }
//   next();
// });



// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// ✅ CORS middleware for Express
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Preflight
app.options('*', cors());

// JSON middleware
app.use(express.json());

// ✅ Serve static files (e.g., profile pictures, etc.)
// app.use("/uploads", express.static(path.join(process.cwd(), "public", "uploads")));

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/skillExchange', skillExchangeRoutes);
app.use('/api/bookmark', bookmarkRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/chatrooms', chatRoomRoutes);
app.use('/api/users', userRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/delete', deleteRoutes);



// ✅ Socket.IO Logic
const onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  socket.on("userOnline", (userId) => {
    const stringUserId = String(userId);
    onlineUsers.set(stringUserId, socket.id);
    console.log(`🟢 User ${userId} is online`);
    io.emit("updateOnlineUsers", Array.from(onlineUsers.keys()));
  });

  socket.on("joinRoom", (roomId) => {
    socket.join(String(roomId));
    console.log(`User joined room ${roomId}`);
  });

  socket.on("sendMessage", async ({ roomId, senderId, receiverId, message }) => {
    try {
      const newMessage = await prisma.message.create({
        data: {
          roomId: parseInt(roomId),
          senderId: parseInt(senderId),
          receiverId: parseInt(receiverId),
          message,
        },
      });

      const messagePayload = {
        id: newMessage.id,
        roomId,
        senderId,
        receiverId,
        message,
        timestamp: newMessage.timestamp,
      };

      // Emit to room (chat page)
      io.to(String(roomId)).emit("receiveMessage", messagePayload);

      // Notify receiver directly if online
      const receiverSocketId = onlineUsers.get(String(receiverId));
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("chatNotification", messagePayload);
      }

    } catch (error) {
      console.error("❌ Error saving message:", error);
    }
  });

  socket.on("disconnect", () => {
    for (const [userId, socketId] of onlineUsers.entries()) {
      if (socketId === socket.id) {
        onlineUsers.delete(userId);
        console.log(`🔴 User ${userId} disconnected`);
        break;
      }
    }

    io.emit("updateOnlineUsers", Array.from(onlineUsers.keys()));
    console.log("❌ User disconnected:", socket.id);
  });
});

// Health check route
app.get('/', (req, res) => {
  res.send('🚀 Welcome to LearnMate API!');
});

// Start the server
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

// Export Socket.IO for controller usage
export { io, onlineUsers };