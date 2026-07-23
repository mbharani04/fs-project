require("dotenv").config(); // MUST be first — loads .env variables before anything else

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// DATABASE CONNECTION
connectDB();

// MIDDLEWARE
app.use(
  cors({
    origin: "http://localhost:5173", // Vite dev server origin
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);       // POST /api/auth/register, POST /api/auth/login
app.use("/api", userRoutes);            // GET /api/user/dashboard
app.use("/api", adminRoutes);           // GET /api/admin/dashboard

// HEALTH CHECK
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});