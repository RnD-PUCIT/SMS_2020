import React from "react";
import { Typography } from "@material-ui/core";
import { useCollectionData } from "react-firebase-hooks/firestore";

import firestore from "../../../firebase/firebase";

const ChatMessagesBoard = ({ chatId }) => {
  const messagesRef = firestore.collection(`/chats/${chatId}/messages`);
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query);

  if (!messages) return null;

  return (
    <div>
      <Typography>Messages Board</Typography>
      <Typography>{chatId}</Typography>
      <ul>
        {messages.map((message, index) => {
          return <li>{message.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default ChatMessagesBoard;
