// const http=require("http");
// http.createServer((req,res)=>{
//     res.write("This is my first server runmnig on port 8000");
//     res.end()
// },).listen(8000)

const http=require("http");

http.createServer((req,res)=>{

    res.write("<h1>This is my first server runmnig on port 8000</h1>");
    res.write("<h2>Hi This is kjhjkghjk now working</h2>");
    res.write("<h3>This is my first server runmnig </h3>");
    res.end()

}).listen(8000)