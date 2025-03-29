import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = "http://localhost:9000/employee/login";
    const response = await axios.post(api, input);
    console.log(response.data);
    alert(response.data.msg);
    localStorage.setItem("username",response.data.Employee.name)
    localStorage.setItem("email",response.data.Employee.email)
    navigate("/dashboard")
  };

  const handleInput = (e) => {
    let { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Form style={{ width: "400px" }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={input.email} onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={input.password} onChange={handleInput} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
