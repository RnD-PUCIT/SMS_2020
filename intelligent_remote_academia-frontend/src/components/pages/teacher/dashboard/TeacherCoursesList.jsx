import React from 'react';
import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import ProgressBar from '../../../common/progress/ProgressBar';
import colors from '../../../../colors';

const TeacherCoursesList = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={`shadow ${classes.container}`}>
        <Typography variant="h6">Your Courses</Typography>
        <Divider className="u_mt_tiny u_mb_small" />
        <div className={classes.listContainer}>
          <Grid container className={classes.header}>
            <Grid item xs={3}>
              <Typography color="primary" className={classes.title}>
                Class
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="primary" className={classes.title}>
                Subject
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color="primary" className={classes.title}>
                Progress
              </Typography>
            </Grid>
          </Grid>
          {/* Course List */}
          {courses.map((course, index) => (
            <Grid container key={index} className={classes.listItem}>
              <Grid item xs={3}>
                <Typography>{course.className}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography>{course.subjectName}</Typography>
              </Grid>
              <Grid item xs={6} className={classes.progressContainer}>
                <ProgressBar value={course.completed} />
              </Grid>
            </Grid>
          ))}
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default TeacherCoursesList;

const useStyles = makeStyles({
  container: {
    padding: 20,
    height: 300,
    overflow: 'auto !important',
  },
  header: {
    padding: '10px 0',
    borderBottom: `1px solid ${colors.gray}`,
  },
  title: {
    fontWeight: 500,
    fontSize: 18,
  },
  listContainer: {
    padding: '0 20px',
    border: `1px solid ${colors.gray}`,
    borderRadius: 5,
  },
  listItem: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${colors.gray}`,
    },
    padding: '10px 0',
  },
  progressContainer: {
    display: 'flex',
    alignSelf: 'center',
  },
});

const courses = [
  {
    className: '8th - Blue',
    subjectName: 'English',
    completed: 90,
  },
  {
    className: '8th - Blue',
    subjectName: 'English',
    completed: 90,
  },
  {
    className: '8th - Blue',
    subjectName: 'English',
    completed: 90,
  },
  {
    className: '8th - Blue',
    subjectName: 'English',
    completed: 90,
  },
];
