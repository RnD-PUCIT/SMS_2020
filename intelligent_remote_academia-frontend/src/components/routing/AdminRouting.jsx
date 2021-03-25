import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AdminDashboard from '../pages/admin/dashboard/AdminDashboard';
import ParentForm from '../pages/admin/parent/ParentForm';

const AdminRouting = () => {
  return (
    <Switch>
      {/* Admin Module Links */}
      <Route path="/dashboard" component={AdminDashboard} />
      <Route path="/add-parent" component={ParentForm} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
};

export default AdminRouting;
