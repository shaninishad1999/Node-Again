import { useState } from "react";
import axios from "axios";
const Search=()=>{
    const [empno, setEmpno]= useState("");
    const [mydata, setMydata]=useState([]);
   const handleSubmit=async()=>{
    let api=`http://localhost:9000/employee/search?eno=${empno}`;
    const response= await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
   }

   const ans= mydata.map((key)=>{
      return(
        <>
          <div>
             <h1> Emp Number : {key.empno}</h1>
             <h2> Name : {key.name}</h2>
             <h2> Designation : {key.designation}</h2>
             <h2> Salary : {key.salary}</h2>
          </div>
        </>
      )
   })

    return(
        <>
          <h1> Search Employee Records</h1>
          Enter Employee Number : <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
          <button onClick={handleSubmit}> search</button>
          <hr />
          {ans}
        </>
    )
}

export default Search;