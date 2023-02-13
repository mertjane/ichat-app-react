import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, ChatBoxContainer } from "./Chat.styled";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  sendMessage,
  getMessages,
  loadMoreMessages,
  updateReceivedCheck,
  updateReadReceipt,
} from "../../features/messages/services";
import { getConversations } from "../../features/conversation/services";
import incomingMsg from "../../assets/incoming.mp3";
import messageSend from "../../assets/message_send.mp3";
import Navbar from "./Navbar";
import Message from "./Message";
import Input from "./Input";
import PreviewFile from "./PreviewFile";
import Spinner from "../Loading/Spinner";
import _ from "lodash";
import moment from "moment";

const Chat = ({
  socket,
  currentChat,
  setCurrentChat,
  isOnline,
  setIsOnline,
  openRightMenu,
  setOpenRightMenu,
  openSlideSearch,
  setOpenSlideSearch,
}) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userMessages, hasMore } = useSelector((state) => state.messages);
  const { theme, drawings, chatWallpaper, sounds } = useSelector(
    (state) => state.user.userInfo
  );

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [istyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  /* const [lastSeen, setLastSeen] = useState(`${moment().format('L') + " " + moment().format("HH:mm")}`) // emit lastSeen */
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const [openPreview, setOpenPreview] = useState(false); // file view
  const [imageUrl, setImageUrl] = useState([]); // image upload

  const scrollRef = useRef();
  const containerRef = useRef(null);
  const [backToDown, setBackToDown] = useState(false);

  // Grouping Messages && Time rendering
  const groups = _.groupBy(userMessages, (m) => {
    const today = new Date();
    const messageDate = new Date(m.createdAt);
    const difference = today.getTime() - messageDate.getTime();

    if (difference <= 86400000) {
      const currentDate = new Date();
      const messageDate = new Date(m.createdAt);
      if (currentDate.getDate() === messageDate.getDate()) {
        return "Today";
      } else {
        return "Yesterday";
      }
    } else if (difference > 86400000 && difference < 604800000) {
      return moment(m.createdAt).format("dddd");
    } else {
      return moment(m.createdAt).format("L");
    }
  });

  const targetUserId = currentChat?.members?.filter((m) => m !== userId)[0]; // opposite user of currentChat

  useEffect(() => {
    socket.emit("addUser", userId);
    socket.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
    socket.on(
      "user-online-status",
      ({ userId: targetUserId, isOnline: targetUserIsOnline }) => {
        if (targetUserId !== userId) {
          setIsOnline(targetUserIsOnline);
        }
      }
    );
    // Trigger checkUserOnlineStatus when chat between two users is opened
    if (currentChat._id) {
      const checkUserOnlineStatus = (targetUserId) => {
        socket.emit("check-user-online", targetUserId, (isOnline) => {
          setIsOnline(isOnline);
          /* setLastSeen(lastSeen) */
        });
      };
      checkUserOnlineStatus(targetUserId);
    }
    socket.emit("join-chat", currentChat._id);
    socket.on("start-typing-from-server", () => setIsTyping(true));
    socket.on("stop-typing-from-server", () => setIsTyping(false));
  }, [socket, currentChat._id, userId, targetUserId, setIsOnline]);

  // fething messages
  useEffect(() => {
    dispatch(getMessages({ currentChat, messages }));
  }, [currentChat, dispatch, messages]);

  // scroll behavior
  const handleScroll = useCallback(
    async (e) => {
      const { scrollTop } = e.target;
      if (scrollTop === 0 && userMessages.length >= 30 && hasMore) {
        setIsLoading(true);
        setTimeout(() => {
          setOffset(offset + 30);
          dispatch(loadMoreMessages({ currentChat, offset }));
        }, 1000);
      } else {
        setIsLoading(false);
      }
      if (scrollTop < 400) {
        setBackToDown(true);
      } else {
        setBackToDown(false);
      }
    },
    [userMessages.length, currentChat, dispatch, offset, hasMore]
  );

  const scrollDown = () => {
    containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    setBackToDown(false);
  };

  // message sending
  const handleInput = (e) => {
    setNewMessage(e.target.value);
    socket.emit("start-typing", {
      roomId: currentChat._id,
    });
    if (typingTimeout) clearTimeout(typingTimeout);
    setTypingTimeout(
      setTimeout(() => {
        socket.emit("stop-typing", {
          roomId: currentChat._id,
        });
      }, 200)
    );
  };

  const handleForm = useCallback(
    async (e) => {
      e.preventDefault();
      sendMessage({ currentChat, userId, newMessage }, dispatch);
      const receiverId = currentChat?.members?.find((m) => m !== userId);
      socket.emit("sendMessage", {
        conversationId: currentChat._id,
        senderId: userId,
        receiverId,
        text: newMessage,
      });
      setNewMessage("");
      if (sounds) {
        // check the value of sounds from Redux state
        new Audio(messageSend).play(); // play the audio if sounds is true
      }
      updateReceivedCheck({ currentChat }, dispatch);
      socket.emit("send-notification", {
        conversationId: currentChat._id,
        receiver: receiverId,
        sender: userId,
        unreadMessages: currentChat.unreadMessages,
      });
      await dispatch(getConversations({ userId }));
      setTimeout(() => {
        dispatch(getMessages({ currentChat, messages: messages[0] }));
      }, 1000);
    },
    [dispatch, currentChat, sounds, userId, socket, newMessage, messages]
  );

  // arrival messages
  useEffect(() => {
    socket.on("getMessage", (data) => {
      setArrivalMessage({
        conversationId: currentChat._id,
        sender: data.senderId,
        text: data.text,
        imageUrl: data.image,
      });
      if (sounds) {
        // check the value of sounds from Redux state
        new Audio(incomingMsg).play(); // play the audio if sounds is true
      }
    });
  }, [currentChat._id, socket, sounds, imageUrl]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members?.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
    if (isOnline) {
      const receiverId = currentChat?.members?.find((m) => m !== userId);
      updateReadReceipt({ currentChat, receiverId }, dispatch);
    }
  }, [arrivalMessage, currentChat, dispatch, isOnline, userId]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userMessages, imageUrl, openPreview]);

  const blobs = Array.from(
    imageUrl,
    (file) => new Blob([file], { type: file.type })
  );
  const images = blobs.map((blob) => URL.createObjectURL(blob));

  return (
    <Wrapper theme={theme}>
      <Navbar
        /* lastSeen={lastSeen}
        setLastSeen={setLastSeen} */
        isOnline={isOnline}
        istyping={istyping}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        messages={messages}
        openRightMenu={openRightMenu}
        setOpenRightMenu={setOpenRightMenu}
        openSlideSearch={openSlideSearch}
        setOpenSlideSearch={setOpenSlideSearch}
      />
      {openPreview === true ? (
        <PreviewFile
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          currentChat={currentChat}
          newMessage={newMessage}
          open={openPreview}
          image={images}
          socket={socket}
          onClose={() => setOpenPreview(false)}
        />
      ) : (
        <>
          <ChatBoxContainer
            chatWallpaper={chatWallpaper}
            drawings={drawings}
            theme={theme}
            onScroll={handleScroll}
            ref={containerRef}
          >
            {isLoading && <Spinner />}
            {Object.entries(groups)
              .reverse()
              .slice()
              .map(([day, userMessages]) => (
                <div className="day-wrapper" key={day}>
                  <h3 className="text">{day?.toUpperCase()}</h3>
                  {userMessages
                    .reverse()
                    .slice()
                    .map((m) => (
                      <div key={m._id} ref={scrollRef}>
                        <Message
                          socket={socket}
                          onlineUsers={onlineUsers}
                          isOnline={isOnline}
                          currentChat={currentChat}
                          imageUrl={imageUrl}
                          messages={messages}
                          message={m}
                          own={m.sender === userId}
                        />
                      </div>
                    ))}
                </div>
              ))}
            {backToDown && (
              <div onClick={scrollDown} className="scrollBtn">
                <MdKeyboardArrowDown className="back-down-btn" />
              </div>
            )}
          </ChatBoxContainer>
          <Input
            openSlideSearch={openSlideSearch}
            openRightMenu={openRightMenu}
            setImageUrl={setImageUrl}
            setOpenPreview={setOpenPreview}
            handleForm={handleForm}
            handleInput={handleInput}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            currentChat={currentChat}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Chat;
