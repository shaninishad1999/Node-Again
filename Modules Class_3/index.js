const http=require("http")
const bpl=require("./bhopal")
const uc=require("uppercase")
http.createServer((req,res)=>{
    res.write(uc("<h1>This is Create Server</h1>"))
    res.write(bpl.bhopal())
    res.write(bpl.myName())
    res.end();
}).listen(9000,()=>{
    console.log("server running on port 9000")
})


// start express 


