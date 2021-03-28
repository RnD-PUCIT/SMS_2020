import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  paper: {
    padding: '30px 15px',
  },
});

const ShadowPaper = (props) => {
  const classes = useStyles();
  return <Paper className={classes.paper}>{props.children}</Paper>;
};

export default ShadowPaper;
