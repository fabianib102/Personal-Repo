import React from 'react';
import { Container, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

function Login() {

  const auth = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    auth.login({userName: "fabianib102", otherField: "otro"});
    history.push("/")
  }

  return (
    <div>
      <Container className="justify-content-md-center col-4">
        <Button variant="success" onClick={handleLogin}>LogIn</Button>
      </Container>
    </div>
  );
}

export default Login;