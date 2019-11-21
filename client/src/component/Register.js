import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { signup } from "../service/main";

const Register = ({history}) => {
  const [body, setState] = useState({
    email: "",
    password: ""
  });
  const handleChange = (event) => {
    setState({ ...body, email: event.target.value.trim() });
  }
  const handleChange2 = event => {
    setState({ ...body, password: event.target.value.trim() });
  };
  const handleOk = function(res) {
    console.log(res)
    const token = res.headers['x-auth'];
    if (token == null) {
      return;
    }

    localStorage.setItem("token", token);
    history.push('/home')      
  }
  const handleErr = function(err) {
      // nsole.log(err);
  }
  const handleForm = event => {
    event.preventDefault();
    console.log(body);
    signup(body, handleOk, handleErr)
  };

  return (
    <Form onSubmit={handleForm}>
      <h1>Register</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleChange}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="pass" type="password" placeholder="Password" onChange={handleChange2}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Register;
