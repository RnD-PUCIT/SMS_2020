import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import AddClassForm from '../pages/admin/classes/AddClassForm';
import ClassesFeed from '../pages/admin/classes/ClassesFeed';
import AdminDashboard from '../pages/admin/dashboard/AdminDashboard';
import ParentForm from '../pages/admin/parent/ParentForm';
import ParentsFeed from '../pages/admin/parent/ParentsFeed';
import SubjectsFeed from '../pages/admin/subjects/SubjectsFeed';
import AddSubjectForm from '../pages/admin/subjects/AddSubjectForm';
import AddTeacherForm from '../pages/admin/teacher/AddTeacherForm';
import TeachersFeed from '../pages/admin/teacher/TeachersFeed';
import StudentsFeed from '../pages/admin/students/StudentsFeed';
import AddStudentForm from '../pages/admin/students/AddStudentForm';
import ClassSubjectAllocation from '../pages/admin/classes/ClassSubjectAllocation';

const AdminRouting = () => {
  return (
    <Switch>
      {/* Admin Module Links */}
      <Route path="/dashboard" component={AdminDashboard} />
      {/* Teacher */}
      <Route exact path="/teachers" component={TeachersFeed} />
      <Route exact path="/teachers/add" component={AddTeacherForm} />
      {/* Parent */}
      <Route exact path="/parents" component={ParentsFeed} />
      <Route exact path="/parents/add" component={ParentForm} />
      {/* Student */}
      <Route exact path="/students" component={StudentsFeed} />
      <Route exact path="/students/add" component={AddStudentForm} />
      {/* Class */}
      <Route exact path="/classes" component={ClassesFeed} />
      <Route exact path="/classes/add" component={AddClassForm} />
      <Route
        exact
        path="/classes/subject-allocate"
        component={ClassSubjectAllocation}
      />
      {/* Subject */}
      <Route exact path="/subjects" component={SubjectsFeed} />
      <Route exact path="/subjects/add" component={AddSubjectForm} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
};

export default AdminRouting;
