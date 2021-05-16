import React, { useState } from "react";
import {
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

import ChatMessagesBoard from "./ChatMessagesBoard";
import ChatWelcomeBoard from "./ChatWelcomeBoard";
import ChatList from "./ChatList";

const Chat = () => {
  const classes = useStyles();
  const userId = window.localStorage.getItem("userId");
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <React.Fragment>
      <Typography variant="h6">Messages</Typography>
      <Divider className={classes.divider} />
      <Paper className="shadow">
        <div className={classes.chatContainer}>
          <Grid container>
            <Grid item sm={4}>
              <ChatList
                userId={userId}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
              />
            </Grid>
            <Grid item sm={8}>
              <div className={classes.chat}>
                {selectedChat !== null ? (
                  <ChatMessagesBoard />
                ) : (
                  <ChatWelcomeBoard />
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </React.Fragment>
  );
};

export default Chat;

const useStyles = makeStyles({
  divider: {
    margin: "15px 0",
  },
  chat: {
    padding: 20,
    height: "100%",
  },

  messageOutline: {
    display: "block",
  },
  chatContainer: {
    height: "72vh",
    overflow: "hidden",
  },
});
