import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import {
  Avatar,
  Divider,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import { AlertTitle } from "@material-ui/lab";
import firebase from "firebase/app";

import firestore from "../../../firebase/firebase";
import http from "../../../services/httpService";
import AccountStore from "../../store/account/AccountStore";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChatNew({ open, onClose }) {
  const classes = useStyles();

  const chatsRef = firestore.collection("chats");
  const accountStore = useContext(AccountStore);

  const [searchValue, setSearchValue] = useState("");
  const [contact, setContact] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchValue.trim()) {
      setError("Please enter username");
      return;
    }

    const url = `/chat?text=${searchValue}`;

    try {
      const { data } = await http.get(url);
      setContact(data);
      setError("");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("No user found");
        setContact(null);
      }
    }
  };

  const handleCreateChat = async () => {
    const { userId, fullName } = accountStore;
    const chatId = `${userId}_${contact.id}`;

    chatsRef.doc(chatId).set({
      chatId,
      userDetails: [
        { id: userId, name: fullName },
        { id: contact.id, name: `${contact.firstName} ${contact.lastName}` },
      ],
      users: [userId, contact.id],
      messageOutline: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          setError("");
          setContact(null);
          setSearchValue("");
          onClose();
        }}
        fullWidth
      >
        <DialogTitle>Create new contact</DialogTitle>
        <DialogContent className={classes.content}>
          <div className={classes.searchContainer}>
            <TextField
              variant="outlined"
              label="Search username"
              fullWidth
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={classes.searchFeild}
            />
            <IconButton color="primary" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </div>
          {contact && (
            <div className={classes.profileContainer}>
              <Divider style={{ margin: "10px 0" }} />
              <div className={classes.profile}>
                <Avatar
                  alt={contact.firstName}
                  className={classes.image}
                  source={contact.profilePic}
                />
                <Typography
                  className={classes.title}
                  variant="h6"
                >{`${contact.firstName} ${contact.lastName}`}</Typography>
                <Button
                  color="primary"
                  className={classes.chatButton}
                  variant="contained"
                  startIcon={<ChatIcon />}
                  onClick={handleCreateChat}
                >
                  Start Chat
                </Button>
              </div>
            </div>
          )}
          {error && (
            <div style={{ marginTop: 20 }}>
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles({
  content: {
    paddingBottom: 30,
  },
  chatButton: {
    marginTop: 15,
  },
  searchContainer: {
    display: "flex",
  },
  profileContainer: {
    margin: "20px 0",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 10,
  },
  searchFeild: {
    marginRight: 10,
  },
});
