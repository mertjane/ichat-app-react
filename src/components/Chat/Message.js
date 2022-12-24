import React from "react";
import TimeAgo from "timeago-react";
import { MessageWrapper } from "./Chat.styled";

const Message = ({ message, own }) => {
  return (
    <MessageWrapper>
      <div className={own ? "message owner" : "message"}>
        <div className="messageContent">
          <p>{message.text}</p>
          <span>
            <TimeAgo datetime={message.createdAt} />
          </span>
        </div>
      </div>
    </MessageWrapper>
  );
};

export default Message;
