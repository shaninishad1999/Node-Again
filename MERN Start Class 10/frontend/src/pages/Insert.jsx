import React, { useState } from 'react';
import axios from "axios"
const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async() => {
    console.log("Submitted Data:", input);
    let api="http://localhost:8080/employee/save";
    const responise =await axios.post(api,input)
    // console.log(input)
  };

  return (
    <div>
      <h1>Insert Data</h1>
      Enter Employee No : <input type="text" name="empno" onChange={handleInput} /> <br />
      Enter Employee Name : <input type="text" name="empname" onChange={handleInput} /> <br />
      Enter Employee Designation : <input type="text" name="designation" onChange={handleInput} /> <br />
      Enter Employee Salary : <input type="text" name="salary" onChange={handleInput} /> <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Insert;
