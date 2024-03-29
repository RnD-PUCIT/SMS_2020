import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './layouts/layout';
import NotFound from './pages/error/notFound';
import Login from './pages/login/login';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route path="/notFound" component={NotFound} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/" component={Layout} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
