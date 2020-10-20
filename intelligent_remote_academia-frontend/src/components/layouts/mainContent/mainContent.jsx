import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Subjects from '../../pages/subjects/subjects';
import Attendance from '../../pages/attendance/attendance';
import SubjectDetails from '../../pages/subjects/subjectDetails';
import Exams from '../../pages/subjects/exams';
import Tests from '../../pages/subjects/tests';
import Login from '../../pages/login/login';

import { useStyles } from '../../constants/mainContentConsts';

const MainContent = ({ subjects, studentId, classId }) => {
  const classes = useStyles();

  return (
    <main className='container'>
      <div className={classes.container}>
        <Switch>
          <Route
            path='/subjects/:studentId/:subjectId/:classId/tests'
            component={Tests}
          />
          <Route
            path='/subjects/:studentId/:subjectId/:classId/exams'
            component={Exams}
          />
          <Route
            path='/subjects/:studentId/:subjectId/:classId'
            component={SubjectDetails}
          />
          {/* Sending subjects array as a prop to Subject component */}
          <Route
            path='/subjects'
            render={() => (
              <Subjects
                subjects={subjects}
                studentId={studentId}
                classId={classId}
              />
            )}
          />
          <Route path='/login' component={Login} />
          <Route path='/attendance' component={Attendance} />
          <Redirect from='/' to='/subjects' exact />
        </Switch>
      </div>
    </main>
  );
};

export default MainContent;
