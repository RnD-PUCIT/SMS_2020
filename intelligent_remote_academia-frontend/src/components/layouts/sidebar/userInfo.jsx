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

const UserInfo = (props) => {
  const classes = useStyles();
  const { parentInfo } = props;

  if (parentInfo) {
    return (
      <center className={classes.root}>
        <ImageAvatar className={classes.avatar} />
        <Typography variant="h6" style={{ textTransform: "capitalize" }}>
          {`${parentInfo.firstName} ${parentInfo.lastName}`}
        </Typography>
      </center>
    );
  }
  return <div></div>;
};

export default UserInfo;
