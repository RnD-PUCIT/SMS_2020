import React, { useEffect } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import Subjects from '../../pages/subjects/subjects';
import Attendance from '../../pages/attendance/attendance';
import SubjectDetails from '../../pages/subjects/subjectDetails';
import GradeDetails from '../../pages/subjects/gradeDetails';
import Announcements from '../../pages/announcements/announcements';
import AcademicCalendar from '../../pages/academicCalendar/academicCalendar';

import { useStyles } from '../../constants/layoutConsts';
import FeeChallan from '../../pages/fee-challan/feeChallan';
import StudentDropdown from '../../studentDropdown/studentDropdown';
import TimeTable from '../../pages/time-table/TimeTable';
import ApplicationForm from '../../pages/applicationForm/ApplicationForm';
import ApplicationsDashboard from '../../pages/applicationForm/ApplicationsDashboard';
import TeacherDashboard from '../../pages/teacher/dashboard/TeacherDashboard';
import DiaryForm from '../../pages/teacher/diary/DiaryForm';
import AttendanceDashboard from '../../pages/teacher/attendance/AttendanceDashboard';
import ClassList from '../../pages/teacher/classes/ClassList';
import SubjecList from '../../pages/teacher/subjects/SubjectList';
import SubjectDashboard from '../../pages/teacher/subjects/SubjectDashboard';
import MarkGrade from '../../pages/teacher/gradebook/MarkGrade';

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

  useEffect(()=> {
    
  }, [])

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <Switch>
          <Route
            path="/subjects/:subjectSlug/:gradeTypeSlug"
            component={GradeDetails}
          />
          <Route path="/subjects/:subjectSlug" component={SubjectDetails} />

          {/* Teacher Module Links */}
          <Route path="/teachers" component={TeacherDashboard} />
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

          {/* Sending subjects array as a prop to Subject component */}
          <Route
            path="/subjects"
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}
              >
                <Subjects
                  subjects={subjects}
                  studentId={studentId}
                  classId={classId}
                  sessionId={sessionId}
                />
              </StudentDropdown>
            )}
          />
          <Route
            path="/attendance"
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}
              >
                <Attendance
                  studentId={studentId}
                  classId={classId}
                  sessionId={sessionId}
                />
              </StudentDropdown>
            )}
          />
          <Route
            path="/announcements"
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}
              >
                <Announcements
                  studentId={studentId}
                  classId={classId}
                  sessionId={sessionId}
                />
              </StudentDropdown>
            )}
          />
          <Route
            path="/challan"
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}
              >
                <FeeChallan studentId={studentId} classId={classId} />
              </StudentDropdown>
            )}
          />
          <Route
            path="/timetable"
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}
              >
                <TimeTable
                  selectedStudent={selectedStudent}
                  classId={classId}
                  sessionId={sessionId}
                />
              </StudentDropdown>
            )}
          />
          <Route
            path="/academic-calendar"
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}
              >
                <AcademicCalendar
                  sessionId={sessionId}
                  selectedStudent={selectedStudent}
                />
              </StudentDropdown>
            )}
          />
          <Route
            path="/applications"
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}
              >
                <ApplicationsDashboard
                  sessionId={sessionId}
                  selectedStudent={selectedStudent}
                />
              </StudentDropdown>
            )}
            exact
          />
          <Route
            path="/applications/new"
            render={() => (
              <StudentDropdown
                studentList={studentList}
                onClick={onClick}
                selectedStudent={selectedStudent}
              >
                <ApplicationForm
                  sessionId={sessionId}
                  selectedStudent={selectedStudent}
                />
              </StudentDropdown>
            )}
          />
          <Redirect from="/" to="/subjects" exact />
        </Switch>
      </div>
    </main>
  );
};

export default MainContent;
