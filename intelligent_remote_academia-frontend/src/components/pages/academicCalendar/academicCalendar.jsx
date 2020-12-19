import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '40px',
    textAlign: 'center',
  },
});

const AcademicCalendar = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={3}>
        <Typography variant='h5'>Academic Calendar</Typography>
      </Paper>
    </React.Fragment>
  );
};

const academicCalenderConst = {};

export default AcademicCalendar;
