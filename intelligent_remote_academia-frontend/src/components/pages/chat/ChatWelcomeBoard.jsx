import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const ChatWelcomeBoard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" color="textSecondary">
        Welcome
      </Typography>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={String(require("../../../assets/chat.jpg"))}
          alt=""
        />
      </div>
      <Typography color="textSecondary">
        Get connected with students, parents, teachers and administration!
      </Typography>
    </div>
  );
};

export default ChatWelcomeBoard;

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: 280,
    marginBottom: 20,
  },
});
