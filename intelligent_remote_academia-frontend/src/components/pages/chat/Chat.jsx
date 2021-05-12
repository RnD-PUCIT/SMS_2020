import React, { useState } from "react";
import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

import colors from "../../../colors";
import ChatMessagesBoard from "./ChatMessagesBoard";
import ChatWelcomeBoard from "./ChatWelcomeBoard";

const useStyles = makeStyles({
  divider: {
    margin: "15px 0",
  },
  chat: {
    padding: 20,
    height: "100%",
  },

  chatListContainer: {
    borderRight: `1px solid ${colors.gray}`,
    height: "100%",
  },
  contactSearchContainer: {
    padding: 10,
  },
  chatList: {
    margin: "10px 0",
    height: "calc(72vh - 100px)",
    overflow: "auto",
  },
  messageOutline: {
    display: "block",
  },
  chatContainer: {
    height: "72vh",
    overflow: "hidden",
  },
});

const Chat = () => {
  const classes = useStyles();
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <React.Fragment>
      <Typography variant="h6">Messages</Typography>
      <Divider className={classes.divider} />
      <Paper className="shadow">
        <div className={classes.chatContainer}>
          <Grid container>
            <Grid item sm={4}>
              <div className={classes.chatListContainer}>
                <div className={classes.contactSearchContainer}>
                  <TextField
                    fullWidth
                    label="Search chats"
                    variant="outlined"
                  />
                </div>
                <Divider />
                <div className={classes.chatList + " " + "chatList"}>
                  <List className={classes.root}>
                    {chats.map((item, index) => (
                      <React.Fragment key={index}>
                        <ListItem
                          alignItems="flex-start"
                          button
                          selected={selectedChat === index}
                          onClick={() => setSelectedChat(index)}
                        >
                          <ListItemAvatar>
                            <Avatar
                              alt={item.name}
                              src="/static/images/avatar/1.jpg"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={item.name}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  className={classes.messageOutline}
                                  color="textSecondary"
                                  noWrap
                                >
                                  {item.messageOutline}
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        {index === chats.length - 1 ? (
                          <React.Fragment />
                        ) : (
                          <Divider style={{ margin: "0 15px" }} />
                        )}
                      </React.Fragment>
                    ))}
                  </List>
                </div>
              </div>
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

const chats = [
  {
    name: "Sohaib Salman",
    messageOutline: "lorem ipsum dummy text for message outline",
  },
  {
    name: "Arslan Yousaf",
    messageOutline: "lorem ipsum dummy text for message outline",
  },
  {
    name: "Daniyal Ahmad",
    messageOutline: "lorem ipsum dummy text for message outline",
  },
  {
    name: "Sohaib Salman",
    messageOutline: "lorem ipsum dummy text for message outline",
  },
  {
    name: "Arslan Yousaf",
    messageOutline: "lorem ipsum dummy text for message outline",
  },
  {
    name: "Daniyal Ahmad",
    messageOutline: "lorem ipsum dummy text for message outline",
  },
  {
    name: "Sohaib Salman",
    messageOutline: "lorem ipsum dummy text for message outline",
  },
  {
    name: "Arslan Yousaf",
    messageOutline: "lorem ipsum dummy text for message outline",
  },
  {
    name: "Daniyal Ahmad",
    messageOutline: "lorem ipsum dummy text for message outline",
  },
];
