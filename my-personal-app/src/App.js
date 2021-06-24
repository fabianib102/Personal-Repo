import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I have to change that part...</p>
        <Button as="input" type="button" value="Input" />
      </header>
    </div>
  );
}

export default App;
