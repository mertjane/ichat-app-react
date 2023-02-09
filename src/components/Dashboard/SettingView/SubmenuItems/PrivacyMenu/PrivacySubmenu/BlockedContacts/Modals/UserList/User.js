import { useCallback } from "react";
import { UserWrapper } from "../ListModal.styled";
import { useSelector, useDispatch } from "react-redux";
import {
  blockUser,
  getBlockedContacts,
} from "../../../../../../../../../features/contacts/services";
import { toast } from "react-toastify";

const User = ({ contact }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);
  const { blockedContacts } = useSelector((state) => state.contacts);

  let friendId = contact._id;

  const isBlocked =
    blockedContacts.filter((contact) => contact?._id === friendId).length >
    0;

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleBlock = useCallback(async () => {
    const friendId = contact?._id;
    await blockUser({ userId, friendId }, dispatch);
    toast.warning(`${contact?.name} blocked`, { position: "bottom-left" });
    dispatch(getBlockedContacts({ userId }));
  }, [contact?._id, contact?.name, dispatch, userId]);

  return (
    <UserWrapper theme={theme} onClick={handleBlock}>
      <div className="user-avatar">
        <img
          src={
            !isBlocked
              ? contact?.avatar
                ? PF + contact.avatar
                : PF + "default.png"
              : PF + "default.png"
          }
          alt="avatar"
          className="avatar"
        />
      </div>
      <div className="user-info">
        <label>
          {contact?.name}
          <span>{!isBlocked ? contact?.about : <></>}</span>
        </label>
      </div>
    </UserWrapper>
  );
};

export default User;
