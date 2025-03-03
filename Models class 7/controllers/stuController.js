const stuModel=require("../models/stuModel")

const stuHomePage=(req,res)=>{
    res.send("<h1>This is home page</h1>");
}
const stuAboutPage=(req,res)=>{
    res.send("<h1>This is About page</h1>");
}
const stuFeesPage=(req,res)=>{
    res.send("<h1>This is fees page</h1>");
}
const stuSubjectPage=(req,res)=>{
    res.send("<h1>This is subject page</h1>");
}




module.exports={
    stuHomePage,stuAboutPage,stuFeesPage,stuSubjectPage
}