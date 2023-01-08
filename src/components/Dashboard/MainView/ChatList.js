import Conversation from "./Conversation/Conversation";
import { useSelector } from "react-redux";
import { ListContainer } from "./MainView.styled";

const ChatList = ({ setCurrentChat }) => {
  const conversation = useSelector((state) => state.conversations.info);

  return (
    <ListContainer>
      {conversation?.map((c) => (
        <Conversation c={c} key={c._id} setCurrentChat={setCurrentChat} />
      ))}
    </ListContainer>
  );
};

export default ChatList;
