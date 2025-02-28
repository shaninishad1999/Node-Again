const express=require("express")

const router=express.Router();

router.get("/detail",(req,res)=>{
    res.send("Welcome to Details page")
})
router.get("/salary",(req,res)=>{
    res.send("Our Salary page!!!")
})
router.get("/desination",(req,res)=>{
    res.send("Our  desinaation page")
})

module.exports=router;