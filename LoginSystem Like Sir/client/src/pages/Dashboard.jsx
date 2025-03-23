import React from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.clear()
        navigate("/")


    }
  return (
    <div>Dashboard
        Welcome to dashboard
        <br />

        {localStorage.getItem("username")} <br />
        {localStorage.getItem("useremail")}
<br /><br />

        <button onClick={logout}>logout</button>
    </div>
  )
}

export default Dashboard