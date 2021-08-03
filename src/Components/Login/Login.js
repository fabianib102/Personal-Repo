import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import '../../assets/css/Login.scss'

function Login() {
  const auth = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    auth.login({ userName: email, otherField: "otro" });
    history.push("/");
  };

  return (
    <div>
      <Container className="col-4">
        <Form.Group className="mb-3 label-txt-login">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 label-txt-login">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="success" onClick={handleLogin}>
          LogIn
        </Button>
      </Container>
    </div>
  );
}

export default Login;
