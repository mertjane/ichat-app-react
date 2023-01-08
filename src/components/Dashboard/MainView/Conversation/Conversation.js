import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserURL } from "../../../../features/apiCalls";
import { ConversationWrapper } from "./Conversation.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import moment from "moment";

const Conversation = ({ c, setCurrentChat }) => {
  const { userId } = useSelector((state) => state.auth);
  const [chatList, setChatList] = useState();

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getUser = async () => {
      const friendId = c?.members?.find((c) => c !== userId);
      try {
        const res = await axios(`${getUserURL}/${friendId}`);
        setChatList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [c.members, userId]);

  const TimeRender = () => {
    const today = new Date();
    const chatDate = new Date(c.lastMessages[0].createdAt);
    const difference = today.getTime() - chatDate.getTime();
    Math.ceil(difference / (1000 * 3600 * 24));

    if (difference <= 86400000) {
      return <span>{moment(c?.lastMessages[0].createdAt).format("LT")}</span>;
    } else if (difference > 86400000 && difference < 604800000) {
      return <span>{moment(c?.lastMessages[0].createdAt).format("dddd")}</span>;
    } else {
      return (
        <span>
          {moment(c?.lastMessages[0].createdAt).add(10, "days").calendar()}
        </span>
      );
    }
  };

  return (
    <ConversationWrapper onClick={() => setCurrentChat(c)}>
      <img
        src={chatList?.avatar ? PF + chatList.avatar : PF + "user.png"}
        alt="avatar"
      />
      <div className="wrapper">
        <div className="chatInfo">
          <p>{chatList?.name}</p>
          <span>{c?.lastMessages[0]?.text}</span>
        </div>
        <div className="chatTime">
          <TimeRender />
          <MdKeyboardArrowDown className="optionBtn" />
        </div>
      </div>
    </ConversationWrapper>
  );
};

export default Conversation;
