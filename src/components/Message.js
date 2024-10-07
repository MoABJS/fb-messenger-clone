import { Card, CardContent, Typography } from "@mui/material";
import "./Message.css";
import { forwardRef } from "react";

const Message = forwardRef(({ message, currentUsername }, ref) => {
  const isUser = currentUsername === message.username;
  return (
    <div className={`message ${isUser ? "message__user" : ""}`} ref={ref}>
      <Card
        className={`${isUser ? "message__userCard" : "message__guestCard"}`}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {isUser
              ? message.message
              : `${message.username ? message.username : "Unknown"}: ${
                  message.message
                }`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
