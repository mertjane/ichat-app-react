import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, ChatBoxContainer } from "./Chat.styled";
import { sendMessage, getMessages } from "../../features/messages/services";
import incomingMsg from "../../assets/incoming.mp3";
import Navbar from "./Navbar";
import Message from "./Message";
import Input from "./Input";
import PreviewFile from "./PreviewFile";
import Spinner from "../Loading/Spinner";
import _ from "lodash";
import moment from "moment";

const Chat = ({ currentChat, socket }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userMessages, unreadMessages } = useSelector(
    (state) => state.messages
  );
  const { theme, drawings, chatWallpaper } = useSelector(
    (state) => state.user.userInfo
  );

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [istyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [openPreview, setOpenPreview] = useState(false); // file view
  const [imageUrl, setImageUrl] = useState(""); // file view

  const scrollRef = useRef();
  const containerRef = useRef(null);

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
      return moment(m.createdAt).format("l");
    }
  });

  useEffect(() => {
    socket.emit("addUser", userId);
    socket.on("getUsers", (users) => {
      setOnlineUsers(users);
    });
    socket.emit("user-online");
    socket.emit("join-chat", currentChat._id);
    socket.on("user-online-from-server", () => setIsOnline(true));
    socket.on("start-typing-from-server", () => setIsTyping(true));
    socket.on("stop-typing-from-server", () => setIsTyping(false));
    socket.on("user-disconnect-from-server", () => setIsOnline(false));
  }, [socket, currentChat._id, userId]);

  // fething messages
  useEffect(() => {
    dispatch(getMessages({ currentChat, messages }));
  }, [currentChat, dispatch, messages]);

  // scroll behavior
  const handleScroll = useCallback(
    (e) => {
      const { scrollTop } = e.target;
      if (scrollTop === 0 && userMessages.length >= 30) {
        setIsLoading(true);
        console.log("at the top");
      } else {
        setIsLoading(false);
      }
    },
    [userMessages.length]
  );

  // message sending
  const handleInput = (e) => {
    setNewMessage(e.target.value);
    socket.emit("start-typing", {
      roomId: currentChat._id,
    });
    if (typingTimeout) clearTimeout(typingTimeout);

    setTypingTimeout(
      setTimeout(() => {
        socket.emit("stop-typing");
      }, 200)
    );
  };

  const handleForm = async (e) => {
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
    //update the unread message count for the receiver
    if (unreadMessages[currentChat._id]) {
      unreadMessages[currentChat._id]++;
    } else {
      unreadMessages[currentChat._id] = 1;
    }
  };

  // arrival messages
  useEffect(() => {
    socket.on("getMessage", (data) => {
      setArrivalMessage({
        conversationId: currentChat._id,
        sender: data.senderId,
        text: data.text,
      });
      new Audio(incomingMsg).play();
    });
  }, [currentChat._id, socket]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members?.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userMessages, imageUrl, openPreview]);

  return (
    <Wrapper theme={theme}>
      <Navbar
        isOnline={isOnline}
        istyping={istyping}
        currentChat={currentChat}
      />
      {openPreview === true ? (
        <PreviewFile
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          currentChat={currentChat}
          newMessage={newMessage}
          open={openPreview}
          image={URL.createObjectURL(imageUrl)}
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
          </ChatBoxContainer>
          <Input
            setImageUrl={setImageUrl}
            setOpenPreview={setOpenPreview}
            handleForm={handleForm}
            handleInput={handleInput}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Chat;
