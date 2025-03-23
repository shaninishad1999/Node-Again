const mongoose=require("mongoose")

const userSchema= mongoose.Schema({
    fullname:String,
    email:String,
    phone:Number,
    password:String
})

module.exports=mongoose.model("users",userSchema)