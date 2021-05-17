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

  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedChatId, setSelectedChatId] = useState();
  const [openNewChat, setOpenNewChat] = useState(false);

  const userId = window.localStorage.getItem("userId");

  const handleChatChange = (index, chatId) => {
    setSelectedChat(index);
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
      <Paper className="shadow">
        <div className={classes.chatContainer}>
          <Grid container>
            <Grid item sm={4}>
              <ChatList
                userId={userId}
                selectedChat={selectedChat}
                onChatChange={handleChatChange}
                onNewChat={handleNewChatOpen}
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
