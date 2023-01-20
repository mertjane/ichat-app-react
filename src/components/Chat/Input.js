import { useState } from "react";
import { InputWrapper } from "./Chat.styled";
import { BsEmojiSmile } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";
import ChatEmoji from "../EmojiPicker/ChatEmoji";
import { useSelector } from "react-redux";

const Input = ({ handleForm, handleInput, newMessage, setNewMessage}) => {
  const [showList, setShowList] = useState(false);
  const { theme } = useSelector((state) => state.user.userInfo)


  const onEmojiClick = (event, emojiObject) => {
    setNewMessage((prevInput) => prevInput + emojiObject.emoji);
    setShowList(false);
  };

  return (
    <InputWrapper theme={theme} showList={showList}>
      {showList && (
          <div className="emoji-container">
            <ChatEmoji onEmojiClick={onEmojiClick} />
          </div>
      )}
      <div className="inputGroup">
        <BsEmojiSmile onClick={() => setShowList(!showList)} className="btn" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <IoMdAttach className="btn" />
        </label>
      <form onSubmit={handleForm} className="textGroup">
        <input
          value={newMessage}
          onChange={handleInput}
          type="text"
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
      </div>
    </InputWrapper>
  );
};

export default Input;
