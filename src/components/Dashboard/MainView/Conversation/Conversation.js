import { useState, useEffect } from "react";
// import LastMessage from "../LastMessage/LastMessage";
import { useSelector } from "react-redux";
//import { getLastMessage } from "../../../../features/messages/services";
import { getUserURL } from "../../../../features/apiCalls";
import { ConversationWrapper } from "./Conversation.styled";
import { MdKeyboardArrowDown } from "react-icons/md";

import axios from "axios";

const Conversation = ({ c, setCurrentChat }) => {
  // const dispatch = useDispatch();
  const [list, setList] = useState(null);
  const { userId } = useSelector((state) => state.auth);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // const lastMessage = messages.length - 1

  useEffect(() => {
    const friendId = c.members.find((m) => m !== userId);
    const getUser = async () => {
      try {
        const res = await axios(`${getUserURL}/${friendId}`);
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [c.members, userId]);

  return (
    <ConversationWrapper onClick={() => setCurrentChat(c)}>
      <img
        src={list?.avatar ? PF + list.avatar : PF + "user.png"}
        alt="avatar"
      />
      <div className="chatInfo">
        <span>{list?.name}</span>
        <p>last message</p>
      </div>
      <div className="chatTime">
        <span>1:55 pm</span>
        <MdKeyboardArrowDown className="optionBtn" />
      </div>
    </ConversationWrapper>
  );
};

export default Conversation;
