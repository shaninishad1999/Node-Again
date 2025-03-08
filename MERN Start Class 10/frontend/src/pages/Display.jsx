import axios from "axios";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:8080/employee/display";
    const response = await axios.get(api);
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = data.map((key) => {
    return (
      <>
        <tr key={key.empno}>
          <td>{key.empno}</td>
          <td>{key.name}</td>
          <td>{key.designation}</td>
          <td>{key.salary}</td>
          <td></td>
        </tr>
      </>
    );
  });

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>empno</th>
            <th>empname</th>
            <th>emp Designation</th>
            <th>emp salary</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Display;
