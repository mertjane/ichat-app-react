import { UserWrapper } from "./Modals.styled";
import { MdOutlineAdd, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../features/contacts/services";
import { toast } from "react-toastify";

const User = ({ _id, avatar, username, user }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const currentUsername = useSelector((state) => state.auth.username);
  const contactList = useSelector((state) => state.contacts.contactList);
  const { theme } = useSelector((state) => state.user.userInfo);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const contactIds = contactList.map((contact) => contact?._id);

  const handleAddContact = () => {
    const contactIds = contactList.map((contact) => contact?._id);
    if (!contactIds.includes(user?.[0]?._id)) {
      const friendId = user?.[0]?._id;
      addUser({ userId, friendId }, dispatch);
      toast.success(`${user?.[0]?.username} has been added`, {
        position: "bottom-left",
      });
    }
  };

  const handleRemoveContact = () => {
    const contactIds = contactList.map((contact) => contact?._id);
    if (contactIds.includes(user?.[0]?._id)) {
      const friendId = user?.[0]?._id;
      removeUser({ userId, friendId }, dispatch);
      toast.warning(`${user?.[0]?.username} has been removed`, {
        position: "bottom-left",
      });
    }
  };

  return (
    <UserWrapper theme={theme} key={_id}>
      <img
        src={avatar ? PF + avatar : PF + "user.png"}
        alt="avatar"
        className="avatar"
      />
      <div className="user-info">
        <label>{username}</label>
        {username !== currentUsername && (
          <>
            {contactIds.includes(user?.[0]?._id) ? (
              <button onClick={handleRemoveContact} className="addBtn">
                <MdOutlineRemoveCircleOutline className="icon" />
              </button>
            ) : (
              <button onClick={handleAddContact} className="addBtn">
                <MdOutlineAdd className="icon" />
              </button>
            )}
          </>
        )}
      </div>
    </UserWrapper>
  );
};

export default User;
