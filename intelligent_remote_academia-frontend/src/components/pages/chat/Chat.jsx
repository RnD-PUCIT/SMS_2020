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

  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState();

  const userId = window.localStorage.getItem("userId");

  const handleChatChange = (index, chatId) => {
    setSelectedChat(index);
    setSelectedChatId(chatId);
  };

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
                onChatChange={handleChatChange}
              />
            </Grid>
            <Grid item sm={8}>
              <div className={classes.chat}>
                {selectedChat !== null ? (
                  <ChatMessagesBoard chatId={selectedChatId} />
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
    height: "100%",
  },

  chatContainer: {
    height: "72vh",
    overflow: "hidden",
  },
});
