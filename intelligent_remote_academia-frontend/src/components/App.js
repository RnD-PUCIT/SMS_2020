import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './layouts/layout';

import Login from './pages/login/login';

import './App.css';
import NotFound from './pages/error/notFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/notFound" component={NotFound} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/" component={Layout} />
        <Redirect from="/" to="/subjects" exact />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
