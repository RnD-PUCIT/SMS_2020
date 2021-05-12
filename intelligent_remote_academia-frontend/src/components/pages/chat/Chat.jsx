import React from "react";
import { Divider, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  divider: {
    margin: "15px 0",
  },
});

const Chat = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6">Messages</Typography>
      <Divider className={classes.divider} />
    </React.Fragment>
  );
};

export default Chat;
