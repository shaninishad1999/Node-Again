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

    res.send("data save succesfully");
};

const showData = async (req, res) => {
    const data = await EmpModel.find();
    console.log(data);
    res.send(data); 
};

const searchData = async (req, res) => {

      const { id } = req.params; 
      const data = await EmpModel.findById(id); // Find employee by ID
  
      if (!data) {
        return res.status(404).json({ message: "Employee not found" });
      }
  
      res.status(200).json(data); // Send employee data as response
    
  };
  

module.exports = {
    dataSave,
    showData,
    searchData
};
