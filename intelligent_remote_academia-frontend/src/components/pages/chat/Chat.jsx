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
import ChatNew from "./ChatNew";

const Chat = () => {
  const classes = useStyles();

  const [selectedChatId, setSelectedChatId] = useState(null);
  const [openNewChat, setOpenNewChat] = useState(false);

  const userId = window.localStorage.getItem("userId");

  const handleChatChange = (chatId) => {
    setSelectedChatId(chatId);
  };

  const handleNewChatOpen = () => {
    setOpenNewChat(true);
  };

  const handleNewChatClose = () => {
    setOpenNewChat(false);
  };

  return (
    <React.Fragment>
      <Typography variant="h6">Messages</Typography>
      <Divider className={classes.divider} />
      <Paper className="shadow" style={{ overflow: "hidden" }}>
        <div className={classes.chatContainer}>
          <Grid container style={{ height: "100%" }}>
            <Grid item sm={4} style={{ height: "100%" }}>
              <ChatList
                userId={userId}
                selectedChatId={selectedChatId}
                onChatChange={handleChatChange}
                onNewChat={handleNewChatOpen}
              />
            </Grid>
            <Grid item sm={8} style={{ height: "100%" }}>
              <div className={classes.chat}>
                {selectedChatId !== null ? (
                  <ChatMessagesBoard chatId={selectedChatId} />
                ) : (
                  <ChatWelcomeBoard />
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <ChatNew open={openNewChat} onClose={handleNewChatClose} />
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
    height: "calc(100vh - 185px)",
    overflow: "hidden",
  },
});
