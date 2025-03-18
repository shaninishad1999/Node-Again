const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 

  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  
  ifscCode: { type: String },
  accountNumber: { type: String },

  loanType: { type: String, required: true },
  loanId: { type: String, unique: true, required: true },
  applicationDate: { type: Date, default: Date.now },

  amount: { type: Number, required: true },
  tenure: { type: Number, required: true },
  interestRate: { type: Number, required: true, default: 10 },
  emiAmount: { type: Number },
  totalRepayable: { type: Number },

  status: { type: String, enum: ["Pending", "Approved", "Rejected", "Disbursed"], default: "Pending" },
  appliedAt: { type: Date, default: Date.now },
  approvedAt: { type: Date },
  rejectedAt: { type: Date },
  disbursedAt: { type: Date },

  repaymentStatus: { type: String, enum: ["Ongoing", "Completed", "Defaulted"], default: "Ongoing" },
  remarks: { type: String },

  // File Uploads (Stored as URLs)
  aadhaarCard: { type: String },
  panCard: { type: String },
  bankPassbook: { type: String },
  bankStatement: { type: String }
});

const Loan = mongoose.model("Loan", LoanSchema);
module.exports = Loan;
