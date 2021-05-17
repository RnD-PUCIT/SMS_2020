import React, { useState } from "react";
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

import http from "../../../services/httpService";
import { AlertTitle } from "@material-ui/lab";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChatNew({ open, onClose }) {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState("");
  const [contact, setContact] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const url = `/chat?text=${searchValue}`;

    try {
      const { data } = await http.get(url);
      setContact(data);
      setError("");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("No user found");
      }
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        fullWidth
      >
        <DialogTitle>Select new contact</DialogTitle>
        <DialogContent className={classes.content}>
          <div className={classes.searchContainer}>
            <TextField
              variant="outlined"
              label="Search username"
              fullWidth
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
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
});
