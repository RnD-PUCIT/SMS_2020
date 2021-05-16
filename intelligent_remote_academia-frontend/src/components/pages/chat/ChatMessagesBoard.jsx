import React from "react";
import { Typography } from "@material-ui/core";

const ChatMessagesBoard = ({ chatId }) => {
  return (
    <div>
      <Typography>Messages Board</Typography>
      <Typography>{chatId}</Typography>
    </div>
  );
};

export default ChatMessagesBoard;
