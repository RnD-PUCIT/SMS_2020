import React from 'react';
import ParentDashboard from '../../dashboard/ParentDashboard';

const Content = ({ role }) => {
  if (role) return RoleToDashboard[role.trim().toLowerCase()];
  return null;
};

export default Content;

const RoleToDashboard = {
  parent: <ParentDashboard />,
};
