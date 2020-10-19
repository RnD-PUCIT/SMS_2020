import React, { Component } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./attendance.css";

import { getStudentAttendance } from "../../../services/studentAttendanceService";

class Attendance extends Component {
  state = { attendance: null, date: new Date() };

  componentDidMount() {
    const attendance = getStudentAttendance();

    this.setState({ attendance });
  }

  render() {
    const { attendance } = this.state;

    if (attendance) {
      return (
        <React.Fragment>
          <Calendar value={this.state.date} showNeighboringMonth={false} />
        </React.Fragment>
      );
    }
    return null;
  }
}

export default Attendance;
