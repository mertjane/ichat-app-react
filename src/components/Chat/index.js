import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, ChatBoxContainer } from "./Chat.styled";
import { sendMessage, getMessages } from "../../features/messages/services";
import { MoonLoader } from "react-spinners";
import incomingMsg from "../../assets/incoming.mp3";
import Navbar from "./Navbar";
import Message from "./Message";
import Input from "./Input";

const Chat = ({ currentChat, socket }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userMessages, unreadMessages } = useSelector(
    (state) => state.messages
  );
  const { theme } = useSelector((state) => state.user.userInfo);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [istyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const scrollRef = useRef();
  const containerRef = useRef(null);

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
  const handleScroll = useCallback((e) => {
    const { scrollTop } = e.target;
    if (scrollTop === 0) {
      setIsLoading(true);
      console.log("at the top");
    }
  }, []);

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
    scrollRef.current?.scrollIntoView({ behavior: "auto" });
  }, [userMessages]);

  return (
    <Wrapper theme={theme}>
      <Navbar
        isOnline={isOnline}
        istyping={istyping}
        currentChat={currentChat}
      />
      <ChatBoxContainer theme={theme} onScroll={handleScroll} ref={containerRef}>
        {isLoading && (
          <div className="loader">
            <MoonLoader color="#25D366" size={25} />
          </div>
        )}
        {userMessages
          .slice()
          .reverse()
          .map((m) => (
            <div key={m._id} ref={scrollRef}>
              <Message
                messages={messages}
                currentChat={currentChat}
                message={m}
                own={m.sender === userId}
              />
            </div>
          ))}
      </ChatBoxContainer>
      <Input
        handleForm={handleForm}
        handleInput={handleInput}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
    </Wrapper>
  );
};

export default Chat;
