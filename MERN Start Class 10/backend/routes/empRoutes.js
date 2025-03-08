const express=require("express")
const routes=express.Router();
const stuController=require("../controllers/empController")


routes.post("/save",stuController.dataSave)
routes.get("/display",stuController.showData)
routes.get("/search",stuController.searchData)

module.exports=routes