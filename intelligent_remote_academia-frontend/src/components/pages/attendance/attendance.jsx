import React, { Component } from "react";

import { getStudentAttendance } from "../../../services/studentAttendanceService";

class Attendance extends Component {
  state = { attendance: null };

  componentDidMount() {
    const attendance = getStudentAttendance();

    this.setState({ attendance });
  }

  render() {
    const { attendance } = this.state;

    if (attendance) {
      return (
        <React.Fragment>
          <h1>Attendance</h1>
          <ul>
            {attendance.map((item) => {
              return (
                <li key={item.id}>
                  {item.status} ({item.attendance_date})
                </li>
              );
            })}
          </ul>
        </React.Fragment>
      );
    }
    return null;
  }
}

export default Attendance;
