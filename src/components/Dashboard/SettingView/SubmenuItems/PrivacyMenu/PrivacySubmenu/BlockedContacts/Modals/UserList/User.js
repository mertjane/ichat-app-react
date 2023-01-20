import { useCallback } from "react";
import { UserWrapper } from "../ListModal.styled";
import { useSelector, useDispatch } from "react-redux";
import { blockUser, getBlockedContacts} from "../../../../../../../../../features/contacts/services";
import { toast } from "react-toastify";


const User = ({ contact }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.user.userInfo);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleBlock = useCallback( async () => {
    const friendId = contact?._id;
    await blockUser({ userId, friendId }, dispatch);
    toast.warning(`${contact?.name} blocked`, { position: "bottom-left" });
    dispatch(getBlockedContacts({ userId }))
  }, [contact?._id, contact?.name, dispatch, userId])
  

  return (
    <UserWrapper theme={theme} onClick={handleBlock}>
      <div className="user-avatar">
        <img
          src={contact?.avatar ? PF + contact.avatar : "user.png"}
          alt="avatar"
          className="avatar"
        />
      </div>
      <div className="user-info">
        <label>
          {contact?.name}
          <span>{contact?.about}</span>
        </label>
      </div>
    </UserWrapper>
  );
};

export default User;
