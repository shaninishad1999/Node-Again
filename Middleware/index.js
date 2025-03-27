const express = require("express")

const app = express()

// middleware 
app.use("/", (req, res, next) => {
    console.log("This is First !!!!!!!!!")
    // res.send("Next page")
    next()
})

//app handler
app.get("/", (req, res, next) => {
    console.log("This is root functionality")
    res.send("Home page")
    next()
})

//app handler
app.get("/about", (req, res) => {
    console.log("about console")
    res.send("About  page!!!!!!!!!!!!")

})

// middleware 
app.use("/", (req, res, next) => {
    console.log("This is root functionality 2")
    // res.send("Next page")
    next()
})
// middleware 
app.use("/", (req, res) => {
    console.log("This is root functionality 3")
    // res.send("Next page")

})



app.get("/contact", (req, res, next) => { console.log("Contact console 1 "); next() },
    (req, res, next) => { console.log("contact console 2"); next() },
    (req, res) => { res.send("contact last ") })




app.listen(9000, () => {
    console.log("server is running port 9000")
})