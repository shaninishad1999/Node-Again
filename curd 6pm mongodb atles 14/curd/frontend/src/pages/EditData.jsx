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
    alert("Data succesfully updated!!!");
    loadData();
  }


    return(
        <>
          <h1> Edit record : </h1>
          Edit Employee no. <input type="text" name="empno" value={mydata.empno} onChange={handleInput} />
          <br />
          Edit Name. <input type="text" name="name" value={mydata.name}
          onChange={handleInput} />
          <br />
          Edit Designation. <input type="text" name="designation" value={mydata.designation} onChange={handleInput} />
          <br/>
          Edit Salary. <input type="text" name="salary" value={mydata.salary} onChange={handleInput} />
          <br />
          <button onClick={handleSubmit}> Update Save!!!</button>
        </>
    )
}

export default EditData;