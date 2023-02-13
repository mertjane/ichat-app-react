import { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ConversationWrapper } from "./Conversation.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import {
  clearNewNotifications,
  getConversations,
} from "../../../../features/conversation/services";
import ChatDropDown from "../../Dropdown/ChatDropDown";
import moment from "moment";

const Conversation = ({
  c,
  setCurrentChat,
  currentChat,
  setNotifications,
  notifications,
}) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { contactList, blockedContacts } = useSelector(
    (state) => state.contacts
  );
  const { theme } = useSelector((state) => state.user.userInfo);
  const [openMenu, setOpenMenu] = useState(false);
  const [top, setTop] = useState(170);

  const friend = c.members.find((member) => member !== userId);
  const friendData = contactList.find((contact) => contact._id === friend);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const isBlocked =
    blockedContacts.filter((contact) => contact?._id === friend).length > 0; // if user blocked

  const dropdownRef = useRef();
  const buttonRef = useRef();

  const instantMessageCount = notifications.filter(
    (chat) => chat.conversationId === c._id
  );
  const newMessageCount = c.notifications?.filter(
    (chat) => chat.sender !== userId
  );

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
  let offset = 35;

  useEffect(() => {
    if (openMenu && buttonRef.current) {
      const conversationRect = buttonRef.current.getBoundingClientRect();
      const top = conversationRect.top + offset;
      setTop(top);
    }
  }, [buttonRef, openMenu, offset]);

  const TimeRender = ({ c }) => {
    const today = new Date();
    const messageDate = new Date(c?.lastMessages?.[0]?.createdAt);
    const difference = today.getTime() - messageDate.getTime();

    if (difference <= 86400000) {
      const currentDate = new Date();
      const messageDate = new Date(c?.lastMessages?.[0]?.createdAt);
      if (currentDate.getDate() === messageDate.getDate()) {
        return (
          <span>{moment(c?.lastMessages?.[0]?.createdAt).format("HH:mm")}</span>
        );
      } else {
        return <span>Yesterday</span>;
      }
    } else if (difference > 86400000 && difference < 604800000) {
      return (
        <span>{moment(c?.lastMessages?.[0]?.createdAt).format("dddd")}</span>
      );
    } else {
      return <span>{moment(c?.lastMessages?.[0]?.createdAt).format("L")}</span>;
    }
  };

  const NewMessageRender = ({ newMessageCount, instantMessageCount }) => {
    if (!instantMessageCount?.length > 0) {
      if (newMessageCount?.length > 0) {
        return <span className="notification">{newMessageCount?.length}</span>;
      }
    } else if (!newMessageCount?.length > 0) {
      if (instantMessageCount?.length > 0) {
        return (
          <span className="notification">{instantMessageCount?.length}</span>
        );
      }
    }
  };

  const handleChatClick = useCallback(async () => {
    if (!currentChat) {
      setCurrentChat(c);
    }
    if (instantMessageCount?.length > 0) {
      await setNotifications([]);
    }
    if (newMessageCount?.length > 0) {
      await clearNewNotifications({ c, userId }, dispatch);
      await dispatch(getConversations({ userId }));
    }
  }, [
    c,
    currentChat,
    dispatch,
    userId,
    setCurrentChat,
    setNotifications,
    newMessageCount?.length,
    instantMessageCount?.length,
  ]);

  return (
    <ConversationWrapper
      isActive={currentChat?._id === c?._id}
      theme={theme}
      ref={dropdownRef}
      top={top}
      onClick={handleChatClick}
    >
      <div className="image-wrapper">
        {friendData?.privacy?.profilePhoto && (
          <img
            src={
              !isBlocked
                ? friendData?.privacy?.profilePhoto === "none"
                  ? PF + "default.png"
                  : friendData?.avatar
                  ? PF + friendData.avatar
                  : PF + "default.png"
                : PF + "default.png"
            }
            alt="avatar"
          />
        )}
      </div>
      <div className="wrapper">
        <div className="chatInfo">
          <p>{friendData?.name}</p>
          <span>
            {c?.lastMessages?.[0] ? (
              c?.lastMessages?.[0]?.imageUrl ? (
                <>
                  {" "}
                  <BsCameraFill /> {"photo"}{" "}
                </>
              ) : c?.lastMessages?.[0]?.text?.length > 30 ? (
                c?.lastMessages?.[0]?.text.substring(0, 30) + "..."
              ) : (
                c?.lastMessages?.[0]?.text
              )
            ) : (
              "No messages yet"
            )}
          </span>
        </div>
        <div className="chatTime" ref={buttonRef}>
          <TimeRender c={c} />
          <div className="unread-wrapper">
            <NewMessageRender
              newMessageCount={newMessageCount}
              instantMessageCount={instantMessageCount}
            />
            <MdKeyboardArrowDown
              className="optionBtn"
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>
          <div className={`chatDropdown ${openMenu ? "active" : "inactive"}`}>
            <ChatDropDown setCurrentChat={setCurrentChat} c={c} />
          </div>
        </div>
      </div>
    </ConversationWrapper>
  );
};

export default Conversation;
