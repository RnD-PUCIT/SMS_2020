import React from 'react';
import { Link } from 'react-router-dom';

const ParentsFeed = () => {
  return (
    <React.Fragment>
      <h1>Parents Feed</h1>
      <ul>
        <li>
          <Link to="/parents/add">Add Parent</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default ParentsFeed;
