import React, { Component } from 'react';
import Layout from "./layouts/layout";

import { getDashboardInfo } from "../services/parentDashboardService";

import "./App.css";

class App extends Component {

  state= { dashboardInfo: null };
  componentDidMount() {
    // Get parent personal info from the service
    const dashboardInfo = getDashboardInfo();

    // Set state of the component
    this.setState({dashboardInfo});
  }

  render() { 
    // Pass the state to the child components 
    return ( <Layout dashboardInfo={this.state.dashboardInfo} />);
  }
}
 
export default App;

