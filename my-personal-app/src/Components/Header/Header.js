import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Link to="/">Examples</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Link className="nav-link" to="/">List of countries</Link>
            <Link className="nav-link" to="/skills">Skills</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;