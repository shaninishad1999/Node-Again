const express = require("express");
const { register, login, getUser, updateUser, showData } = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();

// Register and login routes
router.post("/register", register);
router.post("/login", login);
router.get("/showdata", showData); // Get all users

// Protect these routes with authentication
router.get("/user-details", auth, getUser); // Get user by ID
router.put("/update/:id", updateUser); // Update user by ID

module.exports = router;
