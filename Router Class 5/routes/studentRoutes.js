const express=require("express")

const router=express.Router();

router.get("/home",(req,res)=>{
    res.send("Welcome to home page")
})
router.get("/subject",(req,res)=>{
    res.send("Our subjects!!!")
})
router.get("/fees",(req,res)=>{
    res.send("Our College fees")
})

module.exports=router;