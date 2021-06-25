import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#example">Examples</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="tables">Fetch and Tables</Nav.Link>
              <Nav.Link href="skills">Skills</Nav.Link>
              <Nav.Link href="other-codes">Some other code</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I have to change that part...</p>
        <Button as="input" type="button" value="Input" />
      </header>


    </div>
  );
}

export default App;
