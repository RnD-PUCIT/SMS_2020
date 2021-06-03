import { Grid } from '@material-ui/core';
import React from 'react';

import PageHeading from '../../../common/PageHeading';
import TeacherCoursesList from './TeacherCoursesList';

const TeacherDashboard = () => {
  return (
    <React.Fragment>
      <PageHeading title="Teacher Dashboard" />
      <Grid container spacing={3}>
        <Grid item md={8}>
          <TeacherCoursesList />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TeacherDashboard;
