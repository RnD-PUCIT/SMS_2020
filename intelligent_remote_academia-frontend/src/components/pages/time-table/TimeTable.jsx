import React, { Component } from "react";
import {
  Chip,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@material-ui/core";

import useStyles from "../../../styles/timeTableStyles";
import ReactToPrint from "react-to-print";
import http from "../../../services/httpService";

class TimeTable extends Component {
  render() {
    const { selectedStudent, classId, sessionId } = this.props;
    return (
      <div>
        <Grid container justify="flex-end">
          <ReactToPrint
            trigger={() => {
              return (
                <Button
                  color="primary"
                  variant="contained"
                  style={{ marginBottom: "20px" }}
                >
                  Download as pdf
                </Button>
              );
            }}
            content={() => this.componentRef}
          />
        </Grid>
        <TimeTableBody
          ref={(el) => (this.componentRef = el)}
          selectedStudent={selectedStudent}
          classId={classId}
          sessionId={sessionId}
        />
      </div>
    );
  }
}

export default TimeTable;

class TimeTableBody extends Component {
  state = { timeTable: [] };

  async componentDidMount() {
    this.getTimeTable();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.selectedStudent.id !== prevProps.selectedStudent.id) {
      this.getTimeTable();
    }
  }

  render() {
    const { selectedStudent } = this.props;
    if (this.state.timeTable) {
      return (
        <Schedule
          classInfo={selectedStudent}
          timeTable={this.state.timeTable}
        />
      );
    }
    return null;
  }

  getTimeTable = async () => {
    const { classId, sessionId } = this.props;
    const url = `/timetable?classId=${classId}&sessionId=${sessionId}`;
    try {
      const { data } = await http.get(url);
      const { timetable: timeTable } = data;
    } catch (error) {}
  };
}

const Schedule = ({ classInfo, timeTable }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={3}>
        <Typography variant="h5" className={classes.heading}>
          Time Table - {`${classInfo.className} (${classInfo.section})`}
        </Typography>

        <Paper variant="outlined">
          <TableContainer>
            <Grid item xs={12}>
              <Table>
                {/* <TableHead>
                              <TableRow>
                                {days.map((day, index) => {
                                  if (index < timeTable.length) {
                                    return <TableCell key={index}>{day.name}</TableCell>;
                                  }
                                })}
                              </TableRow>
                            </TableHead> */}
                <TableBody>
                  {timeTable.map((day, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{day.dayName.toUpperCase()}</TableCell>
                        {day.schedule.map((s, index) => {
                          return (
                            <TableCell key={index} align="center">
                              <Chip label={s.timeSlot} size="small" />
                              <Typography className={classes.subjectName}>
                                {s.subjectName}
                              </Typography>
                              <Typography color="textSecondary">
                                {s.teacherName && `(${s.teacherName})`}
                              </Typography>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </TableContainer>
        </Paper>
      </Paper>
    </React.Fragment>
  );
};

const timeTableConst = {
  classInfo: {
    name: "8th",
    section: "Blue",
  },
  timeTable: [
    {
      dayName: "Monday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
    {
      dayName: "Tuesday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
    {
      dayName: "Wednesday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
    {
      dayName: "Thursday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
    {
      dayName: "Friday",
      schedule: [
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:00-08:45" },
        { subjectName: "Maths", teacherName: "ABC", timeSlot: "08:45-09:30" },
        { subjectName: "Physics", teacherName: "ABC", timeSlot: "09:30-10:15" },
        {
          subjectName: "Chemistry",
          teacherName: "ABC",
          timeSlot: "10:15-11:00",
        },
        {
          subjectName: "Computer",
          teacherName: "ABC",
          timeSlot: "11:00-11:45",
        },
        { subjectName: "Break", teacherName: "", timeSlot: "11:45-12:15" },
        { subjectName: "Urdu", teacherName: "ABC", timeSlot: "12:15-01:00" },
      ],
    },
  ],
};
