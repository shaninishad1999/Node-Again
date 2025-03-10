const EmpModel = require("../models/empModels");

const dataSave = async (req, res) => {
    console.log(req.body);
    const { empno, name, designation, salary } = req.body;
    
    const Employee = await EmpModel.create({
        empno: empno,
        name: name,
        designation: designation,
        salary: salary
    });
res.send(Employee)
    // res.send("data save succesfully");
};

const showData = async (req, res) => {
    const data = await EmpModel.find();
    console.log(data);
    res.send(data); 
};

const searchData = async (req, res) => {
    // These are checker to api is  working fine
    // console.log("this is okay")
    // res.send("done")


    const {eno}=req.query;
    const Employee=await EmpModel.find({empno:eno})
    res.send(Employee)


     
    
  };
  

module.exports = {
    dataSave,
    showData,
    searchData
};
