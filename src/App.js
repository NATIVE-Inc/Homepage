import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sponsors from './Projects/sponsors';
import ComingSoon from './Projects/comingSoon';
import Home from './Projects/Home';
import Missions from "./Projects/missions";

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/sponsors">
          <Sponsors />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/comingsoon">
          <ComingSoon />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
