import React from "react";
import {
  Avatar,
  Divider,
  Fab,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AddIcon from "@material-ui/icons/Add";

import firestore from "../../../firebase/firebase";
import colors from "../../../colors";

const ChatList = ({ onNewChat, selectedChatId, onChatChange, userId }) => {
  const classes = useStyles();

  const chatsRef = firestore.collection("chats");
  const query = chatsRef
    .orderBy("timestamp", "desc")
    .where("users", "array-contains", userId);

  const [chats] = useCollectionData(query);

  const setChatTime = (timestamp) => {
    const current = new Date();
    if (
      current.getMonth() === timestamp.getMonth() &&
      current.getDate() === timestamp.getDate() &&
      current.getFullYear() === timestamp.getFullYear()
    ) {
      let hours = timestamp.getHours();
      const AmOrPm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      let minutes = timestamp.getMinutes();
      minutes = minutes < 10 ? "0" + minutes : minutes;
      const finalTime = hours + ":" + minutes + " " + AmOrPm;
      return finalTime;
    } else {
      let date = timestamp.getDate();
      let month = timestamp.getMonth();
      let year = timestamp.getFullYear();

      date = date < 10 ? "0" + date : date;
      month = month < 10 ? "0" + month : month;

      return `${date}/${month}/${year}`;
    }
  };

  if (!chats) return null;

  return (
    <React.Fragment>
      <div className={classes.chatListContainer}>
        <div className={classes.contactSearchContainer}>
          <input
            className={classes.searchField}
            placeholder="Search contacts"
          />
        </div>
        <Divider />
        <div className={`${classes.chatList} chatList`}>
          <List className={classes.root}>
            {chats &&
              chats.map((item, index) => {
                const user = item.userDetails.filter((u) => u.id !== userId)[0];

                return (
                  <React.Fragment key={index}>
                    <ListItem
                      alignItems="flex-start"
                      button
                      style={{ alignItems: "center" }}
                      selected={selectedChatId === item.chatId}
                      onClick={() => {
                        onChatChange(item.chatId);
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
                        style={{ margin: 0 }}
                        primary={
                          <div className={classes.mainContainer}>
                            <Typography className={classes.userName}>
                              {user.name}
                            </Typography>
                            <Typography
                              color="textSecondary"
                              className={classes.chatDate}
                            >
                              {item.timestamp &&
                                setChatTime(item.timestamp.toDate())}
                            </Typography>
                          </div>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.messageOutline}
                              color="textSecondary"
                              noWrap
                            >
                              {item.messageOutline
                                ? item.messageOutline
                                : "Say hi..."}
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
        <Fab color="primary" className={classes.addButton} onClick={onNewChat}>
          <AddIcon />
        </Fab>
      </div>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  chatListContainer: {
    borderRight: `1px solid ${colors.gray}`,
    height: "100%",
    position: "relative",
    backgroundColor: "#f9f9f9",
  },
  contactSearchContainer: {
    padding: 10,
  },
  chatList: {
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
  addButton: {
    position: "sticky",
    float: "right",
    marginRight: 10,
    bottom: 20,
  },
  userName: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "500",
    flex: "1",
  },
  searchField: {
    width: "100%",
    padding: "10px 15px",
    border: `1px solid ${colors.gray}`,
    borderRadius: 50,
  },
  mainContainer: {
    display: "flex",
  },
  chatDate: {
    fontSize: 14,
  },
});

export default ChatList;
