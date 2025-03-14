require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
require("./db/conn");
const PORT = process.env.PORT || 6005;

app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:6005",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


