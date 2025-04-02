import axios from "axios";

import { useState, useEffect } from "react";

const Display=()=>{
  const [mydata, setMydata]= useState([]);
  const [totalSalary, setTotalSalary] = useState(0);
  const loadData=async()=>{
  let api="http://localhost:9000/employee/display";
  const response= await axios.get(api);
  setMydata(response.data);
}
useEffect(() => {
  axios.get("http://localhost:9000/employee/salary")
      .then(res => setTotalSalary(res.data.totalSalary))
      .catch(() => setTotalSalary(0));
}, []);
useEffect(()=>{
  loadData();
}, [])
const ans= mydata.map((key)=>{
      return(
        <>
          <tr>
            <td> {key.empId} </td>
            <td> {key.empName} </td>
            <td> {key.empDep} </td>
            <td> {key.empCity} </td>
            <td> {key.empSalary} </td>
          </tr>
        </>
      )
})
return(
        <>
          <h1>Display Page</h1>
          <table border="1px" cellPadding="10">
            <tr >
              <td> Emp Id </td>
              <td>Emp Name </td>
              <td>Emp Department </td>
              <td> Emp City </td>
              <td> Emp Salary </td>
            </tr>
            {ans}
        
          </table>
            <h2 className="text-xl font-bold">Total Salary: {totalSalary}</h2>
        </>
    )
}
export default Display;