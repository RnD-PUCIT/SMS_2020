import React, { useState } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
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

    const senderId = window.localStorage.getItem("userId");

    await messagesRef.add({
      text: inputMessage,
      senderId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInputMessage("");
  };

  if (!messages) return null;

  return (
    <React.Fragment>
      <div className={classes.chatMessagesContainer}>
        {messages.map((message, index) => {
          return <ChatMessage message={message.text} uid={message.senderId} />;
        })}
      </div>
      <form className={classes.form} onSubmit={sendMessage}>
        <textarea
          className={classes.input}
          placeholder="Type your message"
          rows="1"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <IconButton type="submit">
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
});

export default ChatMessagesBoard;
