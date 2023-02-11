import { useState } from "react";
import Navbar from "./Navbar";
import ChatList from "./ChatList";
import { Wrapper, SearchWrapper} from "./MainView.styled";
import { BsFilter } from "react-icons/bs";
import { useSelector } from "react-redux";

const Main = ({
  setCurrentChat,
  currentChat,
  setNotifications,
  notifications,
}) => {
  const { theme } = useSelector((state) => state.user.userInfo)
  const [query, setQuery] = useState("");

  return (
    <Wrapper>
      <Navbar />
      <SearchWrapper theme={theme}>
        <div className="searcBtn" />
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search or start a new chat"
        />
        <BsFilter className="filterBtn" />
      </SearchWrapper>
      <ChatList
        query={query}
        setCurrentChat={setCurrentChat}
        currentChat={currentChat}
        notifications={notifications}
        setNotifications={setNotifications}
      />
    </Wrapper>
  );
};

export default Main;
