const express=require("express")
const route=express.Router()
const stucontroler=require("../controllers/stuController")


route.get("/home",stucontroler.homePage)
route.get("/subject",stucontroler.stuSub)
route.get("/fees",stucontroler.stuFees)

module.exports=route