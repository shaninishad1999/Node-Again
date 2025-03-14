import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Update = () => {
    const [mydata,setMydata]=useState([])

    const loadData=async()=>{
        let api="http://localhost:8080/employee/update";
        const response=await axios.get(api)
        console.log(response.data)
        setMydata(response.data)


    }

    useEffect(()=>{
        loadData();
    },[])

const recordDel=async(id)=>{
    // alert(id)
    let api=`http://localhost:8080/employee/recorddel/?id=${id}`
 const response =await axios.get(api)

}



const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.empno}</td>
            <td>{key.name}</td>
            <td>{key.designation}</td>
            <td>{key.salary}</td>
            
            &nbsp;  <button onClick={()=>{recordDel(key.id)}}>Delete</button> &nbsp;
            &nbsp;<button>Edit</button> &nbsp;
           
        </tr>
        </>
    )
})



  return (
    <div>

<h1>Updated data</h1>

<table border="1">
    <tr>
        <th>emp no</th>
        <th>emp name</th>
        <th>emp designation</th>
        <th>emp salary</th>
        <th>Action Button</th>
       
          
        
    </tr>
    {ans}
</table>


    </div>
  )
}

export default Update