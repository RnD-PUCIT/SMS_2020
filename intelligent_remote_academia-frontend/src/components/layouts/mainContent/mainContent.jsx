import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import ImageAvatar from "@material-ui/core/Avatar";

import Subjects from "../../pages/subjects/subjects";
import Attendance from "../../pages/attendance/attendance";
import SubjectDetails from "../../pages/subjects/subjectDetails";
import GradeDetails from "../../pages/subjects/gradeDetails";

import { useStyles } from "../../constants/mainContentConsts";

const MainContent = ({
  subjects,
  studentList,
  selectedStudent,
  studentId,
  classId,
  onChange,
  showDropdown,
}) => {
  const classes = useStyles();

  return (
    <main className="container">
      <div className={classes.container}>
        <div style={{ padding: "0 40px" }}>
          <StudentCard student={selectedStudent} />

          {showDropdown &&
            studentList.map((student) => {
              return <StudentCard student={student} />;
            })}
        </div>
        {/* <select onChange={onChange}>
          {studentList.map((student) => {
            return (
              <option value={student.id} key={student.id}>
                {student.firstName}
              </option>
            );
          })}
        </select> */}
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

const StudentCard = ({ student }) => {
  return (
    <React.Fragment>
      <Card>
        <CardActionArea>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={1}>
                <center>
                  <ImageAvatar style={{ width: 50, height: 50 }} />
                </center>
              </Grid>
              <Grid item md={10}>
                <Typography variant="h5" color="textSecondary">
                  {student.firstName + " " + student.lastName}
                </Typography>
                <Typography color="textSecondary">
                  {student.className + " - " + student.section}
                </Typography>
              </Grid>
              <Grid item md={1}></Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

export default MainContent;
