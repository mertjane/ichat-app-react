import React, { useState, useEffect, useRef } from "react";
import MessageDropdown from "../Dashboard/Dropdown/MessageDropdown";
import moment from "moment";
import { MessageWrapper } from "./Message.styled";
import { useSelector } from "react-redux";
import MediaView from "./MediaView";


const Message = ({ message, own, currentChat, imageUrl, socket, isOnline }) => {
  const { theme, privacy } = useSelector((state) => state.user.userInfo);
  const { userMessages } = useSelector((state) => state.messages);
  const [openMenu, setOpenMenu] = useState(false); // dropdown
  const [openModal, setOpenModal] = useState(false); // dropdown subModal
  const [openMedia, setOpenMedia] = useState(false); // media messages modal
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const readReceipts = userMessages.filter(
    (userMessage) => userMessage.isRead === true
  );

  const dropdownRef = useRef();
  const buttonRef = useRef();

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
  // let offset = -10;
  let offset = 20;
  // let leftOffset = -180;
  let leftOffset = -20;

  useEffect(() => {
    if (openMenu && buttonRef.current) {
      const messageRect = buttonRef.current.getBoundingClientRect();

      const top = messageRect.top + offset;
      const left = messageRect.left + leftOffset;
      setTop(top);
      setLeft(left);
    }
  }, [buttonRef, openMenu, offset, leftOffset]);

  return (
    <MessageWrapper
      imageUrl={imageUrl}
      top={top}
      left={left}
      theme={theme}
      ref={dropdownRef}
    >
      <div className={own ? "message owner" : "message"}>
        <div className="messageContent">
          {!message.imageUrl ? (
            <p className="message-text">{message?.text}</p>
          ) : (
            <img
              onClick={() => setOpenMedia(true)}
              src={message?.imageUrl}
              alt="imgMsg"
            />
          )}
          <MediaView
            currentChat={currentChat}
            message={message}
            open={openMedia}
            onClose={() => setOpenMedia(false)}
          />
          <div className="messageTime" ref={buttonRef}>
            <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)} />
            <span className="time">
              {moment(message?.createdAt).format("HH:mm")}
            </span>
            {privacy.readReceipt === true ? (
              message.isReceived === false ? (
                <div className="singleTick" />
              ) : (
                <div
                  className={
                    readReceipts?.includes(message)
                      ? "read-receipt"
                      : "doubleTick"
                  }
                />
              )
            ) : (
              <div className="doubleTick" />
            )}
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

export default React.memo(Message);
