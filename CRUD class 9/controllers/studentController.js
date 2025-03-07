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

const dataShow=async(req,res)=>{
    const Data=await stuModels.find();
    res.send(Data);
}
const serachData=async(req,res)=>{
    const {rno}=req.query;
    const Data=await stuModels.find({rollno:rno})
    res.send(Data);
}

const dataDelete=async(req,res)=>{
    const {rno}=req.query;
    const Data=await stuModels.findONeAndDelete({rollno:rno})
    res.send("Data deleted successfully")
}
const dataUpdate=async(req,res)=>{
    const {rno}=req.query;
    const {rollno,name,city,fees}=req.body;
    const Data=await stuModels.findOneAndUpdate({rollno:rno},{
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    res.send("Data deleted succesfully")
}

module.exports = {
    dataSave,dataShow,serachData,serachData,dataDelete,dataUpdate
}