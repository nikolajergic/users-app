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
import Navbar from './components/NavBar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
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
