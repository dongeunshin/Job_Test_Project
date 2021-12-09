import './App.css';
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import UserInfo from "./Components/UserInfo"
import Sample from './Components/Sample';
import Test from './Components/Test';
import Finished from "./Components/Finished";
import Result from "./Components/Result";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/main">
            <UserInfo />
          </Route>
          <Route path="/sample">
            <Sample />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/finished">
            <Finished />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
