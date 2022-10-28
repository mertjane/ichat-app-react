import React from "react";
import { InputWrapper } from "./Chat.styled";
import { BsEmojiSmile } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";

const Input = () => {
  return (
    <InputWrapper>
      <div className="btnGroup">
        <BsEmojiSmile className="btn" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <IoMdAttach className="btn" />
        </label>
      </div>
      <div className="textGroup">
        <input type="text" placeholder="Type a message" />
        <button>Send</button>
      </div>
    </InputWrapper>
  );
};

export default Input;
