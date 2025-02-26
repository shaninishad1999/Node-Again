
// file read 

// const http=require("http");
// const fs=require("fs")
// http.createServer((req,res)=>{

//     fs.readFile("sample.txt",(err,data)=>{
//         if(err) throw err;
//         res.write(data)
//         res.end()

//     })

// }).listen(8000,()=>{
//     console.log("server runnining on port 800")
// })


// File create

// const fs = require("fs")

// fs.appendFile
//     ("New.txt", "Hello I am shanideval", (err) => {
//         if (err) throw err;
//         console.log("File created succesfully")

//     })



// File create and open

// const fs = require("fs")

// fs.open
//     ("shani.docx", "w", (err,file) => {
//         if (err) throw err;
//         console.log("File created succesfully")

//     })


// file write 

// const fs = require("fs")

// fs.writeFile
//     ("myshani.docx", "Hello i am shandeval", (err) => {
//         if (err) throw err;
//         console.log("File created succesfully")

//     })




// file delete


// thow this method i have deleted myshani.docs file
// const fs = require("fs")

// fs.unlink
//     ("myshani.docx", (err) => {
//         if (err) throw err;
//         console.log("File deleted succesfully")

//     })





// file rename


// old file name new.text
const fs = require("fs")

fs.rename
    ("New.txt","myfile.pdf", (err) => {
        if (err) throw err;
        console.log("File rename succesfully")

    })

