const express=require("express")
const route=express.Router();
const usercontrollers=require("../controller/userControllers")

route.post("/signin",usercontrollers.userSign)
route.post("/login",usercontrollers.userLogin)



module.exports=route