import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteConversation,
  getConversations,
} from "../../../features/conversation/services";

const ChatDropDown = ({ c }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);

  const handleDeleteChat = useCallback(async () => {
    const conversationId = c?._id;
    await deleteConversation({ conversationId }, dispatch);
    dispatch(getConversations({ userId }));
  }, [c?._id, dispatch, userId]);

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
