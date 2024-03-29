import { useState, useEffect, useRef } from "react";
import { InputWrapper } from "./Chat.styled";
import { BsEmojiSmile } from "react-icons/bs"; //BsFillMicFill
import { IoMdAttach } from "react-icons/io";
import ChatEmoji from "../EmojiPicker/ChatEmoji";
import ToggleMenu from "./ToggleMenu";
import { useSelector } from "react-redux";

const Input = ({
  handleForm,
  handleInput,
  newMessage,
  setNewMessage,
  imageUrl,
  setImageUrl,
  openRightMenu,
  openSlideSearch,
  setOpenPreview,
  currentChat,
}) => {
  const [showList, setShowList] = useState(false); // emojiList
  const [openMenu, setOpenMenu] = useState(false); // toggleMenu
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth);
  const { blockedContacts, contactList } = useSelector(
    (state) => state.contacts
  );

  // blockedUser condition
  const recipientId = currentChat.members.find((member) => member !== userId);
  const recipientName = contactList.find(
    (contact) => contact?._id === recipientId
  );
  const isBlocked =
    blockedContacts.filter(
      (contact) => contact?._id === recipientId || contact?._id === userId
    ).length > 0;

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
    <InputWrapper
      ref={toggleRef}
      theme={theme}
      showList={showList}
      openRightMenu={openRightMenu}
      openSlideSearch={openSlideSearch}
    >
      {isBlocked ? (
        <span className="blocked-text">
          You cannot send a message to a blocked {recipientName?.name} contact.
        </span>
      ) : (
        <>
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
              <ToggleMenu
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                setOpenPreview={setOpenPreview}
              />
            </div>
            <form onSubmit={handleForm}>
              <input
                value={newMessage}
                onChange={handleInput}
                type="text"
                placeholder="Type a message"
              />
            </form>
            <div className="submit-group">
              <button type="submit">Send</button>
              {newMessage !== "" ? (
                <div className="confirmBtn" />
              ) : (
                <div className="micBtn" />
              )}
            </div>
          </div>
        </>
      )}
    </InputWrapper>
  );
};

export default Input;
