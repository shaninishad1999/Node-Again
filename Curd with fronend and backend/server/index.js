const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables
const empRoute = require("./routes/empRoutes"); // Import Employee Routes

const app = express();
app.use(express.json()); // Middleware to parse JSON requests
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/EmployeeData";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

// Default Route
app.use("/employees", empRoute); 

// Start Server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
