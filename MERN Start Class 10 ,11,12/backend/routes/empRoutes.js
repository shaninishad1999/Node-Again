const express=require("express")
const routes=express.Router();
const stuController=require("../controllers/empController")


routes.post("/save",stuController.dataSave)
routes.get("/display",stuController.showData)
routes.get("/search",stuController.searchData)
routes.get("/update",stuController.updateData)
// routes.get("/recorddel",stuController.recordDel)

module.exports=routes