import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startConversation } from "../../../features/conversation/services";
import { UsersWrapper } from "./Contacts.styled";

const User = ({ user, _id, avatar, name, about, setCurrentChat }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const conversation = useSelector((state) => state.conversations.info);
  const { theme } = useSelector((state) => state.user.userInfo);
  const { blockedContacts } = useSelector((state) => state.contacts);

  const [newConversation, setNewConversation] = useState();

  const [members, setMembers] = useState({
    senderId: userId,
    receiverId: user._id,
  });

  const isBlocked =
    blockedContacts.filter((contact) => contact?._id === user._id).length > 0; // if user blocked

  /* const handleNewConversation = async () => {
    const getChatId = conversation.find(c => c.members.find(mem => mem === members.receiverId))
    if(!getChatId){
      await startConversation({ members }, dispatch);
      setCurrentChat(getChatId)
    } else {
      setCurrentChat(getChatId)
    }
    setMembers({});
  }; */

  const handleNewConversation = async () => {
    const existingConversation = conversation.find((c) =>
      c.members.find((mem) => mem === members.receiverId)
    );
    if (!existingConversation) {
      const createdConversation = await startConversation(
        { members },
        dispatch
      );
      setNewConversation(createdConversation);
      setCurrentChat(newConversation);
    } else {
      setCurrentChat(existingConversation);
    }
    setMembers({});
  };

  return (
    <UsersWrapper theme={theme} onClick={handleNewConversation} key={_id}>
      {user?.privacy?.profilePhoto && (
        <img
          src={
            !isBlocked
              ? user?.privacy?.profilePhoto === "none"
                ? PF + "default.png"
                : avatar
                ? PF + avatar
                : PF + "default.png"
              : PF + "default.png"
          }
          alt="avatar"
        />
      )}
      <div className="user-info">
        <label>{name}</label>
        {user?.privacy?.aboutMe && (
          <span>
            {!isBlocked ? (user?.privacy.aboutMe === "none" ? "" : about) : ""}
          </span>
        )}
      </div>
    </UsersWrapper>
  );
};

export default User;
