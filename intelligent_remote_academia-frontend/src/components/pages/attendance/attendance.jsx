import React, { Component } from "react";
import Calendar from "react-calendar";

import http from "../../../services/httpService";

import "react-calendar/dist/Calendar.css";
import "./attendance.css";
import { Grid, Paper } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

class Attendance extends Component {
  state = { attendance: null, date: new Date(), yearStats: {} };
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
    const { absents, presents, leaves } = this.state.yearStats;
    const chartData = {
      labels: ["Presents", "Abents", "Leaves"],
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: ["#059c4c", "#7d191d", "#f6d83c"],
          hoverBackgroundColor: ["#501800", "#4B5000", "#175000"],
          borderWidth: 5,
          weight: 5,
          data: [presents, absents, leaves],
        },
      ],
    };

    if (attendance) {
      return (
        <React.Fragment>
          <Grid container spacing={4} style={{ marginTop: "20px" }}>
            <Grid item md={8}>
              <Calendar
                value={this.state.date}
                showNeighboringMonth={false}
                tileClassName={({ date }) => {
                  if (
                    attendance.find(
                      (a) =>
                        a.attendanceDate === date.toLocaleDateString() &&
                        a.status === "P"
                    )
                  ) {
                    return "present";
                  } else if (
                    attendance.find(
                      (a) =>
                        a.attendanceDate === date.toLocaleDateString() &&
                        a.status === "A"
                    )
                  ) {
                    return "absent";
                  } else if (
                    attendance.find(
                      (a) =>
                        a.attendanceDate === date.toLocaleDateString() &&
                        a.status === "L"
                    )
                  ) {
                    return "leave";
                  }
                }}
              />
            </Grid>
            <Grid item md={4}>
              <Paper variant="outlined">
                <Doughnut
                  data={chartData}
                  options={{
                    title: {
                      display: true,
                      text: "Yearly Attendance Stats",
                      fontSize: 16,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </Paper>
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
}

export default Attendance;
