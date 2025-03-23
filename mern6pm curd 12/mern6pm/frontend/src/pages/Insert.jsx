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
    }    
    return(
        <>
          <h1>Insert Page</h1>
          Enter Employee No : <input type="text" name="empno" 
          onChange={handleInput} />
          <br/>
          Enter  Name : <input type="text" name="name" 
          onChange={handleInput} />
          <br/>
          Enter Designation : <input type="text" name="designation" 
          onChange={handleInput} />
          <br/>
          Enter Salary : <input type="text" name="salary" 
          onChange={handleInput} />
          <br/>
          <button onClick={handleSubmit}> Save!!!</button>
        </>
    )
}
export default Insert;