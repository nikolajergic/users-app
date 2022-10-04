import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import CreateUser from './pages/CreateUser';
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/CreateUser">Create User</Link></li>
            <li><Link to="/Users">Users</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/CreateUser">
            < CreateUser/>
          </Route>
          <Route exact path="/Users">
            <Users/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
