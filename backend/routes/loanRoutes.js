const express = require("express");
const upload = require("../middleware/upload");
const { uploadDocuments } = require("../controllers/loanController");

const router = express.Router();

router.put(
  "/upload/:loanId",
  upload.fields([
    { name: "aadhaarCard", maxCount: 1 },
    { name: "panCard", maxCount: 1 },
    { name: "bankPassbook", maxCount: 1 },
    { name: "bankStatement", maxCount: 1 }
  ]),
  uploadDocuments
);

module.exports = router;
