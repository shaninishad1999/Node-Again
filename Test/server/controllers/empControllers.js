const EmpModel= require("../models/empModels");
const dataSave=async(req, res)=>{
    const {empId,  empName,  empDep, empCity,empSalary} = req.body;
    const Employee = await EmpModel.create({
        empId:empId,
  empName:empName,
  empDep:empDep,
  empCity:empCity,
  empSalary:empSalary
    })
      res.send("user data save succesfully");
}

const dataDisplay=async(req, res)=>
{
    const Data= await EmpModel.find();
    res.send(Data)
}

const dataSearch=async(req, res)=>{
    const { empId} = req.query;
    const Employee = await EmpModel.find({empId:empId})
    res.send(Employee);
}
const dataUpdate=async(req, res)=>{
    const Employee = await EmpModel.find();
    res.send(Employee);    
}


const dataDelete=async(req, res)=>{
    const { id } = req.query; 
    const Data = await  EmpModel.findByIdAndDelete(id);
    res.send("Record succesfully deleted!!!");

}

const dataEditDisplay=async(req, res)=>{
    const { id } = req.query;
    const Employee = await EmpModel.findById(id);
    res.send(Employee);
}


const dataEditSave = async (req, res) => {
    const { _id, empId, empName, empDep, empCity, empSalary } = req.body;

    if (!_id) {
        return res.status(400).json({ error: "Employee ID (_id) is required" });
    }

    const updatedEmployee = await EmpModel.findByIdAndUpdate(
        _id,
        { empId, empName, empDep, empCity, empSalary },
        { new: true }
    );

    res.json({ message: "Data successfully updated!", updatedEmployee });
};



const getTotalSalary = async (req, res) => {
    try {
        const employees = await EmpModel.find();
        const totalSalary = employees.reduce((sum, emp) => sum + emp.empSalary, 0);
        res.json({ totalSalary });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};





module.exports ={
    dataSave,
    dataDisplay,
    dataSearch,
    dataUpdate,
    dataDelete,
    dataEditDisplay,
    dataEditSave,
    getTotalSalary,
    getTotalSalary
   
}