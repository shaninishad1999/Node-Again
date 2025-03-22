const userModel = require("../models/userModel");

const userRegistration = async (req, res) => {
    console.log(req.body);

    const { fullName, email, password } = req.body;

    const users = await userModel.create({
        fullName,
        email,
        password
    });
    
    res.send("Data saved successfully");
};

const userLogin=async(req,res)=>{

    

    res.send("Okay")

}

module.exports = {
    userRegistration,userLogin
};
