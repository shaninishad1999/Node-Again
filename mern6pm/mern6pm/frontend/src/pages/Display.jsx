import axios from "axios";

import { useState, useEffect } from "react";

const Display=()=>{
  const [mydata, setMydata]= useState([]);
  const loadData=async()=>{
  let api="http://localhost:9000/employee/display";
  const response= await axios.get(api);
  setMydata(response.data);
}
useEffect(()=>{
  loadData();
}, [])
const ans= mydata.map((key)=>{
      return(
        <>
          <tr>
            <td> {key.empno} </td>
            <td> {key.name} </td>
            <td> {key.designation} </td>
            <td> {key.salary} </td>
          </tr>
        </>
      )
})
return(
        <>
          <h1>Display Page</h1>
          <table>
            <tr>
              <td> Emp no </td>
              <td> Name </td>
              <td> Designation </td>
              <td> Salary </td>
            </tr>
            {ans}
          </table>
        </>
    )
}
export default Display;