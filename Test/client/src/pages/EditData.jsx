import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const EditData=()=>{
    const [mydata, setMydata]= useState({});
    const {id} = useParams();
    const loadData=async()=>{
        let api=`http://localhost:9000/employee/editdatadisplay/?id=${id}`;
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

  useEffect(()=>{
    loadData();
  }, [])

  const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setMydata(values=>({...values, [name]:value}));
       console.log(mydata);
  }


  const handleSubmit=async()=>{
    let api="http://localhost:9000/employee/editdatasave";
    const response = await axios.post(api, mydata);
    alert("User Data succesfully updated!!!");
    loadData();
  }


    return(
        <>
          <h1> Edit User Data : </h1>
         Emp Id. <input type="text" name="empId" value={mydata.empId} onChange={handleInput} />
          <br />
          Emp Name  <input type="text" name="empName" value={mydata.empName}
          onChange={handleInput} />
          <br />
          Emp  Department. <input type="text" name="empDep" value={mydata.empDep} onChange={handleInput} />
          <br/>
          Emp City. <input type="text" name="empCity" value={mydata.empCity} onChange={handleInput} />
          <br />
          Emp Salary. <input type="text" name="empSalary" value={mydata.empSalary} onChange={handleInput} />
          <br />
          <button onClick={handleSubmit}> User data update</button>
        </>
    )
}

export default EditData;