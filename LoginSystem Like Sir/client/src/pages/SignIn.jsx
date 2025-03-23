import React, { useState } from 'react'
import axios from "axios"
const SignIn = () => {
    const [input,setInput]=useState({})

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setInput((prevValues) => ({
            ...prevValues, // Keep existing values
            [name]: value, // Update the specific field
        }));
    };
    const handleSubmit= async(e)=>{
        e.preventdefault;
        console.log(input);

        let api="http://localhost:9000/users/signin";
        const response= await axios.post(api,input)
        console.log(response.data)
        

    }


  return (
    <div>


Enter Full Name : <input type="text" name='fullname' onChange={handleChange} /> <br /> <br />
Enter Email : <input type="text" name='email'  onChange={handleChange} /> <br /> <br />
Enter Phone : <input type="text" name='phone'  onChange={handleChange} /> <br /> <br />
Enter Password : <input type="text" name='password'  onChange={handleChange} /> <br /> <br />
Enter Confirm Password : <input type="text" name='password'  onChange={handleChange} /> <br /> <br />

<button onClick={handleSubmit}> Submit</button>


    </div>
  )
}

export default SignIn