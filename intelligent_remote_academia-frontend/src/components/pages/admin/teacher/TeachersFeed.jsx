import React from 'react';
import { Link } from 'react-router-dom';

const TeachersFeed = () => {
  return (
    <React.Fragment>
      <h1>Teachers Feed</h1>
      <ul>
        <li>
          <Link to="/teachers/add">Add Teacher</Link>
        </li>
        <li>
          <Link to="/teachers/class-allocate">Allocate Class</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default TeachersFeed;
