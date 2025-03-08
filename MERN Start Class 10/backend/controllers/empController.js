const EmpModel = require("../models/empModels")

const dataSave = async (req, res) => {
    console.log(req.body);
    const { empno, name, designation, salary } = req.body
    const Employee = await EmpModel.create({
        empno: empno,
        name: name,
        designation: designation,
        salary: salary
    })
    res.send("data save succesfully")
}
const showData = async (req, res) => {
    const data = await EmpModel.find();
    console.log(data)
    res.send("okkk");

}

module.exports = {
    dataSave, showData
}