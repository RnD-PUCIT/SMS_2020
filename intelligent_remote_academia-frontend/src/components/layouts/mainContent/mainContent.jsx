import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route, Switch } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Dialog,
  ListItemAvatar,
  ListItem,
  ListItemText,
  List,
  Avatar,
  DialogTitle,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
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
  onClick,
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <main className="container">
      <div className={classes.container}>
        <div>
          <StudentCard student={selectedStudent} onClick={handleClickOpen} />
          <SimpleDialog
            selectedValue={selectedStudent}
            students={studentList}
            open={open}
            onClose={handleClose}
          />
          {/* {showDropdownMenu(studentList)} */}
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

const StudentCard = ({ student, onClick }) => {
  return (
    <React.Fragment>
      <Card>
        <CardActionArea onClick={onClick}>
          <CardContent>
            <ListItem>
              <ListItemAvatar>
                <ImageAvatar />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h5" color="textSecondary">
                  {student.firstName + " " + student.lastName}
                </Typography>
              </ListItemText>
            </ListItem>
            {/* <Grid container spacing={2}>
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
            </Grid> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

function showDropdownMenu(studentList) {
  return studentList.map((student) => {
    return <StudentCard student={student} />;
  });
}

function SimpleDialog(props) {
  const { onClose, selectedValue, open, students } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select Child</DialogTitle>
      {students.map((student) => {
        return <StudentCard student={student} />;
      })}
      {/* <List>
        {students.map((student) => (
          <ListItem
            button
            onClick={() => handleListItemClick(student)}
            key={student.id}
          >
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={student.firstName} />
          </ListItem>
        ))}
      </List> */}
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default MainContent;
