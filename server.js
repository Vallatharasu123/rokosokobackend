// server.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/conn");
const notifyRoutes = require("./routes/notifyRoutes");
const authRoutes = require("./routes/authRoutes");
const seedDatabase = require("./seeders/authSeeder");
const cors = require("cors");

const app = express();

// Enable all CORS requests
app.use(cors());

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Seed the database (only in development)
if (process.env.NODE_ENV === "development") {
  seedDatabase();
}

// Routes
app.use("/notify", notifyRoutes);
app.use("/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

// Export the app for serverless deployment
module.exports = app;
