import { useCallback } from "react";
import { Overlay } from "./BlockUser.styled";
import { useSelector, useDispatch } from "react-redux";
import { blockUser, getBlockedContacts } from "../../features/contacts/services";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const BlockUser = ({ open, onClose, currentChat }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userId } = useSelector((state) => state.auth);
  const { contactList, blockedContacts } = useSelector(
    (state) => state.contacts
  );

  const friend = currentChat?.members.find((member) => member !== userId);
  const friendData = contactList.find((contact) => contact?._id === friend);

  const handleBlockUser = useCallback(async () => {
    const isFriendBlocked = blockedContacts.find((contact) => contact._id === friend);
    if (!isFriendBlocked) {
      await blockUser({ friendId: friend, userId }, dispatch);
      await dispatch(getBlockedContacts({ userId }));
      onClose();
      if (theme === "dark") {
        toast.warning(`${friendData?.name} has been blocked`, {
          position: "bottom-left",
          theme: "dark",
        });
      } else {
        toast.warning(`${friendData?.name} has been blocked`, {
          position: "bottom-left",
          theme: "light",
        });
      }
    } else {
      onClose();
      if (theme === "dark") {
        toast.warning(`${friendData?.name} is already blocked`, {
          position: "bottom-left",
          theme: "dark",
        });
      } else {
        toast.warning(`${friendData?.name} is already blocked`, {
          position: "bottom-left",
          theme: "light",
        });
      }
    }
  }, [
    blockedContacts,
    dispatch,
    friend,
    friendData?.name,
    onClose,
    theme,
    userId,
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
        <h3 className="title">{`${friendData?.name} will you be banned?`}</h3>
        <p>The last messages from this user will be forwarded to iChat.</p>
        <hr />
        <span>
          Blocked contacts will no longer be able to send you messages. This
          person will not be notified.
        </span>
        <div className="btnGroup">
          <button onClick={onClose}>CANCEL</button>
          <button onClick={handleBlockUser} className="confirm-btn">
            BLOCK
          </button>
        </div>
      </motion.div>
    </Overlay>
  );
};

export default BlockUser;
