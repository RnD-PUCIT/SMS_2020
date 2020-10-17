import React, { Component } from 'react';
import Layout from "./layouts/layout";

import { getParentInfo } from "../services/parentInfoService";

import "./App.css";

class App extends Component {

  state= { parentInfo: null };
  componentDidMount() {
    // Get parent personal info from the service
    const parentInfo = getParentInfo();

    // Set state of the component
    this.setState({parentInfo});
  }

  render() { 
    // Pass the state to the child components 
    return ( <Layout parentInfo={this.state.parentInfo} />);
  }
}
 
export default App;

