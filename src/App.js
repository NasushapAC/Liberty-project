// Imp React Imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

// CSS imports
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Pages Imports
import Home from "../src/page/index.jsx";
import page404 from '../src/page/404/404';
import pool2 from "../src/page/pool1/pool1";
import ldrpool from "../src/page/ldr_pool/ldr_pool";
import Pool1 from "../src/page/pool2/pool2.js";
import migration from "../src/page/migration/migration.js";
import auction from "../src/page/auction/auction";
import createBadp from "../src/page/createBadp/createBadp";
import display from "../src/page/display/display";
import Soon from "../src/page/comingSoon/comingSoon";

// Actual Page render
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/pool1" component={Pool1} />
          <Route path="/ldrpool" component={ldrpool} />
          <Route path="/pool2" component={pool2} />
          <Route path="/migration" component={migration} />
          <Route path="/auction" component={auction} />
          <Route path="/createBadp" component={createBadp} />
          <Route path="/display" component={display} />
          <Route path="/soon" component={Soon} />
          <Route path="/404" component={page404}></Route>
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}
export default App;
