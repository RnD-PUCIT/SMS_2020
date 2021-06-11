import { Avatar, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import colors from "../../../colors";

const ChatMessage = ({ message, date, image, uid }) => {
  const classes = useStyles();

  const messageClass =
    uid === window.localStorage.getItem("userId") ? "sent" : "received";

  return (
    <div className={classes.message + " " + classes[messageClass]}>
      <Avatar src="" className={classes.image} />
      <Typography
        className={
          messageClass === "sent" ? classes.sentText : classes.receivedText
        }
      >
        {message}
      </Typography>
    </div>
  );
};

const useStyles = makeStyles({
  message: {
    display: "flex",
    margin: "15px 0",
  },
  image: {
    width: 35,
    height: 35,
    margin: "0 10px",
  },
  sent: {
    flexDirection: "row-reverse",
  },
  sentText: {
    maxWidth: 500,
    backgroundColor: colors.secondary,
    color: "white",
    padding: "8px 15px",
    borderRadius: 5,
    textAlign: "right",
    wordBreak: "break-word",
  },
  receivedText: {
    maxWidth: 500,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    padding: "8px 15px",
    borderRadius: 5,
    wordBreak: "break-word",
  },
});

export default ChatMessage;
