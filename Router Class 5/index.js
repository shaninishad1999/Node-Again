const express=require("express")
const stuRoute=require("./routes/studentRoutes")
const empRoute=require("./routes/employeeRoutes")
const userRoute=require("./routes/studentRoutes")
const app=express();
app.use("/students",stuRoute)
app.use("/employees",empRoute)
app.use("/students",userRoute)


app.listen(8080,()=>{
    console.log("server running on port 8080")
})