import Navbar from "./Navbar";
import Search from "./Search";
import ChatList from "./ChatList";
import { Wrapper } from "./MainView.styled";

const Main = ({ setCurrentChat }) => {
  return (
    <Wrapper>
      <Navbar />
      <Search />
      <ChatList setCurrentChat={setCurrentChat} />
    </Wrapper>
  );
};

export default Main;
