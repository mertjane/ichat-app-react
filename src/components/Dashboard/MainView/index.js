import { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ChatList from "./ChatList";
import { Wrapper } from "./MainView.styled";

const Main = ({ setCurrentChat, currentChat, socket}) => {
  const [query, setQuery] = useState("");

  return (
    <Wrapper>
      <Navbar />
      <Search onChange={(e) => setQuery(e.target.value)} />
      <ChatList
        socket={socket}
        query={query}
        setCurrentChat={setCurrentChat}
        currentChat={currentChat}
      />
    </Wrapper>
  );
};

export default Main;
