import React from 'react';
import ParentDashboard from '../../dashboard/ParentDashboard';
import { useStyles } from '../../constants/layoutConsts';
import TeacherRouting from '../../routing/TeacherRouting';

const Content = ({ role }) => {
  const classes = useStyles();
  if (role) {
    return (
      <main className={classes.content}>
        <div className={classes.toolbar}>
          {RoleToDashboard[role.trim().toLowerCase()]}
        </div>
      </main>
    );
  }
  return null;
};

export default Content;

const RoleToDashboard = {
  parent: <ParentDashboard />,
  teacher: <TeacherRouting />,
};
