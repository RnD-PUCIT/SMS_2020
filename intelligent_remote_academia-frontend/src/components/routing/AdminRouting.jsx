import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ClassesFeed from '../pages/admin/classes/ClassesFeed';
import AdminDashboard from '../pages/admin/dashboard/AdminDashboard';
import ParentForm from '../pages/admin/parent/ParentForm';
import ParentsFeed from '../pages/admin/parent/ParentsFeed';
import AddTeacherForm from '../pages/admin/teacher/AddTeacherForm';
import TeachersFeed from '../pages/admin/teacher/TeachersFeed';

const AdminRouting = () => {
  return (
    <Switch>
      {/* Admin Module Links */}
      <Route path="/dashboard" component={AdminDashboard} />
      <Route exact path="/teachers" component={TeachersFeed} />
      <Route exact path="/teachers/add" component={AddTeacherForm} />
      <Route exact path="/parents" component={ParentsFeed} />
      <Route exact path="/parents/add" component={ParentForm} />
      <Route exact path="/classes" component={ClassesFeed} />
      <Route exact path="/classes/add" component={ParentForm} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
};

export default AdminRouting;
