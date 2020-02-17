import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css';
import Login from './components/Login'
import Friends from './components/Friends'
import Friend from './components/Friend'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login" >Login</Link>
          </li>
          <li>
            <Link to="/friends">My Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute path="/friends/:id" component={Friend} />
          <Route path="/login" component={Login} />
          {/* <Route component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
