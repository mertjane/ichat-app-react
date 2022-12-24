import Conversation from "./Conversation/Conversation";
import { ListContainer } from "./MainView.styled";
import { useSelector } from "react-redux";

const ChatList = ({setCurrentChat}) => {
  const conversation = useSelector((state) => state.conversations.info);

  return (
    <ListContainer>
      {conversation?.map((c) => (
          <Conversation setCurrentChat={setCurrentChat} key={c._id} c={c} />
      ))}
    </ListContainer>
  );
};

export default ChatList;
