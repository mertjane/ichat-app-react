import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteConversation,
  getConversations,
} from "../../../features/conversation/services";

const ChatDropDown = ({ c, setCurrentChat }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);

  const handleDeleteChat = useCallback(async () => {
    const conversationId = c?._id;
    await deleteConversation({ conversationId }, dispatch);
    toast.warning("Selected chat has been deleted", { position: "bottom-left" });
    dispatch(getConversations({ userId }));
    setCurrentChat(null);
  }, [c?._id, dispatch, userId, setCurrentChat]);

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
