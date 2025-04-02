import axios from "axios";
import { useState, useEffect } from "react";
import editimg from "../images/edit.png";
import delimg from "../images/delete.png";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const [mydata, setMydata] = useState([]);
    const navigate= useNavigate();
    const loadData=async()=>{
        let api="http://localhost:9000/employee/update";
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
   }

   useEffect(()=>{
    loadData();
   }, []);

   const recordDel=async(id)=>{
    let api=`http://localhost:9000/employee/recorddel/?id=${id}`;
    const response= await axios.get(api);
    alert(response.data);
    loadData();
   }


   const recordEdit=(id)=>{
    navigate(`/editdata/${id}`);
   }

   const ans= mydata.map((key)=>{
      return(
        <>
          <tr>
            <td> {key.empId} </td>
            <td> {key.empName} </td>
            <td> {key.empDep} </td>
            <td> {key.empCity} </td>
            <td> {key.empSalary} </td>
            <td>
                <a href="#" onClick={()=>{recordEdit(key._id)}}>
                Edit
                </a>
                
            </td> &nbsp;
            <td> 
            <a href="#" onClick={()=>{recordDel(key._id)}}>
               Delete
            </a>
            </td>
          </tr>
        
        </>
      )
   })


    return(
        <>
          <h1> Update your records</h1>  
          <table border="1px" cellPadding="10px">
             <tr>
                <th> Emp no.</th>
                <th>Emp Name</th>
                <th> Emp Department</th>
                <th>Emp City</th>
                <th>Emp Salary</th>
                <th> </th>
                <th> </th>
             </tr>
             {ans}
            </table>      
        </>
    )
}

export default Update;