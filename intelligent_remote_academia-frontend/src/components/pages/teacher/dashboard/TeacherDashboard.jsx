import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  return (
    <React.Fragment>
      <h1>Teachers Dashboard</h1>
      <ul>
        <li>
          <Link to="diary-form">Diary</Link>
        </li>
        <li>
          <Link to="mark-attendance">Attendance</Link>
        </li>
        <li>
          <Link to="teacher-subject">Subjects</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default TeacherDashboard;
