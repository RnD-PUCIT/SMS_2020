import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Subjects from '../../pages/subjects/subjects';
import Attendance from '../../pages/attendance/attendance';
import SubjectDetails from '../../pages/subjects/subjectDetails';
import GradeDetails from '../../pages/subjects/gradeDetails';
import Announcements from '../../pages/announcements/announcements';
import AcademicCalendar from '../../pages/academicCalendar/academicCalendar';
import FeeChallan from '../../pages/fee-challan/feeChallan';
import StudentDropdown from '../../studentDropdown/studentDropdown';
import TimeTable from '../../pages/time-table/TimeTable';
import CourseContent from './../../pages/courseContentOutline/courseContent';

import { useStyles } from '../../constants/layoutConsts';

const MainContent = ({
  subjects,
  studentList,
  selectedStudent,
  studentId,
  classId,
  sessionId,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Switch>
          <Route
            path='/subjects/:subjectSlug/:gradeTypeSlug'
            component={GradeDetails}
          />
          <Route path='/subjects/:subjectSlug' component={SubjectDetails} />

          {/* Sending subjects array as a prop to Subject component */}
          <Route
            path='/subjects'
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}>
                <Subjects
                  subjects={subjects}
                  studentId={studentId}
                  classId={classId}
                  sessionId={sessionId}
                />
              </StudentDropdown>
            )}
          />
          <Route path='/courseContent' component={CourseContent} />
          <Route
            path='/attendance'
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}>
                <Attendance
                  studentId={studentId}
                  classId={classId}
                  sessionId={sessionId}
                />
              </StudentDropdown>
            )}
          />
          <Route
            path='/announcements'
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}>
                <Announcements
                  studentId={studentId}
                  classId={classId}
                  sessionId={sessionId}
                />
              </StudentDropdown>
            )}
          />
          <Route
            path='/challan'
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}>
                <FeeChallan studentId={studentId} classId={classId} />
              </StudentDropdown>
            )}
          />
          <Route
            path='/timetable'
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}>
                <TimeTable
                  selectedStudent={selectedStudent}
                  classId={classId}
                  sessionId={sessionId}
                />
              </StudentDropdown>
            )}
          />
          <Route
            path='/academic-calendar'
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}>
                <AcademicCalendar
                  sessionId={sessionId}
                  selectedStudent={selectedStudent}
                />
              </StudentDropdown>
            )}
          />
          <Redirect from='/' to='/subjects' exact />
        </Switch>
      </div>
    </main>
  );
};

export default MainContent;
