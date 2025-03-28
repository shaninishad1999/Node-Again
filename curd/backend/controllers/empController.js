const EmpModel= require("../models/empModels");
const dataSave=async(req, res)=>{
    const {empno, name, designation, salary} = req.body;
    const Employee = await EmpModel.create({
        empno:empno,
        name:name,
        designation:designation,
        salary:salary
    })
      res.send("data save!!!");
}

const dataDisplay=async(req, res)=>
{
    const Data= await EmpModel.find();
    res.send(Data)
}

const dataSearch=async(req, res)=>{
    const { eno} = req.query;
    const Employee = await EmpModel.find({empno:eno})
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


const dataEditSave=async(req, res)=>{
   const  {_id, empno, name, designation, salary} = req.body;
    const Employee = await EmpModel.findByIdAndUpdate(_id,{
        empno:empno,
        name:name,
        designation:designation,
        salary:salary

    } )
 
   res.send("data succesfully updated!!!");
}

const UserDataSave=async(req, res)=>{
    const { name, city,  email,password} = req.body;
    const Employee = await EmpModel.create({
        name:name,
        city:city,
        email: email,
        password:password
    })
      res.send({ msg: "User registered successfully!" });
}

const UserLogin=async(req,res)=>{
   const {email,password}=req.body;
   const Employee=await EmpModel.findOne({email:email})

  if(!Employee){

      res.send({ msg: "Invalid email" });
    }
    
    if(Employee.password!=password){
        res.send({ msg: "Invalid password" });
        
    }
    
    res.send({ msg: "Loign Succesfully", Employee:Employee });
    
}

module.exports ={
    dataSave,
    dataDisplay,
    dataSearch,
    dataUpdate,
    dataDelete,
    dataEditDisplay,
    dataEditSave,
    UserDataSave,UserLogin
}