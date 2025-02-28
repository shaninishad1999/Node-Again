const express=require("express")

const router=express.Router();

router.get("/homepage",(req,res)=>{
    res.send("Welcome to home page")
})
router.get("/about",(req,res)=>{
    res.send("This is about page")
})
router.get("/services",(req,res)=>{
    res.send("Our services ")
})

module.exports=router;