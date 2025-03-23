import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const handleSubmit=async()=>{
    let api="http://localhost:9000/users/login";
    const response=await axios.post(api,{email:email,password:password})
    console.log(response.data)
    localStorage.setItem("username",response.data.userLogin.fullname) 
    localStorage.setItem("useremail",response.data.userLogin.email)
    alert(response.data.msg)
    navigate("/dashboard")


  }

  return (
    <div>



      Enter Email <input type="text" name="email" onChange={(e)=>{setEmail(e.target.value)}} />
      Enter pass <input type="text" name="password" onChange={(e)=>{setPassword(e.target.value)}} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login