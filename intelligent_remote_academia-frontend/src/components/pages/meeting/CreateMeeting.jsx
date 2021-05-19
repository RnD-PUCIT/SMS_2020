import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import colors from "../../../colors";

import FeatherIcon from "../../common/icons/FeatherIcon";

const CreateMeeting = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className="shadow">
            <div className={classes.meetingTypeContainer}>
              <FeatherIcon iconName="FiUser" size={50} color={colors.light} />
              <Typography className={classes.meetingName}>
                Single Time Meeting
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className="shadow">
            <div className={classes.meetingTypeContainer}>
              <FeatherIcon iconName="FiUsers" size={50} color={colors.light} />
              <Typography className={classes.meetingName}>
                Multi Time Meeting
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CreateMeeting;

const useStyles = makeStyles({
  meetingTypeContainer: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    cursor: "pointer",
  },
  meetingName: {
    color: "white",
    fontSize: 30,
    fontWeight: "300",
    marginTop: 10,
  },
});
