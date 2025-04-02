import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input, setInput] = useState({});
    const handleInput=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         setInput(values=>({...values, [name]:value}));
         console.log(input);
    }
    const handleSubmit=async()=>{
        let api="http://localhost:9000/employee/save";
        const response = await axios.post(api, input);
        console.log(response.data);
        alert("user data save succesfully")
    }    
    return(
        <>
          <h1>Insert Page</h1>
          Enter Employee No : <input type="text" name="empId" 
          onChange={handleInput} />
          <br/> <br />
          Enter  Name : <input type="text" name="empName" 
          onChange={handleInput} />
          <br/> <br />
          Enter Departement : <input type="text" name="empDep" 
          onChange={handleInput} />
          <br/> <br />
          Enter City : <input type="text" name="empCity" 
          onChange={handleInput} /> <br /> <br />
          Enter Salary : <input type="text" name="empSalary" 
          onChange={handleInput} /> <br />
          <br/>
          <button onClick={handleSubmit}> Save</button>
        </>
    )
}
export default Insert;