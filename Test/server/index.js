const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); // Add config() to load environment variables
const EmpRoute = require("./routes/empRoutes");

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// MongoDB Connection
mongoose.connect(process.env.DBCON)
.then(() => {
  console.log("DB Successfully connected!!!");
})
.catch((err) => {
  console.error("DB Connection Error:", err.message);
});

// Routes
app.use("/employee", EmpRoute);

// Server
const port = process.env.PORT || 9000; // Default to 9000 if PORT is not defined
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
