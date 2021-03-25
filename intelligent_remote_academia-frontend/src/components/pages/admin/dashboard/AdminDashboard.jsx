import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="add-parent">Add Parent</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default AdminDashboard;
