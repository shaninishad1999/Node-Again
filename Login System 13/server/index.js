const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoute");
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1:27017/LoginSystem").then(()=>{
    console.log("DB Succesfully connected!!!");
})

app.use("/users", userRoutes);



app.listen(9000, ()=>{
    console.log("Server run on 9000 port!");
})