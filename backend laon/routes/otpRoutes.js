const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

// Store OTPs temporarily
const usersOtp = {};

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: false,
  port: 587,
  tls: {
    rejectUnauthorized: false,
  },
});

// **Send OTP Route**
router.post("/send-otp", (req, res) => {
  const { email } = req.body;
  console.log("Received request to send OTP to:", email);

  // Validate email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    console.log("Invalid email format");
    return res.status(400).json({ success: false, message: "Invalid email format" });
  }

  // Generate a 6-digit OTP
  const otp = crypto.randomInt(100000, 999999).toString();
  usersOtp[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 };

  console.log("Generated OTP:", otp);

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ success: false, message: "Error sending OTP", error: error.message });
    }

    console.log("Email sent successfully:", info.response);
    res.status(200).json({ success: true, message: "OTP sent successfully", otp });
  });
});

// **Verify OTP Route**
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  console.log("Verifying OTP for:", email, "OTP entered:", otp);

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: "Email and OTP are required" });
  }

  const userOtpData = usersOtp[email];

  if (!userOtpData) {
    console.log("No OTP found for this email");
    return res.status(400).json({ success: false, message: "OTP not sent or expired, please request a new one" });
  }

  if (Date.now() > userOtpData.expiresAt) {
    console.log("OTP expired");
    delete usersOtp[email]; // Clean up expired OTP
    return res.status(400).json({ success: false, message: "OTP has expired, please request a new one" });
  }

  if (userOtpData.otp === otp) {
    console.log("OTP verified successfully");
    delete usersOtp[email]; // Clean up used OTP
    return res.status(200).json({ success: true, message: "OTP verification successful" });
  } else {
    console.log("Invalid OTP");
    return res.status(400).json({ success: false, message: "Invalid OTP, please try again" });
  }
});

module.exports = router;
