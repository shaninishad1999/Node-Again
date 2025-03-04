const express=require("express")
const routes=express.Router();
const stuController=require("../controllers/studentControllers")


routes.post("/save",stuController.dataSave)





module.exports=routes