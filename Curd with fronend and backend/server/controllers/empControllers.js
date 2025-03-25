const empModel = require("../models/empModels");

const userRegistration = async(req, res) => {
  console.log(req.body);
  // res.send("okay");
  const { fullname, email, phone, password, confirmPassword } = req.body;

  // Save data to MongoDB
  const newEmployee = new empModel({
    fullname,
    email,
    phone,
    password,
    confirmPassword,
  });

  await newEmployee.save(); // Save to database
  res.send("Employee Registered Successfully");

};

const displayData = async (req, res) => {
  const employees = await empModel.find(); // Fetch employees from MongoDB
  res.send(employees); // Send the response
};

const deleteData = (req, res) => {
  const { id } = req.params; // URL se id extract kar rahe hain
  empModel.findByIdAndDelete(id).then((deletedEmployee) => {
    if (deletedEmployee) {
      res.send({ message: "Employee deleted successfully" });
    } else {
      res.status(404).send({ message: "Employee not found" });
    }
  });
};



module.exports = {
  userRegistration,
  displayData, // ✅ Export the function
  deleteData
};
