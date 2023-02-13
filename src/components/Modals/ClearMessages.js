import { useCallback } from "react";
import { Overlay } from "./ClearMessages.styled";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { clearMessages, getMessages } from "../../features/messages/services";
import {
  deleteConversation,
  getConversations,
} from "../../features/conversation/services";
import { toast } from "react-toastify";

const ClearMessages = ({
  open,
  onClose,
  currentChat,
  messages,
  action,
  setCurrentChat,
}) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth);
  const { userMessages } = useSelector((state) => state.messages);

  let conversationId = currentChat._id;

  const handleClearChat = useCallback(async () => {
    if (action === "clear") {
      if (userMessages.length > 0) {
        await clearMessages({ currentChat }, dispatch);
        if (theme === "dark") { 
          toast.success("Messages cleared", {
            position: "bottom-left",
            theme: "dark",
          });
        } else {
          toast.success("Messages cleared", {
            position: "bottom-left",
            theme: "light",
          });
        }
        await dispatch(getMessages({ currentChat, messages }));
        await dispatch(getConversations({ userId }));
        onClose();
      } else {
        onClose();
        if (theme === "dark") {
          toast.error("No message found!", {
            position: "bottom-left",
            theme: "dark",
          });
        } else {
          toast.error("No message found!", {
            position: "bottom-left",
            theme: "light",
          });
        }
      }
    } else if (action === "delete") {
      await deleteConversation({ conversationId }, dispatch);
      await setCurrentChat(null);
      await dispatch(getConversations({ userId }));
      onClose();
      if (theme === "dark") {
        toast.success("The selected chat has been deleted", {
          position: "bottom-left",
          theme: "dark",
        });
      } else {
        toast.success("The selected chat has been deleted", {
          position: "bottom-left",
          theme: "light",
        });
      }
    }
  }, [
    setCurrentChat,
    conversationId,
    currentChat,
    dispatch,
    messages,
    userMessages.length,
    onClose,
    userId,
    theme,
    action,
  ]);

  if (!open) return null;
  return (
    <Overlay theme={theme}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="modal-wrapper"
      >
        <h3 className="note">Changes to clearing and deleting chats</h3>
        <p className="text">
          If you clear or delete the entire chat, only messages on this device
          and your devices with newer versions of iChat will be removed.
        </p>
        <div className="btnGroup">
          <button onClick={onClose}>CANCEL</button>
          <button onClick={handleClearChat} className="confirm-btn">
            CONTINUE
          </button>
        </div>
      </motion.div>
    </Overlay>
  );
};

export default ClearMessages;
