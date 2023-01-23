import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markAsRead } from "../../../../features/messages/messageSlice";
import { getUserURL } from "../../../../features/apiCalls";
import { ConversationWrapper } from "./Conversation.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import ChatDropDown from "../../Dropdown/ChatDropDown";
import axios from "axios";
import moment from "moment";

const Conversation = ({ c, setCurrentChat, socket, currentChat }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { unreadMessages } = useSelector((state) => state.messages);
  const { theme } = useSelector((state) => state.user.userInfo);

  const [chatList, setChatList] = useState();
  const [openMenu, setOpenMenu] = useState(false);
  const [top, setTop] = useState(170);

  const dropdownRef = useRef();
  const buttonRef = useRef();

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

  // dropdown listener
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // dropdown positioning
  let offset = 20;

  useEffect(() => {
    if (openMenu && buttonRef.current) {
      const conversationRect = buttonRef.current.getBoundingClientRect();

      const top = conversationRect.top + offset;
      setTop(top);
    }
  }, [buttonRef, openMenu, offset]);

  const TimeRender = () => {
    const today = new Date();
    const chatDate = new Date(c.lastMessages?.[0]?.createdAt);
    const difference = today.getTime() - chatDate.getTime();
    Math.ceil(difference / (1000 * 3600 * 24));

    if (difference <= 86400000) {
      return (
        <span>{moment(c?.lastMessages?.[0]?.createdAt).format("LT")}</span>
      );
    } else if (difference > 86400000 && difference < 604800000) {
      return (
        <span>{moment(c?.lastMessages?.[0]?.createdAt).format("dddd")}</span>
      );
    } else {
      return <span>{moment(c?.lastMessages?.[0]?.createdAt).format("l")}</span>;
    }
  };

  useEffect(() => {
    socket?.on("newNotification", (data) => {
      const { conversationId } = data;
      dispatch(markAsRead(conversationId));
    });
  }, [socket, dispatch]);

  return (
    <ConversationWrapper
      isActive={currentChat?._id === c?._id}
      theme={theme}
      ref={dropdownRef}
      top={top}
      onClick={() => {
        setCurrentChat(c);
        dispatch(markAsRead(c?._id));
      }}
    >
      <img
        src={chatList?.avatar ? PF + chatList.avatar : PF + "user.png"}
        alt="avatar"
      />
      <div className="wrapper">
        <div className="chatInfo">
          <p>{chatList?.name}</p>
          <span>{c?.lastMessages?.[0]?.text}</span>
        </div>
        <div className="chatTime" ref={buttonRef}>
          <TimeRender />
          <div className="unread-wrapper">
            {unreadMessages?.[c?._id] > 0 && (
              <span className="notification">{unreadMessages?.[c?._id]}</span>
            )}
            <MdKeyboardArrowDown
              className="optionBtn"
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>
          <div className={`chatDropdown ${openMenu ? "active" : "inactive"}`}>
            <ChatDropDown />
          </div>
        </div>
      </div>
    </ConversationWrapper>
  );
};

export default Conversation;
