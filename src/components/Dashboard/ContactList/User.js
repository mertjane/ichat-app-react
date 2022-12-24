import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startConversation } from "../../../features/conversation/services";
import { UsersWrapper } from "./Contacts.styled";

const User = ({ user, _id, avatar, name, about }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);

  const [members, setMembers] = useState({
    senderId: userId,
    receiverId: user._id,
  });

  const handleNewConversation = () => {
    startConversation({ members }, dispatch);
    setMembers();
  };

  return (
    <UsersWrapper onClick={handleNewConversation} key={_id}>
      <img src={avatar ? PF + avatar : PF + "user.png"} alt="avatar" />
      <div className="user-info">
        <label>{name}</label>
        <span>{about}</span>
      </div>
    </UsersWrapper>
  );
};

export default User;
