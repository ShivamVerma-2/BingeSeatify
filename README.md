🎬 BingeSeatify

A full-stack MERN movie ticket booking web application that allows users to browse movies, view show details, select seats, and manage bookings with a smooth and responsive UI.

🚀 Live Demo

(Add deployment link here once hosted)

📌 Features
👤 User Features

Browse movies and view detailed information

Watch movie trailers

Select show dates and timings

Interactive seat selection system

Book movie tickets

View booking history

Manage favorite movies

🛠 Admin Features (Planned / In Progress)

Add and manage movies

Create and manage shows

View active shows and bookings

Dashboard with revenue and booking insights

🧑‍💻 Tech Stack
Frontend

React.js

React Router DOM

Tailwind CSS

Lucide React Icons

React Hot Toast

Backend

Node.js

Express.js

Database

MongoDB (MongoDB Atlas)

🏗 Project Structure
BingeSeatify/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/        # Backend (planned / implemented)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/BingeSeatify.git

2️⃣ Frontend Setup
cd BingeSeatify/client
npm install
npm run dev

3️⃣ Backend Setup (when available)
cd server
npm install
npm start

🔐 Environment Variables

Create a .env file in the server directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

🧠 Key Concepts Implemented

Component-based architecture

Client-side routing

Conditional rendering

Dynamic route parameters

State management with hooks

Seat booking logic design

Scalable folder structure

📸 Screenshots

(Add screenshots of Home, Movie Details, Seat Selection pages)

📈 Future Improvements

Payment gateway integration

Authentication & authorization

Real-time seat locking

Admin dashboard

Deployment with CI/CD

🤝 Contributing
