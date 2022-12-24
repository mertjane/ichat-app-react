import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, ChatBoxContainer } from "./Chat.styled";
import { io } from "socket.io-client";
import { getMessages } from "../../features/messages/services";
import { sendMessage } from "../../features/messages/services";
import Navbar from "./Navbar";
import Message from "./Message";
import Input from "./Input";

const ENDPOINT = "http://localhost:5000";

const Chat = ({ currentChat }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { userMessages } = useSelector((state) => state.messages);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [istyping, setIsTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const scrollRef = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io(ENDPOINT);
    socket.current.emit("addUser", userId);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
    socket.current.on("typing-from-server", () => setIsTyping(true));
    socket.current.on("stop-typing-from-server", () => setIsTyping(false));
  }, [userId]);

  useEffect(() => {
    getMessages({ currentChat, messages }, dispatch);
  }, [currentChat, dispatch, messages]);

  const handleInput = (e) => {
    setNewMessage(e.target.value);
    socket.current.emit("typing");

    if (typingTimeout) clearTimeout(typingTimeout);

    setTypingTimeout(
      setTimeout(() => {
        socket.current.emit("stop-typing");
      }, 200)
    );
  };

  const handleForm = async (e) => {
    e.preventDefault();
    sendMessage({ currentChat, userId, newMessage }, dispatch);
    const receiverId = currentChat.members.find((m) => m !== userId);
    socket.current.emit("sendMessage", {
      senderId: userId,
      receiverId,
      text: newMessage,
    });
    setNewMessage("");
  };

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
      });
    });
  }, [currentChat._id]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [userMessages]);

  return (
    <Wrapper>
      <Navbar istyping={istyping} currentChat={currentChat} />
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
