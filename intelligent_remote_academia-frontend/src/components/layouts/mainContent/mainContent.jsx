import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Subjects from '../../pages/subjects/subjects';
import Attendance from '../../pages/attendance/attendance';
import SubjectDetails from '../../pages/subjects/subjectDetails';
import GradeDetails from '../../pages/subjects/gradeDetails';
import Announcements from '../../pages/announcements/announcements';

import { useStyles } from '../../constants/mainContentConsts';
import FeeChallan from '../../pages/fee-challan/feeChallan';

const MainContent = ({ subjects, studentId, classId, sessionId }) => {
  const classes = useStyles();
  return (
    <main className='container'>
      <div className={classes.container}>
        <Switch>
          <Route
            path='/subjects/:subjectSlug/:gradeTypeSlug'
            component={GradeDetails}
          />
          <Route path='/subjects/:subjectSlug' component={SubjectDetails} />
          <Route
            path='/announcements'
            render={() => (
              <Announcements
                studentId={studentId}
                classId={classId}
                sessionId={sessionId}
              />
            )}
          />

          {/* Sending subjects array as a prop to Subject component */}
          <Route
            path='/subjects'
            render={() => (
              <Subjects
                subjects={subjects}
                studentId={studentId}
                classId={classId}
                sessionId={sessionId}
              />
            )}
          />
          <Route
            path='/attendance'
            render={() => (
              <Attendance
                studentId={studentId}
                classId={classId}
                sessionId={sessionId}
              />
            )}
          />
          <Route
            path='/challan'
            render={() => (
              <FeeChallan studentId={studentId} classId={classId} />
            )}
          />
          <Redirect from='/' to='/subjects' exact />
        </Switch>
      </div>
    </main>
  );
};

export default MainContent;
