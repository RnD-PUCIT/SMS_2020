import React from "react";
import { Typography } from "@material-ui/core";
import { useCollectionData } from "react-firebase-hooks/firestore";

import firestore from "../../../firebase/firebase";
import ChatMessage from "./ChatMessage";

const ChatMessagesBoard = ({ chatId }) => {
  const messagesRef = firestore.collection(`/chats/${chatId}/messages`);
  const query = messagesRef.orderBy("createdAt");

  const [messages] = useCollectionData(query);

  if (!messages) return null;

  return (
    <div>
      {messages.map((message, index) => {
        return <ChatMessage message={message.text} uid={message.senderId} />;
      })}
    </div>
  );
};

export default ChatMessagesBoard;
