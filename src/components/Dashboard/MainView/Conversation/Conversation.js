import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { ConversationWrapper } from "./Conversation.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCameraFill } from "react-icons/bs";
import ChatDropDown from "../../Dropdown/ChatDropDown";
import moment from "moment";

const Conversation = ({
  c,
  setCurrentChat,
  currentChat,
  setNotifications,
  notifications,
}) => {
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

  const relatedChat = notifications.filter(
    (chat) => chat.conversationId === c._id
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

  return (
    <ConversationWrapper
      isActive={currentChat?._id === c?._id}
      theme={theme}
      ref={dropdownRef}
      top={top}
      onClick={() => {
        setCurrentChat(c);
        setNotifications([]);
      }}
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
          <TimeRender />
          <div className="unread-wrapper">
            {relatedChat?.length > 0 && (
              <span className="notification">{relatedChat.length}</span>
            )}
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
