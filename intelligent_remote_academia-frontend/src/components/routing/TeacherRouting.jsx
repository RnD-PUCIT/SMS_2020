import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import TeacherDashboard from '../pages/teacher/dashboard/TeacherDashboard';
import AttendanceDashboard from '../pages/teacher/attendance/AttendanceDashboard';
import ClassList from '../pages/teacher/classes/ClassList';
import MarkGrade from '../pages/teacher/gradebook/MarkGrade';
import SubjecList from '../pages/teacher/subjects/SubjectList';
import SubjectDashboard from '../pages/teacher/subjects/SubjectDashboard';
import DiaryDetails from '../pages/teacher/diary/DiaryDetails';
import CourseDetails from '../pages/teacher/courseUpload/courseDetail';

const TeacherRouting = () => {
  return (
    <Switch>
      {/* Teacher Module Links */}
      <Route path='/dashboard' component={TeacherDashboard} />
      <Route path='/attendance' component={AttendanceDashboard} />
      <Route exact path='/classes' component={ClassList} />
      <Route
        path='/classes/:classSlug/:subjectSlug/gradebook/mark'
        component={MarkGrade}
      />
      <Route
        path='/classes/:classSlug/:subjectSlug/diary/:diaryId'
        component={DiaryDetails}
      />
      <Route
        path='/classes/:classSlug/:subjectSlug/courseOutline/term/:termId/:title'
        component={CourseDetails}
      />
      <Route exact path='/classes/:classSlug' component={SubjecList} />
      <Route
        path='/classes/:classSlug/:subjectSlug'
        component={SubjectDashboard}
      />
      <Redirect from='/' to='/dashboard' />
    </Switch>
  );
};

export default TeacherRouting;
