import React, { Component } from "react";
import Calendar from "react-calendar";

import http from "../../../services/httpService";

import "react-calendar/dist/Calendar.css";
import "./attendance.css";

class Attendance extends Component {
  state = { attendance: null, date: new Date() };

  async componentDidMount() {
    const { studentId, classId } = this.props;

    const url = "/attendance?studentId=" + studentId + "&classId=" + classId;

    const { data } = await http.get(`${url}`);
    const { attendance } = data;

    this.setState({ attendance });
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
                console.log(date.toLocaleDateString());
                return "present";
              } else if (
                attendance.find(
                  (a) =>
                    a.attendance_date === date.toLocaleDateString() &&
                    a.status === "A"
                )
              ) {
                return "absent";
              }
            }}
          />
        </React.Fragment>
      );
    }
    return null;
  }
}

export default Attendance;
