import React from "react";
import ImageAvatar from "@material-ui/core/Avatar";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px 0",
  },
  avatar: {
    width: "100px",
    height: "100px",
    margin: "20px 0",
  },
}));

const UserInfo = (props) => {
  const classes = useStyles();
  const { parentInfo } = props;

  if (parentInfo) {
    return (
      <center className={classes.root}>
        <Typography variant="h6">Parents Portal</Typography>
        <ImageAvatar className={classes.avatar} />
        <Typography>
          {parentInfo.first_name + " " + parentInfo.last_name}
        </Typography>
      </center>
    );
  }
  return <div></div>;
};

export default UserInfo;
