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
    // console.log(req.body);

    const {email,password}=req.body;
    const user=await userModel.findOne({email:email})
    if(!user){
       res.send("Invalid Email")
       
    }else if(user.password!=password){
        res.send("Invalid password")
        
    }else{
        res.send({user:user,msg:"You are login succefully"})
    }

}

module.exports = {
    userRegistration,userLogin
};
