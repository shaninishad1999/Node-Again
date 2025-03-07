const express=require("express")
const routes=express.Router();
const stuController=require("../controllers/empController")


routes.post("/save",stuController.dataSave)

module.exports=routes