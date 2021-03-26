import React from 'react';
import { Link } from 'react-router-dom';

const ClassesFeed = () => {
  return (
    <React.Fragment>
      <h1>Classes Feed</h1>
      <ul>
        <li>
          <Link to="/classes/add">Add Class</Link>
        </li>
        <li>
          <Link to="/classes/subject-allocate">Allocate Subject</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default ClassesFeed;
