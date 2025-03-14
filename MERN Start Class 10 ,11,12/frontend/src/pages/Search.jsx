import axios from 'axios';
import React, { useState } from 'react';

const Search = () => {
  const [empno, setEmpno] = useState("");
  const [mydata, setMydata] = useState([]);

  const hs = async () => {
    const api = `http://localhost:8080/employee/search?eno=${empno}`; 
    const res = await axios.get(api);
    console.log(res.data);
    setMydata(res.data);
  };


  const ans = mydata.map((key, index) => {
    return (
      <div key={index}>
        <h1>Empno: {key.empno}</h1>
        <h2>Name: {key.name}</h2>
        <h2>Designation: {key.designation}</h2>
        <h2>Salary: {key.salary}</h2>
      </div>
    );
  });

  return (
    <div>
      <center>
        <h1>This is Search Page</h1>
        Enter emp no: 
        <input
          type="text"
          value={empno}
          onChange={(e) => setEmpno(e.target.value)}
        />
        <button onClick={hs}>Search Here</button>
      </center>
     
      {mydata.length > 0 ? ans : <p>No data found for this employee number.</p>}
    </div>
  );
};

export default Search;