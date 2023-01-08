import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startConversation } from "../../../features/conversation/services";
import { useNavigate } from "react-router-dom";
import { UsersWrapper } from "./Contacts.styled";

const User = ({ user, _id, avatar, name, about, setCurrentChat }) => {
  const navigate = useNavigate();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const conversation = useSelector((state) => state.conversations.info)
  
  const [members, setMembers] = useState({
    senderId: userId,
    receiverId: user._id,
  });


  const handleNewConversation = () => {
    // const x = conversation?.map(i => i.members.find(m => m !== members))
    const getChatId = conversation.find(c => c.members.find(mem => mem === members.receiverId))
    // console.log(getChatId)
    if(!getChatId){
      startConversation({ members }, dispatch);
      setCurrentChat(getChatId)
    } else {
      console.log("With this user you already started a chat")
      console.log("chat", members)
      navigate("/");
      setCurrentChat(getChatId)
    }
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
