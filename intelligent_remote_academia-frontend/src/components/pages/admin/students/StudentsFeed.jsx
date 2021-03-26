import React from 'react';
import { Link } from 'react-router-dom';

const StudentsFeed = () => {
  return (
    <React.Fragment>
      <h1>Students Feed</h1>
      <ul>
        <li>
          <Link to="/students/add">Add Student</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default StudentsFeed;
