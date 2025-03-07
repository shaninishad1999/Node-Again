import React, { useState } from "react";

const Insert = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
    console.log(input);
  };
  return (
    <div>
      <h1>Insert Data</h1>
      Enter Employee No :<input type="text" name="empno" onChange={handleInput} /> <br />
      Enter Employee Name :<input type="text" name="empno" onChange={handleInput} /> <br />
      Enter Employee designation :<input type="text" name="empno" onChange={handleInput} /> <br />
      Enter Employee salary :<input type="text" name="empno" onChange={handleInput} /> <br />

      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default Insert;
