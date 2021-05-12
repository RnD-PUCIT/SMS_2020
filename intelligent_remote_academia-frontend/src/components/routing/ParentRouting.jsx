import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import Subjects from "../pages/subjects/subjects";
import Attendance from "../pages/attendance/attendance";
import SubjectDetails from "../pages/subjects/subjectDetails";
import GradeDetails from "../pages/subjects/gradeDetails";
import Announcements from "../pages/announcements/announcements";
import AcademicCalendar from "../pages/academicCalendar/academicCalendar";

import FeeChallan from "../pages/fee-challan/feeChallan";
import StudentDropdown from "../studentDropdown/studentDropdown";
import TimeTable from "../pages/time-table/TimeTable";
import ApplicationForm from "../pages/applicationForm/ApplicationForm";
import ApplicationsDashboard from "../pages/applicationForm/ApplicationsDashboard";
import CourseContent from "./../pages/courseContentOutline/courseContent";
import Chat from "../pages/chat/Chat";

const ParentRouting = ({
  subjects,
  studentList,
  selectedStudent,
  studentId,
  classId,
  sessionId,
  onClick,
}) => {
  return (
    <Switch>
      <Route
        path="/subjects/:subjectSlug/:gradeTypeSlug"
        component={GradeDetails}
      />
      <Route path="/subjects/:subjectSlug" component={SubjectDetails} />
      <Route path="/courseContent" component={CourseContent} />
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
      <Route path="/messages" component={Chat} />
      <Redirect from="/" to="/subjects" exact />
    </Switch>
  );
};

export default ParentRouting;
