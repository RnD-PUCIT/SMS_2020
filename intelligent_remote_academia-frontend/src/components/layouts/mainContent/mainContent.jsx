import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Subjects from "../../pages/subjects/subjects";
import Attendance from "../../pages/attendance/attendance";
import SubjectDetails from "../../pages/subjects/subjectDetails";
import GradeDetails from "../../pages/subjects/gradeDetails";

import { useStyles } from "../../constants/mainContentConsts";

const MainContent = ({
  subjects,
  studentList,
  studentId,
  classId,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <main className="container">
      <div className={classes.container}>
        <select onChange={onChange}>
          {studentList.map((student) => {
            return (
              <option value={student.id} key={student.id}>
                {student.firstName}
              </option>
            );
          })}
        </select>
        <Switch>
          <Route
            path="/subjects/:subjectSlug/:gradeTypeSlug"
            component={GradeDetails}
          />
          <Route path="/subjects/:subjectSlug" component={SubjectDetails} />
          {/* Sending subjects array as a prop to Subject component */}
          <Route
            path="/subjects"
            render={() => (
              <Subjects
                subjects={subjects}
                studentId={studentId}
                classId={classId}
              />
            )}
          />
          <Route
            path="/attendance"
            render={() => (
              <Attendance studentId={studentId} classId={classId} />
            )}
          />
          <Redirect from="/" to="/subjects" exact />
        </Switch>
      </div>
    </main>
  );
};

export default MainContent;
