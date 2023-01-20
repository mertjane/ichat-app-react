import { useDispatch } from "react-redux";
import { deleteConversation } from "../../../features/conversation/services";
import React from "react";

const ChatDropDown = ({ c }) => {
  const dispatch = useDispatch();

  const handleDeleteChat = () => {
    const conversationId = c?._id;
    deleteConversation({ conversationId }, dispatch);
  };

  return (
    <>
      <li className="menu-item">Archive chat</li>
      <li className="menu-item">Mute notifications</li>
      <li onClick={handleDeleteChat} className="menu-item">
        Delete chat
      </li>
      <li className="menu-item">Pin chat</li>
    </>
  );
};

export default ChatDropDown;
