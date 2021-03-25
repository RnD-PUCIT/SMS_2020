import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AdminDashboard from '../pages/admin/dashboard/AdminDashboard';
import ParentForm from '../pages/admin/parent/ParentForm';
import AddTeacherForm from '../pages/admin/teacher/AddTeacherForm';
import TeachersFeed from '../pages/admin/teacher/TeachersFeed';

const AdminRouting = () => {
  return (
    <Switch>
      {/* Admin Module Links */}
      <Route path="/dashboard" component={AdminDashboard} />
      <Route exact path="/teachers" component={TeachersFeed} />
      <Route exact path="/teachers/add" component={AddTeacherForm} />
      <Route path="/add-parent" component={ParentForm} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
};

export default AdminRouting;
