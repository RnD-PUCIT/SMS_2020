import React, { Component } from "react";
import Layout from "./layouts/layout";

import Login from "./pages/login/login";

import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

import http from "../services/httpService";

class App extends Component {
  state = { dashboardInfo: null };

  async componentDidMount() {
    // Get parent personal info from the service
    const { data } = await http.get(`/subjects`);

    const { dashboard: dashboardInfo } = data;

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
