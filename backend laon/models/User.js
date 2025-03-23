const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, default: "" },
  email: { type: String, unique: true, default: "" },
  password: { type: String, default: "" },
  phone: { type: String, default: "" },
  dob: { type: Date, default: "" },
  city: { type: String, default: "" },
  village: { type: String, default: "" },
  state: { type: String, default: "" },
  fullAddress: { type: String, default: "" },
  lastLogin: { type: Date, default: "" },
  role: { type: String, enum: ["user", "admin"], default: "user" }, // Default user, admin ke liye change hoga
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
