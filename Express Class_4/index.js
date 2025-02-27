const express=require("express");
const app=express();

app.get("/home",(req,res)=>{
    res.send("<h1>This is my Home Page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>This is my about Page</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>This is my Contact Page</h1>")
})
app.post("/contact",(req,res)=>{
    res.send("<h1>This is my Contact Page</h1>")
})
app.delete("/delete",(req,res)=>{
    res.send("<h1>This is my delete Page</h1>")
})

app.listen(8080,()=>{
    console.log("server is running on port 8080");
    
})





































