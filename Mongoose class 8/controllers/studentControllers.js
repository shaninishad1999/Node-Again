const stuModels = require("../models/studentModels")

const dataSave = (req, res) => {
    const {rollno,name,city,fees}=req.body;
    const Student=stuModels.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    console.log(req.body)
    res.send("data save succesfully save")
}


module.exports = {
    dataSave
}