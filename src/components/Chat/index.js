import React from "react";
import { Wrapper } from "./Chat.styled";
import Navbar from "./Navbar";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <Wrapper>
      <Navbar/>
      <Messages />
      <Input />
    </Wrapper>
  );
};

export default Chat;
