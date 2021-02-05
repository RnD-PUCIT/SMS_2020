import React from 'react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  return (
    <React.Fragment>
      <h1>Teachers Dashboard</h1>
      <Link to="diary-form">Diary</Link>
    </React.Fragment>
  );
};

export default TeacherDashboard;
