// socket.js
import { io } from 'socket.io-client';

const backendUrl = import.meta.env.VITE_BACKEND_URL;


const socket = io(`${backendUrl}`, {
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});


export default socket;
