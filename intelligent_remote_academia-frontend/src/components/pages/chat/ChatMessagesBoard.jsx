import React, { useState } from "react";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase/app";

import firestore from "../../../firebase/firebase";
import ChatMessage from "./ChatMessage";
import colors from "../../../colors";

const ChatMessagesBoard = ({ chatId }) => {
  const classes = useStyles();

  const [inputMessage, setInputMessage] = useState("");

  const messagesRef = firestore.collection(`/chats/${chatId}/messages`);
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    const message = inputMessage;
    setInputMessage("");

    const senderId = window.localStorage.getItem("userId");

    await messagesRef.add({
      text: message,
      senderId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  if (!messages) return null;

  return (
    <React.Fragment>
      <div
        className={
          classes.chatMessagesContainer + " " + "chatMessagesContainer"
        }
      >
        {messages.length === 0 && (
          <div className={classes.newChat}>
            <Typography color="textSecondary">Say hi</Typography>
          </div>
        )}
        {messages.map((message, index) => {
          return (
            <ChatMessage
              key={index}
              message={message.text}
              uid={message.senderId}
            />
          );
        })}
      </div>
      <form className={classes.form} onSubmit={sendMessage}>
        <textarea
          className={classes.input}
          placeholder="Type your message"
          rows="1"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyUp={(e) => {
            if (e.which === 13 && !e.shiftKey) sendMessage(e);
          }}
        />
        <IconButton type="submit" disabled={inputMessage.trim() ? false : true}>
          <SendIcon />
        </IconButton>
      </form>
    </React.Fragment>
  );
};

const useStyles = makeStyles({
  chatMessagesContainer: {
    padding: 20,
    height: "calc(90vh - 185px)",
    overflow: "auto",
  },
  form: {
    backgroundColor: colors.light,
    display: "flex",
    alignItems: "center",
    minHeight: "10vh",
    padding: "0 20px",
    borderBottomRightRadius: 10,
  },
  input: {
    width: "100%",
    padding: "10px 15px",
    borderRadius: 50,
    border: `1px solid ${colors.gray}`,
    "&:focus-visible": {
      outline: "none",
    },
    marginRight: 10,
    resize: "none",
  },
  newChat: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatMessagesBoard;
