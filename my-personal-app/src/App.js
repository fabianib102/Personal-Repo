import "./App.css";
import Header from "./Components/Header/Header";
import Fetch from "./Components/Fetch/Fetch";
import Skills from "./Components/Skills/Skills";
import DetailCountry from "./Components/DetailCountry/DetailCountry";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import Login from "./Components/Login/Login";
import AuthProvider from "./auth/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const routes = (
    <Switch>
      <PrivateRouter exact path="/" component={Fetch} />
      <PrivateRouter exact path="/country/:code" component={DetailCountry} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          {routes}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
