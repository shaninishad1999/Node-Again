const express=require("express")
const routes=express.Router();
const userController=require("../controllers/userController")

routes.post("/registration",userController.userRegistration)
routes.post("/login",userController.userLogin)


module.exports=routes;