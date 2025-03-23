const mongoose=require("mongoose")

const EmpSchema=new mongoose.Schema({
    fullname:String,
    email:String,
    phone:Number,
    password:String
})

module.exports=mongoose.model("Employees",EmpSchema)