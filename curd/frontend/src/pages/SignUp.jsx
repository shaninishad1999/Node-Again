import React, { useState } from "react";
import axios from "axios"; 
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SignUp = () => {
  const [data, setMydata] = useState({ name: "", city: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = "http://localhost:9000/employee/signup";
    const response = await axios.post(api, data);
    setMydata({ name: "", city: "", email: "", password: "" }); 
    alert(response.data.msg);
  };

  const handleInput = (e) => {
    let { name, value } = e.target;
    setMydata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Form style={{ width: "400px" }} onSubmit={handleSubmit}> 
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="name" value={data.name} onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" name="city" value={data.city} onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={handleInput} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SignUp;
