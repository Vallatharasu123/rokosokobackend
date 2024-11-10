//server.js
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
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Seed the database
seedDatabase();

// Middleware
app.use(express.json());

// Routes
app.use("/notify", notifyRoutes);
app.use("/auth", authRoutes);
app.use("/", (req, res) => {
  res.send("hello from node Api");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
