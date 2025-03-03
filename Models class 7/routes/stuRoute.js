const express=require("express")
const routes=express.Router();
const stucontroller=require("../controllers/stuController")

routes.get("/home",stucontroller.stuHomePage)
routes.get("/about",stucontroller.stuAboutPage)
routes.get("/fees",stucontroller.stuFeesPage)
routes.get("/subject",stucontroller.stuSubjectPage)



module.exports=routes