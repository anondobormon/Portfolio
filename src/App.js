import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AllProjects from "./Components/AllProjects/AllProjects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/allProjects">
          <AllProjects></AllProjects>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
