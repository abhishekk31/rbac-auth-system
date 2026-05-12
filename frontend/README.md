# RBAC Authentication System

This is a simple Role Based Authentication System built using MERN Stack.

Users can:
- Register
- Login
- Access dashboard based on role
- Logout securely

Two roles are implemented:
- USER
- ADMIN

Tech Stack Used:
- React.js
- Tailwind CSS
- Node.js
- Express.js
- MongoDB
- JWT Authentication

Features:
- JWT based authentication
- Password hashing using bcrypt
- Role based access control
- Login/Register modal
- Loading state handling
- Protected dashboard

Project Setup

Frontend:

cd frontend
npm install
npm run dev

Backend:

cd backend
npm install
npm run dev

Environment Variables

Create .env file inside backend folder

PORT=5000

MONGO_URI=your_mongodb_url

JWT_SECRET=mysecretkey