const Loan = require("../models/Loan");

exports.uploadDocuments = async (req, res) => {
  try {
    const { loanId } = req.params;
    const loan = await Loan.findById(loanId);

    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }

    // Check uploaded files
    if (req.files.aadhaarCard) loan.aadhaarCard = req.files.aadhaarCard[0].path;
    if (req.files.panCard) loan.panCard = req.files.panCard[0].path;
    if (req.files.bankPassbook) loan.bankPassbook = req.files.bankPassbook[0].path;
    if (req.files.bankStatement) loan.bankStatement = req.files.bankStatement[0].path;

    await loan.save();
    res.status(200).json({ message: "Documents uploaded successfully", loan });

  } catch (error) {
    res.status(500).json({ message: "Error uploading documents", error });
  }
};
