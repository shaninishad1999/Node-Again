const express = require("express");
const route= express.Router();
const EmpController= require("../controllers/empController");

route.post("/save", EmpController.dataSave);
route.get("/display", EmpController.dataDisplay);
route.get("/search", EmpController.dataSearch);
route.get("/update", EmpController.dataUpdate);
route.get("/recorddel", EmpController.dataDelete);
route.get("/editdatadisplay", EmpController.dataEditDisplay);
route.post("/editdatasave", EmpController.dataEditSave);
module.exports=route;