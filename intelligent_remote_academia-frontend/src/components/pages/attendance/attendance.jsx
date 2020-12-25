import React, { Component } from "react";
import Calendar from "react-calendar";

import http from "../../../services/httpService";

import "react-calendar/dist/Calendar.css";
import "./attendance.css";
import { Divider, Grid, Paper } from "@material-ui/core";
import { Doughnut, Pie } from "react-chartjs-2";

class Attendance extends Component {
  state = {
    attendance: null,
    date: new Date(),
    yearStats: {},
    monthStats: null,
  };

  globalMonthsStats = {
    absents: 0,
    leaves: 0,
    presents: 0,
    assigned: false,
  };

  async componentDidMount() {
    this.getAttendance();
  }

  async componentDidUpdate(prevProps) {
    /* 
      compare prev props to new props, if they don't match
      then call server to get attendance data, otherwise infinite
      loop will be executed
    */

    if (this.props.studentId !== prevProps.studentId) {
      this.getAttendance();
    }
  }

  render() {
    const { attendance } = this.state;

    const {
      absents: yearAbsents,
      presents: yearPresents,
      leaves: yearLeaves,
    } = this.state.yearStats;

    const {
      absents: monthAbsents,
      presents: monthPresents,
      leaves: monthLeaves,
    } = this.globalMonthsStats;

    if (attendance) {
      return (
        <React.Fragment>
          <Grid
            container
            spacing={4}
            style={{ marginTop: "20px" }}
            direction="row-reverse"
          >
            <Grid item md={4} xs={12}>
              <Paper
                variant="outlined"
                style={{ padding: "20px 20px 20px 0" }}
                square
              >
                <Grid container>
                  <Grid item md={12} xs={6}>
                    {this.state.yearStats && (
                      <AttendanceChart
                        type="pie"
                        absents={yearAbsents}
                        presents={yearPresents}
                        leaves={yearLeaves}
                        text="Yearly Attendance Stats"
                        fontSize="12"
                      />
                    )}
                  </Grid>
                  <Grid item md={12} xs={6}>
                    {this.state.monthStats && (
                      <AttendanceChart
                        absents={monthAbsents}
                        presents={monthPresents}
                        leaves={monthLeaves}
                        text="Monthly Attendance Stats"
                        fontSize="12"
                      />
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item md={8} xs={12}>
              <Calendar
                value={this.state.date}
                showNeighboringMonth={false}
                tileClassName={this.highlightCalendar}
                tileDisabled={(data) => data.date.getDay() === 0}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      );
    }
    return null;
  }

  getAttendance = async () => {
    const { studentId, classId, sessionId } = this.props;

    const url =
      "/attendance?studentId=" +
      studentId +
      "&classId=" +
      classId +
      "&sessionId=" +
      sessionId;

    const { data } = await http.get(`${url}`);
    const { attendance } = data;

    this.setState({ attendance });

    let noOfAbsents = 0,
      noOfPresents = 0,
      noOfLeaves = 0;

    if (attendance) {
      attendance.map((a) => {
        if (a.status === "A") noOfAbsents++;
        else if (a.status === "P") noOfPresents++;
        else if (a.status === "L") noOfLeaves++;
      });

      const yearStats = {
        absents: noOfAbsents,
        presents: noOfPresents,
        leaves: noOfLeaves,
      };
      this.setState({ yearStats });
    }
  };

  highlightCalendar = ({ date }) => {
    const { attendance } = this.state;
    const currDay = new Date(date);

    // Assign 0 to global values to refresh the month stats
    if (currDay.getDate() === 1) {
      this.globalMonthsStats.absents = 0;
      this.globalMonthsStats.leaves = 0;
      this.globalMonthsStats.presents = 0;
      this.globalMonthsStats.assigned = false;
    }

    if (
      attendance.find(
        (a) =>
          a.attendanceDate === date.toLocaleDateString() && a.status === "P"
      )
    ) {
      this.globalMonthsStats.presents++;
      return "present";
    } else if (
      attendance.find(
        (a) =>
          a.attendanceDate === date.toLocaleDateString() && a.status === "A"
      )
    ) {
      this.globalMonthsStats.absents++;
      return "absent";
    } else if (
      attendance.find(
        (a) =>
          a.attendanceDate === date.toLocaleDateString() && a.status === "L"
      )
    ) {
      this.globalMonthsStats.leaves++;
      return "leave";
    }
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);

    if (!this.globalMonthsStats.assigned) {
      if (currDay.getMonth() !== nextDay.getMonth()) {
        this.globalMonthsStats.presents = Math.ceil(
          this.globalMonthsStats.presents / 2
        );
        this.globalMonthsStats.absents = Math.ceil(
          this.globalMonthsStats.absents / 2
        );
        this.globalMonthsStats.leaves = Math.ceil(
          this.globalMonthsStats.leaves / 2
        );
        this.globalMonthsStats.assigned = true;

        this.setState({ monthStats: this.globalMonthsStats });
      }
    }
  };
}
export default Attendance;

const AttendanceChart = ({
  type,
  absents,
  presents,
  leaves,
  text,
  fontSize,
}) => {
  const chartData = {
    labels: ["Presents", "Abents", "Leaves"],
    datasets: [
      {
        label: "Rainfall",
        backgroundColor: ["#2ea043", "#da3633", "#fce43d"],
        hoverBackgroundColor: ["#501800", "#4B5000", "#f3f017"],
        data: [presents, absents, leaves],
      },
    ],
  };
  if (type === "pie") {
    return (
      <Pie
        data={chartData}
        options={{
          title: {
            display: true,
            text: text,
            fontSize: fontSize,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    );
  } else {
    return (
      <Doughnut
        data={chartData}
        options={{
          title: {
            display: true,
            text: text,
            fontSize: fontSize,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    );
  }
};
