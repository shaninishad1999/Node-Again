const express=require("express")

const app=express();
const stuRoute=require("./routes/stuRoute")

app.use("/students",stuRoute)


app.listen(8080,()=>{
    console.log("sever is runnin on port 8080")
})