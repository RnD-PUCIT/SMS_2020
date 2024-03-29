import React, { Component } from "react";
import {
  Chip,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
      const { timeTableInfo: timeTable } = data.timeTable;
      this.setState({ timeTable });
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
                    if (day.schedule.length !== 0) {
                      return (
                        <TableRow key={index}>
                          <TableCell>{day.dayName.toUpperCase()}</TableCell>
                          {day.schedule.map((s, i) => {
                            return (
                              <TableCell key={i} align="center">
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
                    }
                    return null;
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
