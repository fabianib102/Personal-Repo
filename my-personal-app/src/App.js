import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Fetch from './Components/Fetch/Fetch';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#example">Examples</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="tables">Fetch examples of countries</Nav.Link>
              <Nav.Link href="skills">Skills</Nav.Link>
              <Nav.Link href="other-codes">Som  e other code</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Fetch />
    </div>
  );
}

export default App;
