import './App.css';
import Header from './Components/Header/Header';
import Fetch from './Components/Fetch/Fetch';
import Skills from './Components/Skills/Skills';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const routes = (
    <Switch>
      <Route exact path="/">
        <Fetch />
      </Route>
      <Route exact path="/skills">
        <Skills />
      </Route>
    </Switch>
  );

  return (
    <div className="App">
      <Router>
        <Header />
        {routes}
      </Router>
    </div>
  );
}

export default App;
