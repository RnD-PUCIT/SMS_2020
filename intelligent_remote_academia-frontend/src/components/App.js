import React, { Component } from "react";
import Layout from "./layouts/layout";

import Login from "./pages/login/login";

import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/" component={Layout} />
        <Redirect from="/" to="/subjects" exact />
      </Switch>
    );
  }
}

export default App;
