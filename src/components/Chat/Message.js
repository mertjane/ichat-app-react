import { useState, useEffect, useRef } from "react";
import MessageDropdown from "../Dashboard/Dropdown/MessageDropdown";
import moment from "moment";
import { MessageWrapper } from "./Chat.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";

const Message = ({ message, own, currentChat }) => { 
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const { theme } = useSelector((state) => state.user.userInfo);

  const dropdownRef = useRef();
  const buttonRef = useRef();

  // message time display
  const TimeRender = () => {
    const today = new Date();
    const messageTime = new Date(message.createdAt);
    const difference = today.getTime() - messageTime.getTime();
    Math.ceil(difference / (1000 * 3600 * 24));

    if (difference <= 60000) {
      return (
        <span className="time">
          {moment(message.createdAt).startOf(message.createdAt).fromNow()}
        </span>
      );
    } else {
      return (
        <span className="time">{moment(message.createdAt).format("LT")}</span>
      );
    }
  };

  // dropdown listener
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // dropdown positioning
  let offset = -10;
  let leftOffset = -180;

  useEffect(() => {
    if (openMenu && buttonRef.current) {
      const messageRect = buttonRef.current.getBoundingClientRect();

      const top = messageRect.top + offset;
      const left = messageRect.left + leftOffset;
      setTop(top);
      setLeft(left)
    }
  }, [buttonRef, openMenu, offset, leftOffset]);

  return (
    <MessageWrapper top={top} left={left} theme={theme} ref={dropdownRef}>
      <div className={own ? "message owner" : "message"}>
        <div className="messageContent">
          <p>{message.text}</p>
          <div className="messageTime" ref={buttonRef}>
            <MdKeyboardArrowDown
              className="menu-icon"
              onClick={() => setOpenMenu(!openMenu)}
            />
            <TimeRender />
          </div>
          <div
            className={`messageDropdown ${openMenu ? "active" : "inactive"}`}
          >
            <MessageDropdown
              message={message}
              currentChat={currentChat}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </div>
        </div>
      </div>
    </MessageWrapper>
  );
};

export default Message;
