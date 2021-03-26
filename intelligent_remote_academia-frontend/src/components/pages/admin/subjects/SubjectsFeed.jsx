import React from 'react';
import { Link } from 'react-router-dom';

const SubjectsFeed = () => {
  return (
    <React.Fragment>
      <h1>Subjects Feed</h1>
      <ul>
        <li>
          <Link to="/subjects/add">Add Subject</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default SubjectsFeed;
