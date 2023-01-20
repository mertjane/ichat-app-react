import React from "react";
import MessageModal from "../../Chat/MessageModal";

const MessageDropdown = ({ setOpenModal, openModal, currentChat, message }) => {
  return (
    <>
      <li className="menu-item">Message information</li>
      <li className="menu-item">Reply</li>
      <li
        onClick={() => {
          setOpenModal(true);
        }}
        className="menu-item"
      >
        Delete message
      </li>
      <MessageModal
        message={message}
        currentChat={currentChat}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default MessageDropdown;
