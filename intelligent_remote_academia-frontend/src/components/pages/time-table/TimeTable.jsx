import React from "react";
import { Paper, Typography } from "@material-ui/core";

import useStyles from "../../../styles/timeTableStyles";

const TimeTable = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={3}>
        <Typography variant="h5">Time Table</Typography>
      </Paper>
    </React.Fragment>
  );
};

const timeTableConst = {};

export default TimeTable;
