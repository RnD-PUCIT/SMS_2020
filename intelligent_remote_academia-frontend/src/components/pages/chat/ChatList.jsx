import React, { useState } from "react";
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
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

import colors from "../../../colors";

firebase.initializeApp({
  apiKey: "AIzaSyBN_ZU090HSX36yzzei8ME00TA_EyV7c2o",
  authDomain: "ira-chat.firebaseapp.com",
  projectId: "ira-chat",
  storageBucket: "ira-chat.appspot.com",
  messagingSenderId: "667253532102",
  appId: "1:667253532102:web:b3e10cb498046f03bfbec7",
});

const firestore = firebase.firestore();

const ChatList = ({ selectedChat, setSelectedChat, userId }) => {
  const classes = useStyles();
  //   const [chats, setChats] = useState([]);

  const chatsRef = firestore.collection("chats");
  const query = chatsRef.where("users", "array-contains", userId);

  const [chatsCollection] = useCollectionData(query);

  console.log("====================================");
  console.log(chatsCollection);
  console.log("====================================");

  if (!chatsCollection) return null;

  return (
    <div className={classes.chatListContainer}>
      <div className={classes.contactSearchContainer}>
        <TextField fullWidth label="Search chats" variant="outlined" />
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
                  <Avatar alt={item.name} src="" />
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
    height: "calc(72vh - 100px)",
    overflow: "auto",
  },
  messageOutline: {
    display: "block",
  },
});

export default ChatList;

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
