const express = require("express");
const route = express.Router();
const empController = require("../controllers/empControllers");

// Fix the route path by adding `/`
route.post("/registration", empController.userRegistration);
route.get("/display", empController.displayData);

module.exports = route;
