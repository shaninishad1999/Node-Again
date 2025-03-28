// const mongoose = require("mongoose");
// const empSchema= mongoose.Schema({
//    empno:String,
//    name:String,
//    designation:String,
//    salary:Number
// })

// module.exports = mongoose.model("employee", empSchema);
const mongoose = require("mongoose");
const empSchema= mongoose.Schema({
  name:String,
  city:String,
  email:String,
  password:String
})

module.exports = mongoose.model("employee", empSchema);