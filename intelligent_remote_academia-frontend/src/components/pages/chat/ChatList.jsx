import React from "react";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useCollectionData } from "react-firebase-hooks/firestore";

import firestore from "../../../firebase/firebase";
import colors from "../../../colors";

const ChatList = ({ selectedChat, onChatChange, userId }) => {
  const classes = useStyles();

  const chatsRef = firestore.collection("chats");
  const query = chatsRef.where("users", "array-contains", userId);

  const [chats] = useCollectionData(query);

  if (!chats) return null;

  return (
    <React.Fragment>
      <div className={classes.chatListContainer}>
        <div className={classes.contactSearchContainer}>
          <TextField fullWidth label="Search chats" variant="outlined" />
        </div>
        <Divider />
        <div className={classes.chatList + " " + "chatList"}>
          <List className={classes.root}>
            {chats.map((item, index) => {
              const user = item.userDetails.filter((u) => u.id !== userId)[0];
              return (
                <React.Fragment key={index}>
                  <ListItem
                    alignItems="flex-start"
                    button
                    style={{ alignItems: "center" }}
                    selected={selectedChat === index}
                    onClick={() => {
                      const chatId = item.chatId;
                      onChatChange(index, chatId);
                    }}
                  >
                    <ListItemAvatar style={{ margin: 0 }}>
                      <Avatar
                        alt={user.name}
                        src=""
                        className={classes.image}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      style={{ margin: 0 }}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.messageOutline}
                            color="textSecondary"
                            noWrap
                          >
                            {user.messageOutline ? user.messageOutline : "..."}
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
              );
            })}
          </List>
        </div>
      </div>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  chatListContainer: {
    borderRight: `1px solid ${colors.gray}`,
    height: "100%",
  },
  contactSearchContainer: {
    padding: 10,
  },
  chatList: {
    margin: "10px 0",
    height: "calc(100vh - 185px - 76px)",
    overflow: "auto",
  },
  messageOutline: {
    display: "block",
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 15,
  },
  root: {
    alignItems: "center",
  },
});

export default ChatList;
