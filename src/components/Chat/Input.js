import { useState, useEffect, useRef } from "react";
import { InputWrapper } from "./Chat.styled";
import { BsEmojiSmile, BsFillMicFill } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";
import ChatEmoji from "../EmojiPicker/ChatEmoji";
import ToggleMenu from "./ToggleMenu";
import { useSelector } from "react-redux";

const Input = ({ handleForm, handleInput, newMessage, setNewMessage }) => {
  const [showList, setShowList] = useState(false); // emojiList
  const [openMenu, setOpenMenu] = useState(false); // toggleMenu
  const { theme } = useSelector((state) => state.user.userInfo);

  const toggleRef = useRef();

  const onEmojiClick = (event, emojiObject) => {
    setNewMessage((prevInput) => prevInput + emojiObject.emoji);
    setShowList(false);
  };

  // dropdown listener
  useEffect(() => {
    const handler = (e) => {
      if (!toggleRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <InputWrapper theme={theme} showList={showList}>
      {showList && (
        <div className="emoji-container">
          <ChatEmoji onEmojiClick={onEmojiClick} />
        </div>
      )}
      <div className="inputGroup">
        <div className="btnGroup">
          <BsEmojiSmile
            onClick={() => setShowList(!showList)}
            className="btn"
          />
          <IoMdAttach
            onClick={() => setOpenMenu(!openMenu)}
            className={`btn ${openMenu ? "active" : "inactive"}`}
          />
        </div>
        <div className={`input-toggle ${openMenu ? "active" : "inactive"}`}>
          <ToggleMenu />
        </div>
        <form onSubmit={handleForm} className="textGroup">
          <input
            value={newMessage}
            onChange={handleInput}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit">Send</button>
          <BsFillMicFill className="micBtn" />
        </form>
      </div>
    </InputWrapper>
  );
};

export default Input;
