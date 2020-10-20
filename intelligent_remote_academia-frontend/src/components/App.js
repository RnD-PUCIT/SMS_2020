import React, { Component } from "react";
import Layout from "./layouts/layout";

import Login from "./pages/login/login";

import { getDashboardInfo } from "../services/parentDashboardService";

import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

class App extends Component {
  state = { dashboardInfo: null };

  componentDidMount() {
    // Get parent personal info from the service
    const dashboardInfo = getDashboardInfo();

    // Set state of the component
    this.setState({ dashboardInfo });
  }

  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route
          path="/"
          // Pass the state to the child components
          render={(props) => (
            <Layout dashboardInfo={this.state.dashboardInfo} />
          )}
        />
        <Redirect from="/" to="/subjects" exact />
      </Switch>
    );
  }
}

export default App;
