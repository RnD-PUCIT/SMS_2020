import React from "react";
import {
  Button,
  Divider,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import colors from "../../../colors";

const MeetingsList = ({ meetings, onJoinClick }) => {
  const classes = useStyles();

  if (!meetings.length) return null;

  return (
    <React.Fragment>
      <Paper className={`shadow ${classes.container}`}>
        <Typography color="primary" variant="h6">
          Upcoming Meetings
        </Typography>
        <Divider className="u_mt_tiny u_mb_small" />
        {meetings.map((meeting, index) => (
          <div key={index} className={classes.meetingContainer}>
            <div className={classes.details}>
              <Typography variant="h6" className={classes.title}>
                {meeting.title}
              </Typography>
              <Typography
                className={classes.subTitle}
              >{`Participant: ${meeting.participantName}`}</Typography>
            </div>
            <div className={classes.button}>
              <Button variant="contained" onClick={() => onJoinClick(meeting)}>
                join
              </Button>
            </div>
          </div>
        ))}
      </Paper>
    </React.Fragment>
  );
};

export default MeetingsList;

const useStyles = makeStyles({
  button: {
    alignSelf: "center",
  },
  container: {
    padding: 20,
    marginTop: 20,
  },
  details: {
    flex: 1,
  },
  meetingContainer: {
    backgroundColor: colors.light,
    borderRadius: 5,
    display: "flex",
    padding: "10px 20px",
    marginBottom: 10,
  },
  subTitle: {
    color: colors.medium,
    fontWeight: 300,
    fontSize: 14,
  },
  title: {
    color: "black",
    fontWeight: 300,
  },
});
