const mongoose = require("mongoose");
const empSchema= mongoose.Schema({
  empId:String,
  empName:String,
  empDep:String,
  empCity:String,
  empSalary:Number
})

module.exports = mongoose.model("employee", empSchema);
