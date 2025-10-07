# 🌐 Nuvora

[![PERN Stack](https://img.shields.io/badge/Stack-PERN-blue?style=for-the-badge&logo=postgresql&logoColor=white)]()
[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-brightgreen?style=for-the-badge&logo=github)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)]()
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-orange?style=for-the-badge&logo=github)]()

**Nuvora** is an open-source **skill exchange platform** built on the **PERN stack** (PostgreSQL, Express, React, Node.js) with **Prisma ORM**.  
It allows users to **list skills, request exchanges, book sessions, chat in real-time, get instant notifications, and receive email updates** via Brevo

**Live Demo:** [nuvora.onrender.com](https://nuvora.onrender.com)  

---

## ✨ Features

- 👤 **User Authentication** – JWT & Google OAuth login  
- 📚 **Skill Management** – Add, edit, delete skills (offered & wanted)  
- 📅 **Bookings System** – Request skills, accept/decline with availability validation  
- 💬 **Real-Time Chat** – Socket.io based direct messaging  
- 🔔 **Notifications** – Real-time + email (Brevo)  
- ⭐ **Reviews & Ratings** – Rate & review skills  
- 📌 **Bookmarks** – Save and manage favorite skills  
- ☁️ **Media Storage** – Profile & skill images via **Cloudinary**  
- 🗄️ **Database** – PostgreSQL on **Neon DB**  
- 🌍 **Hosting** – Frontend & Backend on **Render Free Tier**  

---

## 🏗️ System Architecture

![System Architecture](./frontend/src/assets/Nuvora_System_Architecture.png)  

---

## 🗂️ Database Schema (ER Diagram)

![Database Schema](./frontend/src/assets/Nuvora_DB_Schema.png)  

---

## ⚙️ Tech Stack

**Frontend**
- React 19, Vite, TailwindCSS, Framer Motion  
- React Router, Socket.io-client, Axios  
- Toast Notifications (react-hot-toast, react-toastify)  

**Backend**
- Node.js, Express.js  
- Prisma ORM + PostgreSQL (Neon DB)  
- JWT, Passport (Google OAuth)  
- Socket.io (real-time chat & notifications)  
- Brevo (email service)  
- Cloudinary (media storage)  

**Hosting**
- Render (Frontend + Backend)  
- Neon (Database)  
- Cloudinary (Assets)  

---

## 📂 Project Structure

```text
Nuvora/
│── backend/                 # Express.js + Prisma ORM backend
│   ├── prisma/             # Prisma schema & migrations
│   ├── src/                # Controllers, routes, middleware
│   ├── .env                # Backend environment variables
│   └── package.json

│── frontend/                # React + Vite + Tailwind frontend
│   ├── src/                # Components, pages, hooks
│   ├── .env                # Frontend environment variables
│   └── package.json
|
│── README.md
```


---

## 🔑 Environment Variables

### Backend (`/backend/.env`)
```env
PORT=3000
JWT_SECRET=your_secret_key
DATABASE_URL="postgresql://username:password@host:5432/dbname?schema=public"

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
SESSION_SECRET=your_session_secret

ALLOWED_ORIGINS=http://localhost:5173,https://nuvora.onrender.com

FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3000

BREVO_API_KEY=your_brevo_api_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloud_key
CLOUDINARY_API_SECRET=your_cloud_secret
```

### Frontend (`/frontend/.env`)
```env
VITE_BACKEND_URL=http://localhost:3000
```

## 🛠️ Getting Started (Local Development)

1. **Clone the repo**
   ```bash
   git clone https://github.com/azadgupta1/nuvora.git
   cd nuvora
   ```
2. **Setup Backend**
   ```bash
    cd backend
    npm install
    npx prisma migrate dev --name init
    npm run dev
    ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

📌 Frontend → http://localhost:5173
📌 Backend → http://localhost:3000

🤝 Contributing
Nuvora is open source and welcomes contributions! 🎉

1. **Fork the repository**

2. **Create a new feature branch:**
   ```bash
   git checkout -b feature-name


3. **Commit your changes:**
   ```bash
   git commit -m "Added new feature"


4. **Push to your branch:**
   ```bash
   git push origin feature-name

5. **Open a Pull Request :)**

## 📦 Deployment

Frontend: Render  
Backend: Render  
Database: NeonDB  
Media Storage: Cloudinary  

---

## License

This project is licensed under the MIT License.


