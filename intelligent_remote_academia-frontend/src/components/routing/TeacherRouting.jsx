import React from 'react';
import { Redirect, Switch } from 'react-router';

const TeacherRouting = () => {
  return (
    <Switch>
      {/* Teacher Module Links */}
      <Route path="/dashboard" component={TeacherDashboard} />
      <Route path="/diary-form" component={DiaryForm} />
      <Route path="/mark-attendance" component={AttendanceDashboard} />
      <Route exact path="/classes" component={ClassList} />
      <Route
        path="/classes/:classSlug/:subjectSlug/gradebook/mark"
        component={MarkGrade}
      />
      <Route exact path="/classes/:classSlug" component={SubjecList} />
      <Route
        path="/classes/:classSlug/:subjectSlug"
        component={SubjectDashboard}
      />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
};

export default TeacherRouting;
