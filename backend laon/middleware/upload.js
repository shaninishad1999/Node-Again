const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// Multer storage setup using Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "loan-documents", // Folder in Cloudinary
    format: async (req, file) => "pdf" || "jpg" || "png", // Allowed formats
    public_id: (req, file) => `${Date.now()}-${file.originalname}`
  }
});

const upload = multer({ storage });

module.exports = upload;
