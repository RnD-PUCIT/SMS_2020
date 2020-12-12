import React, { Component } from "react";
import Calendar from "react-calendar";

import http from "../../../services/httpService";

import "react-calendar/dist/Calendar.css";
import "./attendance.css";

class Attendance extends Component {
  state = { attendance: null, date: new Date() };

  async componentDidMount() {
    const { studentId, classId, sessionId } = this.props;

    const url =
      "/attendance?studentId=" +
      studentId +
      "&classId=" +
      classId +
      "&sessionId=" +
      sessionId;
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

    if (attendance) {
      return (
        <React.Fragment>
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
        </React.Fragment>
      );
    }
    return null;
  }
  getAttendance = async () => {
    const { studentId, classId } = this.props;

    const url = "/attendance?studentId=" + studentId + "&classId=" + classId;

    const { data } = await http.get(`${url}`);
    const { attendance } = data;

    this.setState({ attendance });
  };
}

export default Attendance;
