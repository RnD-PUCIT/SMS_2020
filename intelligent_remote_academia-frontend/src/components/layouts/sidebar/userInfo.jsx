import React from "react";
import ImageAvatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px 0",
  },
  avatar: {
    width: "85px",
    height: "85px",
    margin: "20px 0",
    boxShadow: "0 5px 15px rgb(0,0,0, .25)",
  },
}));

const UserInfo = ({ userInfo }) => {
  const classes = useStyles();

  if (userInfo) {
    return (
      <center className={classes.root}>
        <ImageAvatar className={classes.avatar} />
        <Typography variant="h6" style={{ textTransform: "capitalize" }}>
          {`${userInfo.firstName} ${userInfo.lastName}`}
        </Typography>
      </center>
    );
  }
  return null;
};

export default UserInfo;
