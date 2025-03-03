

const homePage=(req,res)=>{
    res.send("this is Home page");
}

const stuFees=(req,res)=>{
    res.send("this is fees page");
}

const stuSub=(req,res)=>{
    res.send("this is subject page");
}

module.exports={
    homePage,
    stuFees,
    stuSub
}