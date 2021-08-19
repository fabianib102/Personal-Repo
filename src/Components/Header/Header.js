import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../auth/useAuth';

function Header() {

  const auth = useAuth()

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/">Demo React</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Link className="nav-link" to="/">List of countries (Private secction)</Link>
            <Link className="nav-link" to="/skills">Lift State Up</Link>
            <Navbar.Text>
              {auth.userData ? `Welcome: ${auth.userData.userName}` : 'You are not login'}
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;