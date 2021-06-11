import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Snackbar,
  Typography,
} from "@material-ui/core";

import colors from "../../../colors";
import FeatherIcon from "../../common/icons/FeatherIcon";
import CreatePTM from "./CreatePTM";
import { Alert } from "@material-ui/lab";

const CreateMeeting = () => {
  const classes = useStyles();

  const [openCreatePTM, setOpenCreatePTM] = useState(false);
  const [meetingCreated, setMeetingCreated] = useState(false);

  const handleSnackbarClose = () => {
    setMeetingCreated(false);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.heading}>
        Create Meeting:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className="shadow">
            <div className={classes.meetingTypeContainer}>
              <FeatherIcon iconName="FiUsers" size={50} color={colors.light} />
              <Typography className={classes.meetingName}>
                Remote Class
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className="shadow">
            <div
              className={classes.meetingTypeContainer}
              onClick={() => setOpenCreatePTM(true)}
            >
              <FeatherIcon iconName="FiUser" size={50} color={colors.light} />
              <Typography className={classes.meetingName}>
                Remote PTM
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <CreatePTM
        open={openCreatePTM}
        onClose={() => setOpenCreatePTM(false)}
        onSuccess={() => setMeetingCreated(true)}
      />

      <Snackbar open={meetingCreated} onClose={handleSnackbarClose}>
        <Alert severity="success" onClose={handleSnackbarClose}>
          Meeting created successfully!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
};

export default CreateMeeting;

const useStyles = makeStyles({
  heading: {
    marginBottom: 10,
  },
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
