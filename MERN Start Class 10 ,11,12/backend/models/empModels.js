const mongoose =require("mongoose")

const empSchema=mongoose.Schema({
    empno:String,
    name:String,
    designation:String,
    salary:Number
})

module.exports=mongoose.model("employees",empSchema)