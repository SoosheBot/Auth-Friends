import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Friends from './components/Friends';
import PrivateRoute from "./components/PrivateRoute";
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className='App-logo' alt='friends-logo' />
          <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protected'>Friends</Link>
          </li>
        </ul>
        </header>
        <Switch>
          <PrivateRoute path='/protected' component={Friends} />
          <Route path='/login' component={Login} />
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
