const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Import routes
const userRoutes = require("./routes/userRoutes");
const otpRoutes = require("./routes/otpRoutes");
const loanRoutes=require("./routes/loanRoutes");
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Database connection error:", err));

// Routes
app.use("/api/users", userRoutes);
app.use("/loan", loanRoutes);
app.use("/api/otp", otpRoutes); // OTP routes

const PORT = process.env.PORT || 6050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
