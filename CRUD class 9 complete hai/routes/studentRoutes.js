const express=require("express");
const route=express.Router();
const StuController=require("../controllers/studentController")

route.post("/save",StuController.dataSave)
route.get("/showdata",StuController.dataShow)
route.get("/searchdata",StuController.serachData)
route.delete("/deletedata",StuController.dataDelete)
route.put("/updatedata",StuController.dataUpdate)

module.exports=route;