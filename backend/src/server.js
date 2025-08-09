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



// import express from 'express';
// import { createServer } from 'http';
// import { Server } from 'socket.io';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import prisma from './config/prismaClient.js';

// // Routes
// import authRoutes from './routes/authRoutes.js';
// import skillRoutes from './routes/skillRoutes.js';
// import bookingRoutes from './routes/bookingRoutes.js';
// import skillExchangeRoutes from './routes/skillExchangeRoutes.js';
// import bookmarkRoutes from './routes/bookmarkRoutes.js';
// import reviewRoutes from './routes/reviewRoutes.js';
// import messageRoutes from './routes/messageRoutes.js';
// import chatRoomRoutes from './routes/chatRoomRoutes.js';
// import userRoutes from './routes/userRoutes.js';
// import { getUserById } from './controllers/userController.js';
// import './config/passport.js';
// import passport from 'passport';
// import session from 'express-session';

// dotenv.config();
// const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST'],
//   },
// });

// // Session middleware
// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true
// }));

// // Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());



// app.use(cors());
// app.use(express.json());

// // REST API Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/skills', skillRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/skillExchange', skillExchangeRoutes);
// app.use('/api/bookmark', bookmarkRoutes);
// app.use('/api/review', reviewRoutes);
// app.use('/api/messages', messageRoutes);
// app.use('/api/chatrooms', chatRoomRoutes);
// app.use('/api/users', userRoutes);

// // Socket.IO Logic
// io.on('connection', (socket) => {
//   console.log('✅ User connected:', socket.id);

//   socket.on('joinRoom', (roomId) => {
//     socket.join(String(roomId));
//     console.log(`User joined room ${roomId}`);
//   });

//   socket.on('sendMessage', async ({ roomId, senderId, receiverId, message }) => {
//     try {
//       const newMessage = await prisma.message.create({
//         data: {
//           roomId: parseInt(roomId),
//           senderId: parseInt(senderId),
//           receiverId: parseInt(receiverId),
//           message,
//         },
//       });

//       io.to(String(roomId)).emit('receiveMessage', {
//         id: newMessage.id,
//         roomId,
//         senderId,
//         receiverId,
//         message,
//         timestamp: newMessage.timestamp,
//       });
//     } catch (error) {
//       console.error('❌ Error saving message:', error);
//     }
//   });

//   socket.on('disconnect', () => {
//     console.log('❌ User disconnected:', socket.id);
//   });
// });


// const onlineUsers = new Map();

// io.on("connection", (socket) => {
//   console.log("✅ User connected:", socket.id);

//   // Handle user login and register socket
//   socket.on("userOnline", (userId) => {
//     const stringUserId = String(userId);      // added
//     onlineUsers.set(userId, socket.id);
//     console.log(`🟢 User ${userId} is online`);

//     io.emit("updateOnlineUsers", Array.from(onlineUsers.keys())); // broadcast online users
//   });

//   socket.on("joinRoom", (roomId) => {
//     socket.join(String(roomId));
//     console.log(`User joined room ${roomId}`);
//   });

//   socket.on("sendMessage", async ({ roomId, senderId, receiverId, message }) => {
//     try {
//       const newMessage = await prisma.message.create({
//         data: {
//           roomId: parseInt(roomId),
//           senderId: parseInt(senderId),
//           receiverId: parseInt(receiverId),
//           message,
//         },
//       });

//       io.to(String(roomId)).emit("receiveMessage", {
//         id: newMessage.id,
//         roomId,
//         senderId,
//         receiverId,
//         message,
//         timestamp: newMessage.timestamp,
//       });
//     } catch (error) {
//       console.error("❌ Error saving message:", error);
//     }
//   });

//   socket.on("disconnect", () => {
//     // Remove from online users map
//     for (const [userId, id] of onlineUsers.entries()) {
//       if (id === socket.id) {
//         onlineUsers.delete(userId);
//         console.log(`🔴 User ${userId} disconnected`);
//         break;
//       }
//     }

//     io.emit("updateOnlineUsers", Array.from(onlineUsers.keys()));
//     console.log("❌ User disconnected:", socket.id);
//   });
// });



// app.get('/', (req, res) => {
//   res.send('Welcome to LearnMate!');
// });

// const PORT = process.env.PORT || 3000;
// httpServer.listen(PORT, () => {
//   console.log('🚀 Server is running on port ' + PORT);
// });

// export { io, onlineUsers };






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
import { getUserById } from './controllers/userController.js';
import './config/passport.js';
import passport from 'passport';
import session from 'express-session';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Middlewares
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
app.use('/api/users', userRoutes);

// ---------------------------
// ✅ Socket.IO Logic (Merged)
// ---------------------------

const onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  // Track user online
  socket.on("userOnline", (userId) => {
    const stringUserId = String(userId);
    onlineUsers.set(stringUserId, socket.id);
    console.log(`🟢 User ${userId} is online`);
    io.emit("updateOnlineUsers", Array.from(onlineUsers.keys()));
  });

  // Join chat/message room
  socket.on("joinRoom", (roomId) => {
    socket.join(String(roomId));
    console.log(`User joined room ${roomId}`);
  });

  // Handle sending messages
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

      io.to(String(roomId)).emit("receiveMessage", {
        id: newMessage.id,
        roomId,
        senderId,
        receiverId,
        message,
        timestamp: newMessage.timestamp,
      });
    } catch (error) {
      console.error("❌ Error saving message:", error);
    }
  });

  // Handle disconnect
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

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to LearnMate!');
});

// Start server
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log('🚀 Server is running on port ' + PORT);
});

// Export for use in controllers
export { io, onlineUsers };















// const onlineUsers = {};
// const userLastSeen = {};

// io.on('connection', (socket) => {
//   console.log('✅ User connected:', socket.id);

//   socket.on('userOnline', (userId) => {
//     onlineUsers[userId] = socket.id;
//     console.log(`🟢 User ${userId} is online`);
//     io.emit('onlineUsers', Object.keys(onlineUsers));
//   });

//   socket.on('joinRoom', (roomId) => {
//     socket.join(String(roomId));
//     console.log(`User joined room ${roomId}`);
//   });

//   socket.on('sendMessage', async ({ roomId, senderId, receiverId, message }) => {
//     try {
//       const newMessage = await prisma.message.create({
//         data: {
//           roomId: parseInt(roomId),
//           senderId: parseInt(senderId),
//           receiverId: parseInt(receiverId),
//           message,
//         },
//       });

//       io.to(String(roomId)).emit('receiveMessage', {
//         id: newMessage.id,
//         roomId,
//         senderId,
//         receiverId,
//         message,
//         timestamp: newMessage.timestamp,
//       });
//     } catch (error) {
//       console.error('❌ Error saving message:', error);
//     }
//   });

//   socket.on('disconnect', () => {
//     const userId = Object.keys(onlineUsers).find(
//       (key) => onlineUsers[key] === socket.id
//     );
//     if (userId) {
//       delete onlineUsers[userId];
//       userLastSeen[userId] = new Date();
//       console.log(`🔴 User ${userId} disconnected`);
//       io.emit('onlineUsers', Object.keys(onlineUsers));
//       io.emit('lastSeenUpdate', { userId, lastSeen: userLastSeen[userId] });
//     }
//   });
// });

