const express=require("express")
const app=express();
const stuRoutes=require("./routes/stuRoute")
const mongoose=require("mongoose")

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB", err);
});
app.use("/students",stuRoutes)

app.listen(8080,()=>{
    console.log("server is running on port 8080")
})