const dataSave=async(req,res)=>{
    console.log(req.body);
    res.send("data save succesfully")
}

module.exports={
    dataSave
}