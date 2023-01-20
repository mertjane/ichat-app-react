import { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ChatList from "./ChatList";
import { Wrapper } from "./MainView.styled";

const Main = ({ setCurrentChat, socket }) => {
const [query, setQuery] = useState("");

  return (
    <Wrapper>
      <Navbar />
      <Search onChange={(e) => setQuery(e.target.value)} />
      <ChatList query={query} socket={socket} setCurrentChat={setCurrentChat} />
    </Wrapper>
  );
};

export default Main;
