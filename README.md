#  Notes App

A full-stack **Notes application** with **Google OAuth login**, built using **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend. Users can log in with Google, create, edit, delete, and view notes.  

The app is **deployed online** and fully responsive.  

---

## Features

- Google OAuth login
- JWT-based authentication
- Create, update, delete, and view notes
- Responsive design (Tailwind CSS)
- Toast notifications for actions
- Modal-based edit experience
- Separate frontend and backend folders for clean architecture

---

## Folder Structure
```
notes-app/
├── backend/ # Node.js + Express backend
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── authController.js
│ │ └── noteController.js
│ ├── middleware/
│ │ └── auth.js
│ ├── models/
│ │ ├── Note.js
│ │ └── User.js
│ ├── routes/
│ │ ├── auth.js
│ │ └── notes.js
│ ├── server.js
│ └── package.json
│
├── frontend/ # React + Vite frontend
│ ├── src/
│ │ ├── api/ # Axios API calls
│ │ ├── components/ # Reusable components (NoteCard, EditModal, etc.)
│ │ ├── pages/ # Pages (Login, NotesList, CreateNote)
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── package.json
│ └── vite.config.js
│
└── README.md
```

---

##  Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```
2. Install deoendencies
```bash
npm install
```
3. Create .env
```bash
MONGO_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<your-jwt-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
FRONTEND_URL=https://your-frontend-domain.vercel.app
```
4. Start server locally
```bash
node server.js
```
---
## Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Create .env file with the following variables:
```bash
VITE_API_URL=http://localhost:3000/api
VITE_GOOGLE_CLIENT_ID=<your-google-client-id>
```
4.Start the frontend locally:
```bash
npm run dev
```
Frontend will run at http://localhost:5173.

---

##  Live Demo

**Link:** [https://my-notes-teal.vercel.app/](https://my-notes-teal.vercel.app/)  

