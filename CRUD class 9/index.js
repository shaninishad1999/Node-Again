const express=require("express")

const app=express();
const StuRoute=require("./routes/studentRoutes")
const bodyParser=require("body-parser")
const mongoose =require("mongoose")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost:27017/studentDB')


app.use("/students",StuRoute)

app.listen("8080",()=>{
    console.log("server running on port 8080")
})