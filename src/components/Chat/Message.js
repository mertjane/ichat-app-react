import React from "react";
import moment from "moment";
import { MessageWrapper } from "./Chat.styled";

const Message = ({ message, own }) => {

    const TimeRender = () => {
    const today = new Date();
    const messageTime = new Date(message.createdAt);
    const difference = today.getTime() - messageTime.getTime();
    Math.ceil(difference / (1000 * 3600 * 24));

    if (difference <= 60000) {
      return <span>{moment(message.createdAt).startOf(message.createdAt).fromNow()}</span>
    } else if (difference <= 86400000) {
      return <span>{moment(message.createdAt).format('LT')}</span>
    } else if(difference <= 604800000) {
      return (
        <span>{moment(message.createdAt).format('dddd')}</span>
      );
    } else{
      return (
        <span>{moment(message.createdAt).format('L')}</span>
      )
    }
  };

  return (
    <MessageWrapper>
      <div className={own ? "message owner" : "message"}>
        <div className="messageContent">
          <p>{message.text}</p>
          <span>
            <TimeRender />
          </span>
        </div>
      </div>
    </MessageWrapper>
  );
};

export default Message;
