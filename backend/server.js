

// backend/server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

 
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

 
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));  

 
app.use((err, req, res, next) => {
  console.error("Server error:", err.stack);
  res.status(500).json({ 
    error: "Something went wrong!",
    message: err.message 
  });
});
 
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(` API Health: http://localhost:${PORT}/api/health`);
});
