import { useState, useEffect, useRef } from "react";
import MessageDropdown from "../Dashboard/Dropdown/MessageDropdown";
import moment from "moment";
import { MessageWrapper } from "./Chat.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";

const Message = ({ message, own, currentChat }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { theme } = useSelector((state) => state.user.userInfo)

  const dropdownRef = useRef();

  const TimeRender = () => {
    const today = new Date();
    const messageTime = new Date(message.createdAt);
    const difference = today.getTime() - messageTime.getTime();
    Math.ceil(difference / (1000 * 3600 * 24));

    if (difference <= 60000) {
      return (
        <span>
          {moment(message.createdAt).startOf(message.createdAt).fromNow()}
        </span>
      );
    } else if (difference <= 86400000) {
      return <span>{moment(message.createdAt).format("LT")}</span>;
    } else if (difference <= 604800000) {
      return <span>{moment(message.createdAt).format("dddd")}</span>;
    } else {
      return <span>{moment(message.createdAt).format("L")}</span>;
    }
  };

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

  return (
    <MessageWrapper theme={theme} ref={dropdownRef}>
      <div className={own ? "message owner" : "message"}>
        <div className="messageContent">
          <p>{message.text}</p>
          <span>
            <MdKeyboardArrowDown
              className="menu-icon"
              onClick={() => setOpenMenu(!openMenu)}
            />
            <TimeRender />
          </span>
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
