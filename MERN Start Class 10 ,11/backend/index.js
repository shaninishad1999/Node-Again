const express=require("express")

const app=express();
const cors=require("cors")
const bodyParser=require("body-parser")
const EmpRoute=require("./routes/empRoutes");
const mongoose=require("mongoose")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb://127.0.0.1:27017/MernCrud").then(()=>{
    console.log("mongodb connected")
})

app.use("/employee",EmpRoute)

app.listen(8080,()=>{
    console.log("server is running on port 8080")
})