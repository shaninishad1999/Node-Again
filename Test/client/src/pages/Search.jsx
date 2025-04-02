import { useState } from "react";
import axios from "axios";
const Search=()=>{
    const [empId, setEmpId]= useState("");
    const [mydata, setMydata]=useState([]);
   const handleSubmit=async()=>{
    let api=`http://localhost:9000/employee/search?empId=${empId}`;
    const response= await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
   }

   const ans= mydata.map((key)=>{
      return(
        <>
          <div>
             <h4> Emp Id : {key.empId}</h4>
             <h4>Emp Name : {key.empName}</h4>
             <h4> Emp Deparment : {key.empDep}</h4>
             <h4> emp City : {key.empCity}</h4>
             <h4> Emp Salary : {key.empSalary}</h4>
          </div>
        </>
      )
   })

    return(
        <>
          <h1> Search Employee Records</h1>
          Enter Employee Number : <input type="text" value={empId} onChange={(e)=>{setEmpId(e.target.value)}} />
          <button onClick={handleSubmit}> search</button>
          <hr />
          {ans}
        </>
    )
}

export default Search;