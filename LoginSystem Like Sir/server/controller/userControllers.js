const userModel = require("../models/userModels");

const userSign = async (req, res) => {
  console.log(req.body);
  const { fullname, email, password, phone } = req.body;
  const userSignIn = await userModel.create({
    fullname: fullname,
    email: email,
    password: password,
    phone: phone,
  });
  res.send("data save succesfully");
};

const userLogin=async(req,res)=>{
  console.log(req.body)
 const {email,password}=req.body;
 const userLogin=await userModel.findOne({email:email})
 {
  if(!userLogin){
    res.send("Invalid user")
  }else if(userLogin.password!=password){
    res.send("Invalid password")
  }else{
    res.send({userLogin:userLogin, msg:"user Login succesfully"})
  }
 }


}

module.exports = {
  userSign,userLogin
};
