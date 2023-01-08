import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, ChatBoxContainer } from "./Chat.styled";
import { getMessages } from "../../features/messages/services";
import { sendMessage } from "../../features/messages/services";
// import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from "./Navbar";
import Message from "./Message";
import Input from "./Input";

const Chat = ({ currentChat, socket }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userMessages } = useSelector((state) => state.messages);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [istyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const scrollRef = useRef();

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

  console.log(onlineUsers);

  useEffect(() => {
    const getUserMsgs = async () => {
      getMessages({ currentChat, messages }, dispatch); 
    };
    getUserMsgs();
  }, [currentChat, dispatch, messages]);

  const handleInput = (e) => {
    setNewMessage(e.target.value);
    /* Object.assign(currentChat, {lastMessage: newMessage}); */
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
      senderId: userId,
      receiverId,
      text: newMessage,
    });
    setNewMessage("");
  };

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
      });
    });
  }, [currentChat._id, socket]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members?.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userMessages]);


  return (
    <Wrapper>
      <Navbar
        isOnline={isOnline}
        istyping={istyping}
        currentChat={currentChat}
      />
      <ChatBoxContainer>
        {userMessages.map((m, index) => (
          <div key={index} ref={scrollRef}>
            <Message message={m} own={m.sender === userId} />
          </div>
        ))}
      </ChatBoxContainer>
      <Input
        handleForm={handleForm}
        handleInput={handleInput}
        newMessage={newMessage}
      />
    </Wrapper>
  );
};

export default Chat;
