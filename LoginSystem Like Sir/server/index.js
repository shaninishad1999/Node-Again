const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const userRoute = require("./routes/userRoutes");
const dbURI = "mongodb://localhost:27017/Crud_P";

// Enable CORS
app.use(cors()); // Allows all origins
// app.use(cors({ origin: "http://localhost:3000" })); // Restrict to specific origin if needed

// Middleware to parse incoming request bodies
app.use(express.json()); // Parses JSON data
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if MongoDB connection is successful
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.use("/users", userRoute);

// Start the server
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
